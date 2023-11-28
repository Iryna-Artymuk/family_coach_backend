import asyncHandler from '../../decorators/acyncHandler.js';

const getAllDiplomas = async (req, res) => {
  //   const { _id: owner } = req.user;
  //   console.log('owner : ', owner);

  //   const { page = 1, limit = 10, favorite = true } = req.query; // деструктуризуємо параметри пошуку з фронтенду
  //   // додаємо ці параметри до запиту до БД
  //   const skip = (page - 1) * limit; // скільки обєктів пропустити з початку бази

  //   const result = await Contact.find({ owner, favorite }, null, {
  //     skip,
  //     limit,
  //   }).populate('owner');
  //res.json({ quantity: feedbackData.length, data: feedbackData });
  res.json({ data: 'qualifications data ' });
};

export default asyncHandler(getAllDiplomas);
