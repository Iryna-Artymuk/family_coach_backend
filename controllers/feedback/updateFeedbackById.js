import asyncHandler from '../../decorators/acyncHandler.js';
import Feedback from '../../models/Feedback.js';

const updateFeedbackById = async (req, res) => {
  const { id } = req.params;

  const updateFeedback = {
    ...req.body,
  };

  const result = await Feedback.findOneAndUpdate(
    { _id: id }, // id
    { ...updateFeedback }, // те що треба обновити
    {
      new: true, // повернути оновлений контакт
      runValidators: true, // застосувати mongoose схему валідації
    }
  );

  res.status(200).json(result);
};

export default asyncHandler(updateFeedbackById);
