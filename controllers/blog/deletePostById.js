import asyncHandler from '../../decorators/acyncHandler.js';
import HttpError from '../../helpers/httpError.js';
import cloudinary from '../../helpers/cloudinary.js';
import Blog from '../../models/Blog.js';

const deletePostById = async (req, res) => {
  const { id } = req.params;
  const { postImage } = await Blog.findById(id);

  const cloudinaryResult = await cloudinary.cloudinary.uploader.destroy(
    postImage.public_id
  );
  const result = await Blog.findByIdAndDelete(id);

  if (!result && !cloudinaryResult) {
    throw HttpError(
      404,
      ` диплому з id:${id} не знайдено перевірте чи правильний id `
    );
  }

  res.json({
    status: 'success',
    message: ` Diploma with id:${id} deleted successfully`,
  });
};

export default asyncHandler(deletePostById);
