import asyncHandler from '../../decorators/acyncHandler.js';
import Feedback from '../../models/Feedback.js';

const getFeedbackById = async (req, res) => {
  const { id } = req.params;

  const result = await Feedback.findOne({ _id: id });

  // якщо id буде не правильний то  БД поверне null (так працює база даних )null це не помилка а нам треба щоб коли id не вірний тобто коли база нічого не знайшла треба створти повертати помилку
  if (!result) {
    throw HttpError(
      404,
      `контакту з id:${id} не знайдено перевірте чи правильний id `
    );
  }

  res.json(result);
};

export default asyncHandler(getFeedbackById);
