import validateBody from '../../decorators/validateBody.js';
import feedbackSchemas from '../../joi_schemas/feedbackSchemas.js';

const vadidateFeedbackBody = validateBody(feedbackSchemas.addFeedbackSchema);

const vadidateFeeedbackStatus = validateBody(
  feedbackSchemas.feedbackStatusSchema
);
export default {
  vadidateFeedbackBody,
  vadidateFeeedbackStatus,
};
