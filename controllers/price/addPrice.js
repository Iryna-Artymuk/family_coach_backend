import asyncHandler from '../../decorators/acyncHandler.js';
import Price from '../../models/Price.js';

const addPrice = async (req, res) => {
  // Get the new object from the request body
  const newPrice = req.body;

  // Validate the new object

  if (!newPrice.category) {
    return res.status(400).json({ message: 'Invalid category' });
  }

  // Find the price document to update
  // You can use your own query logic here
  const price = await Price.findOne();

  switch (newPrice.category) {
    case 'Дорослі':
      (async function () {
        const dublicate = price.adultPrices.find(
          price => price.type === newPrice.type
        );
        if (dublicate) {
          return res
            .status(409)
            .json({ message: ` ${dublicate.type} already exixt in DB` });
        } else {
          price.adultPrices.push(newPrice);
          // Save the updated document
          await price.save();

          // Send a success response
          res.status(201).json({
            message: `Successfully added ${newPrice.type} to adult price `,
          });
        }
      })();

      break;
    case 'Діти':
      (async function () {
        const dublicate = price.kidsPrices.find(
          price => price.type === newPrice.type
        );
        if (dublicate) {
          return res
            .status(409)
            .json({ message: ` ${dublicate.type} already exixt in DB` });
        } else {
          price.kidsPrices.push(newPrice);
          // Save the updated document
          await price.save();

          // Send a success response
          res.status(201).json({
            message: `Successfully added ${newPrice.type} to kids price `,
          });
        }
      })();

      break;
    case 'Лекції':
      (async function () {
        const dublicate = price.lecturePrices.find(
          price => price.theme === newPrice.theme
        );
        if (dublicate) {
          return res
            .status(409)
            .json({
              message: ` ${newPrice.theme} already exixt in DB`,
            });
        } else {
          price.lecturePrices.push(newPrice);
          // Save the updated document
          await price.save();

          // Send a success response
          res.status(201).json({
            message: `Successfully added ${newPrice.type}${newPrice.theme} to lecture `,
          });
        }
      })();

      break;
    default:
    //statements;
  }
};
// Export the controller functions
export default asyncHandler(addPrice);
