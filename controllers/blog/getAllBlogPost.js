import asyncHandler from '../../decorators/acyncHandler.js';
import Blog from '../../models/Blog.js';

const getAllBlogPosts = async (req, res) => {
  // const { _id: author } = req.user;

  const { page = 1, limit = 10 } = req.query; // деструктуризуємо параметри пошуку з фронтенду
  // додаємо ці параметри до запиту до БД
  const skip = (page - 1) * limit; // скільки обєктів пропустити з початку бази

  // const result = await Blog.find({}, null, {
  //   skip,
  //   limit,
  // });
  const result = await Blog.find({});

  res.json({ status: 'success', quantity: result.length, data: result });
};

export default asyncHandler(getAllBlogPosts);
