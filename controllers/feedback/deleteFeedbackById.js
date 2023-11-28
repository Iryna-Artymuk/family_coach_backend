import asyncHandler from '../../decorators/acyncHandler.js';

const deleteFeedbackById = async (req, res) => {
  const { feedbackId } = req.params;
  res.json({ data: ` feedback  with  id${feedbackId} deleted ` });
};

export default asyncHandler(deleteFeedbackById);
