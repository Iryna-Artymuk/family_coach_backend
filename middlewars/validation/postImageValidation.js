import validateBody from '../../decorators/validateBody.js';
import updateImageSchema from '../../joi_schemas/updateImageSchema.js';


const vadidatePostImage = validateBody(updateImageSchema);

export default vadidatePostImage;
