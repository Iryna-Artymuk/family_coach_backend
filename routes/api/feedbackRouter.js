import express from 'express';
import {
  getFeedbackById,
  getAllFeedbacks,
  addFeedback,
  updateFeedbackById,
  deleteFeedbackById,
} from '../../controllers/feedback/index.js';

import vadidateFeedback from '../../middlewars/validation/feedbackBodyValidation.js';
import isValidId from '../../middlewars/isValidId.js';

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
