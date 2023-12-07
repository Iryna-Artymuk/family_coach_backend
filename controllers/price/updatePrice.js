import asyncHandler from '../../decorators/acyncHandler.js';
import Price from '../../models/Price.js';

const updatePrice = async (req, res, next) => {
  // Get the new object from the request body

  const updatePrice = { ...req.body };
  const { id } = req.body;

  // Validate the new object will move to middlware joi validation
  if (!updatePrice.category) {
    return res.status(400).json({ message: 'Invalid category' });
  }

  // Find the price document to update
  // You can use your own query logic here
  const price = await Price.findOne();
  console.log('updatePrice.category: ', updatePrice.category);

  switch (updatePrice.category) {
    case 'Дорослі':
      (async function () {
        const priceToUpdate = price.adultPrices.find(price => price.id === id);

        if (priceToUpdate) {
          const index = price.adultPrices.indexOf(priceToUpdate);
          price.adultPrices.splice(index, 1, updatePrice);
          // Save the updated document
          await price.save();

          // Send a success response
          res.status(200).json({
            message: ` ${priceToUpdate.type} updated successfully`,
          });
        } else {
          //HttpError(400, `  item with id: ${id} not exist in DB`);
          res.status(400).json({
            message: `item with id: ${id} not exist in DB`,
          });
        }
      })();

      break;
    case 'Діти':
      (async function () {
        const priceToUpdate = price.kidsPrices.find(price => price.id === id);
        if (priceToUpdate) {
          const index = price.kidsPrices.indexOf(priceToUpdate);
          price.kidsPrices.splice(index, 1, updatePrice);
          // Save the updated document
          await price.save();
          // Send a success response
          res.status(200).json({
            message: ` ${priceToUpdate.type} updated successfully`,
          });
        } else {
          //HttpError(400, `  item with id: ${id} not exist in DB`);
          res.status(400).json({
            message: `item with id: ${id} not exist in DB`,
          });
        }
      })();

      break;
    case 'Лекції':
      (async function () {
        const priceToUpdate = price.lecturePrices.find(
          price => price.id === id
        );
        console.log('priceToUpdate : ', priceToUpdate);

        if (priceToUpdate) {
          const index = price.lecturePrices.indexOf(priceToUpdate);

          price.lecturePrices.splice(index, 1, updatePrice);

          // Save the updated document
          await price.save();
          // Send a success response

          // Send a success response
          res.status(200).json({
            message: `Successfully updated ${priceToUpdate.type}${updatePrice.theme} `,
          });
        } else {
          //HttpError(400, `  item with id: ${id} not exist in DB`);
          res.status(400).json({
            message: `item with id: ${id} not exist in DB`,
          });
        }
      })();

      break;
    default:
    //statements;
  }
};
// Export the controller functions
export default asyncHandler(updatePrice);
