import asyncHandler from '../../decorators/acyncHandler.js';
import HttpError from '../../helpers/httpError.js';
import Qualification from '../../models/Qualification.js';

import path from 'path';

import deleteOldImg from '../../helpers/deleteOldImg.js';

const deleteDiplomaById = async (req, res) => {
  const { id } = req.params;

  const result = await Qualification.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(
      404,
      ` диплому з id:${id} не знайдено перевірте чи правильний id `
    );
  }

  // get  avatar url to delete

  const urlToDelete = result.url;
  const oldImgtUrlPath = path.resolve('public', 'images', urlToDelete);
  // Check if the file exists in the current directoryna and delete old avatar

  await deleteOldImg(oldImgtUrlPath, urlToDelete);
  res.json({
    message: ` Diploma with id:${id} deleted successfully`,
  });
};

export default asyncHandler(deleteDiplomaById);
