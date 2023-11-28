import asyncHandler from '../../decorators/acyncHandler.js';

const addFeedback = async (req, res) => {
  res.json({ data: `feedback:${req.body.feedback}` });
};

export default asyncHandler(addFeedback);
