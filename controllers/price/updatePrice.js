import asyncHandler from '../../decorators/acyncHandler.js';
import Price from '../../models/Price.js';

const updatePrice = async (req, res, next) => {
  // Get the new object from the request body
  const { id } = req.params;
  const updatePrice = { ...req.body };

  // Find the price document to update
  // You can use your own query logic here
  const price = await Price.findOne();
  switch (updatePrice.category) {
    case 'Дорослі':
      (async function () {
        const priceToUpdate = price.adultPrices.find(price => price.id === id);

        if (priceToUpdate) {
          const index = price.adultPrices.indexOf(priceToUpdate);
          price.adultPrices.splice(index, 1, updatePrice);
          // Save the updated document
          // try catch catching mongoose schema validation
          try {
            await price.save();
          } catch (error) {
            return next(error);
          }

          // Send a success response
          res.status(200).json({
            status: 'success',
            message: ` ${priceToUpdate.type} updated successfully`,
            data: updatePrice,
          });
        } else {
          //HttpError(400, `  item with id: ${id} not exist in DB`);
          res.status(400).json({
            status: 'error',
            message: `item with id: ${id} not exist in  adultPrices DB`,
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
          // try catch catching mongoose schema validation on save
          try {
            await price.save();
          } catch (error) {
            return next(error);
          }
          // Send a success response
          res.status(200).json({
            status: 'success',
            message: ` ${priceToUpdate.type} updated successfully`,
          });
        } else {
          res.status(400).json({
            status: 'error',
            message: `item with id: ${id} not exist in  kidsPrices DB`,
          });
        }
      })();

      break;
    case 'Лекції':
      (async function () {
        const priceToUpdate = price.lecturePrices.find(
          price => price.id === id
        );

        if (priceToUpdate) {
          const index = price.lecturePrices.indexOf(priceToUpdate);

          price.lecturePrices.splice(index, 1, updatePrice);

          // Save the updated document
          // try catch catching mongoose schema validation on save
          try {
            await price.save();
          } catch (error) {
            return next(error);
          }
          // Send a success response

          // Send a success response
          res.status(200).json({
            status: 'success',
            message: `Successfully updated ${priceToUpdate.type}${updatePrice.theme} `,
          });
        } else {
          //HttpError(400, `  item with id: ${id} not exist in DB`);
          res.status(400).json({
            status: 'error',
            message: `item with id: ${id} not exist in lecturePrices  DB`,
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
