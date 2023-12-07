import asyncHandler from '../../decorators/acyncHandler.js';
import HttpError from '../../helpers/httpError.js';
import Price from '../../models/Price.js';

const deletePrice = async (req, res) => {
  const { category, id } = req.body;

  // Validate the new object will move to middelware
  if (!category) {
    return res.status(400).json({ message: 'Invalid category' });
  }

  // Find the price document to update
  const price = await Price.findOne();

  switch (category) {
    case 'Дорослі':
      (async function () {
        const priceToDelete = price.adultPrices.find(price => price.id === id);

        if (priceToDelete) {
          const index = price.adultPrices.indexOf(priceToDelete);
          console.log('index: ', index);
          price.adultPrices.splice(index, 1);
          // Save the updated document
          await price.save();

          // Send a success response
          res.status(200).json({
            message: ` Пакет  ${priceToDelete.type} delete successfully`,
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
        const priceToDelete = price.kidsPrices?.find(price => price.id === id);

        if (priceToDelete) {
          const index = price.kidsPrices.indexOf(priceToDelete);
          price.kidsPrices.splice(index, 1);
          // Save the updated document
          await price.save();

          // Send a success response
          res.status(200).json({
            message: `  ${priceToDelete.type} delete successfully`,
          });
        } else {
          //HttpError(400, ` item with id: ${id} not exist in DB`);
          res.status(400).json({
            message: ` item with id: ${id} not exist in DB`,
          });
        }
      })();

      break;
    case 'Лекції':
      (async function () {
        const priceToDelete = price.lecturePrices?.find(
          price => price.id === id
        );

        if (priceToDelete) {
          const index = price.lecturePrices.indexOf(priceToDelete);
          price.lecturePrices.splice(index, 1);
          // Save the updated document
          await price.save();

          // Send a success response
          res.status(200).json({
            message: `  ${priceToDelete.theme} delete successfully`,
          });
        } else {
          // HttpError(400, `item with id: ${id} not exist in DB`);
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
export default asyncHandler(deletePrice);
