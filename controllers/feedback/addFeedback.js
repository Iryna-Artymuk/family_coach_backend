import asyncHandler from '../../decorators/acyncHandler.js';
import Feedback from '../../models/Feedback.js';

const addFeedback = async (req, res) => {
  const result = await Feedback.create(req.body);

  res.status(201).json({
    status: 'success',
    data: result,
  });
};

export default asyncHandler(addFeedback);
