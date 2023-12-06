import asyncHandler from '../../decorators/acyncHandler.js';
import LecturePrice from '../../models/LecturePrice.js';

const getLecturePrice = async (req, res) => {
  const result = await LecturePrice.find({});

  res.json({ data: result });
};

export default asyncHandler(getLecturePrice);
