import express from 'express';
import {
  getFeedbackById,
  getAllFeedbacks,
  addFeedback,
  updateFeedbackById,
  deleteFeedbackById,
} from '../../controllers/feedback/index.js';
import {isValidId, vadidateFeedback} from '../../middlewars/index.js';



const feedbackRouter = express.Router(); // create router

feedbackRouter.get('/', getAllFeedbacks);
//router.get('/', authentication, getAllFeedbacks);

feedbackRouter.get('/:id', isValidId, getFeedbackById);

feedbackRouter.post('/', vadidateFeedback.vadidateFeedbackBody, addFeedback);

feedbackRouter.patch(
  '/:id/status',
  isValidId,
  vadidateFeedback.vadidateFeeedbackStatus,
  updateFeedbackById
);

feedbackRouter.delete('/:id', isValidId, deleteFeedbackById);

export default feedbackRouter;
