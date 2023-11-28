import express from 'express';
import {
  getFeedbackById,
  getAllFeedbacks,
  addFeedback,
  updateFeedbackById,
} from '../../controllers/feedback/index.js';
import deleteFeedbackById from '../../controllers/feedback/deleteFeedbackById.js';

import vadidateFeedback from '../../middlewars/validation/feedbackBodyValidation.js';

const feedbackRouter = express.Router(); // create router

feedbackRouter.get('/', getAllFeedbacks);
//router.get('/', authentication, getAllFeedbacks);

feedbackRouter.get('/:feedbackId', getFeedbackById);

feedbackRouter.post('/', vadidateFeedback.vadidateFeedbackBody, addFeedback);

feedbackRouter.patch(
  '/:feedbackId/status',
  vadidateFeedback.vadidateFeeedbackStatus,
  updateFeedbackById
);

feedbackRouter.delete('/:feedbackId', deleteFeedbackById);

export default feedbackRouter;
