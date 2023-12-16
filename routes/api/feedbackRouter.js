import express from 'express';
import {
  getFeedbackById,
  getAllFeedbacks,
  addFeedback,
  updateFeedbackById,
  deleteFeedbackById,
} from '../../controllers/feedback/index.js';
import {
  authentication,
  isValidId,
  vadidateFeedback,
  verifyRoles,
} from '../../middlewars/index.js';
import ROLES_LIST from '../../config/roles_list.js';

const feedbackRouter = express.Router(); // create router

feedbackRouter.get('/:feedbackStatus', getAllFeedbacks);
//router.get('/', authentication, getAllFeedbacks);

feedbackRouter.get('/:id', isValidId, getFeedbackById);

feedbackRouter.post('/', vadidateFeedback.vadidateFeedbackBody, addFeedback);

feedbackRouter.patch(
  '/:id/status',
  authentication,
  // verifyRoles(ROLES_LIST.ContentEditor, ROLES_LIST.Admin),
  isValidId,
  // vadidateFeedback.vadidateFeeedbackStatus,
  updateFeedbackById
);

feedbackRouter.delete(
  '/:id',
  isValidId,
  // authentication,
  // verifyRoles(ROLES_LIST.Admin),
  deleteFeedbackById
);

export default feedbackRouter;
