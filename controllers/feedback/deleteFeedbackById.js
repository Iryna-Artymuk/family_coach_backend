import asyncHandler from '../../decorators/acyncHandler.js';
import Feedback from '../../models/Feedback.js';

const deleteFeedbackById = async (req, res) => {
  const { id } = req.params;

  const result = await Feedback.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(
      404,
      `відгуку  з id:${id} не знайдено перевірте чи правильний id `
    );
  }

  res.json({
    status: 'success',
    message: ` Feedback with id:${id} deleted successfully`,
  });
};

export default asyncHandler(deleteFeedbackById);
