import asyncHandler from '../../decorators/acyncHandler.js';
import Feedback from '../../models/Feedback.js';

const getAllFeedbacks = async (req, res) => {
  // const { _id: owner } = req.user;

  //const { page = 1, limit = 10, approved = true } = req.query; // деструктуризуємо параметри пошуку з фронтенду
  //   // додаємо ці параметри до запиту до БД
  //const skip = (page - 1) * limit; // скільки обєктів пропустити з початку бази
  //get only approved feedback
  // const result = await Feedback.find({ approved }, null, {
  //   skip,
  //   limit,
  // } );
  //get all feedback
  const result = await Feedback.find({});
  res.json({ quantity: result.length, data: result });
};

export default asyncHandler(getAllFeedbacks);
