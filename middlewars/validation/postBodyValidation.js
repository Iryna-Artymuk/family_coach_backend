import validateBody from '../../decorators/validateBody.js';
import addPostSchema from '../../joi_schemas/postSchemas.js';


const vadidatePostBody = validateBody(addPostSchema);

export default vadidatePostBody;
