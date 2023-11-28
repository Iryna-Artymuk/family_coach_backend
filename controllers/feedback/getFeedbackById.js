import asyncHandler from '../../decorators/acyncHandler.js';

const getFeedbackById = async (req, res) => {
  res.json({ data: 'one feedback data' });
};

export default asyncHandler(getFeedbackById);
