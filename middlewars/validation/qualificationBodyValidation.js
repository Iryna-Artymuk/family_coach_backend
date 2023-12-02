import validateBody from '../../decorators/validateBody.js';
import qualificationSchema from '../../joi_schemas/qualificationSchema.js';

const vadidateQualificationBody = validateBody(qualificationSchema);

export default vadidateQualificationBody;
