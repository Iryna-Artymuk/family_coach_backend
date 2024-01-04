import validateBody from '../../decorators/validateBody.js';
import userAvatarSchema from '../../joi_schemas/UserAvatarSchema.js';



const vadidateAvatar = validateBody(userAvatarSchema);

export default vadidateAvatar;
