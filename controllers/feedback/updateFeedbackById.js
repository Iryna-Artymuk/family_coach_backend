import asyncHandler from '../../decorators/acyncHandler.js';

const updateFeedbackById = async (req, res) => {
  res.json({ data: '  update feedback data' });
};

export default asyncHandler(updateFeedbackById);
