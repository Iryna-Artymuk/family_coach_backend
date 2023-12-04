import asyncHandler from '../../decorators/acyncHandler.js';
import Feedback from '../../models/Feedback.js';

const getAllFeedbacks = async (req, res) => {

  const result = await Feedback.find({});
  res.json({ quantity: result.length, data: result });
};

export default asyncHandler(getAllFeedbacks);
