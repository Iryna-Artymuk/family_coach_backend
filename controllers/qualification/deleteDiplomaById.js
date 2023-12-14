import asyncHandler from '../../decorators/acyncHandler.js';
import HttpError from '../../helpers/httpError.js';
import Qualification from '../../models/Qualification.js';
import cloudinary from '../../helpers/cloudinary.js';
const deleteDiplomaById = async (req, res) => {
  const { id } = req.params;
  const { image } = await Qualification.findById(id);
  const cloudinaryResult = await cloudinary.cloudinary.uploader.destroy(
    image.public_id
  );

  const result = await Qualification.findByIdAndDelete(id);

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

export default asyncHandler(deleteDiplomaById);
