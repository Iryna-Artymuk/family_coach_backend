import asyncHandler from '../../decorators/acyncHandler.js';
import HttpError from '../../helpers/httpError.js';
import Price from '../../models/Price.js';

const addPrice = async (req, res, next) => {
  // Get the new object from the request body
  const newPrice = req.body;
 
  const price = await Price.findOne();

  // Find the price document to update
  // You can use your own query logic here
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
          // try catch catching mongoose schema validation
          try {
            await price.save();
          } catch (error) {
            return next(error);
          }

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
          try {
            await price.save();
          } catch (error) {
            return next(error);
          }

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
          price =>
            price.theme === newPrice.theme && price.type === newPrice.type
        );
        if (dublicate) {
          return res.status(409).json({
            message: ` ${newPrice.theme} already exixt in DB`,
          });
        } else {
          price.lecturePrices.push(newPrice);
          // Save the updated document
          // try catch catching mongoose schema validation
          try {
            await price.save();
          } catch (error) {
            return next(error);
          }

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
