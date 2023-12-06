import asyncHandler from '../../decorators/acyncHandler.js';
import AdultPrice from '../../models/AdultPrice.js';
const updateAdultPrice = async (req, res) => {
  const { id } = req.params;

  const updatePrice = {
    ...req.body,
  };

  const result = await AdultPrice.findOneAndUpdate(
    { _id: id }, // id
    { ...updatePrice }, // те що треба обновити
    {
      new: true, // повернути оновлений контакт
      runValidators: true, // застосувати mongoose схему валідації
    }
  );

  res.status(200).json(result);
};

export default asyncHandler(updateAdultPrice);
