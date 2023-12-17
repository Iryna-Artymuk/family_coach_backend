import asyncHandler from '../../decorators/acyncHandler.js';
import Feedback from '../../models/Feedback.js';

const getAllFeedbacks = async (req, res) => {
  const { feedbackStatus } = req.params;
  console.log('req.params: ', req.params);
  console.log(' feedbackStatus : ', feedbackStatus);
  if (feedbackStatus === 'all') {
    const result = await Feedback.find({});
    res.json({ status: 'success', quantity: result.length, data: result });
  }
  if (feedbackStatus === 'approved') {
    const result = await Feedback.find({ approved: true });
    res.json({ status: 'success', quantity: result.length, data: result });
  }
};

export default asyncHandler(getAllFeedbacks);
