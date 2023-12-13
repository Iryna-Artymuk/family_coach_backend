import asyncHandler from '../../decorators/acyncHandler.js';
import Qualification from '../../models/Qualification.js';
import path from 'path';
import fs from 'fs/promises';
import cloudinary from '../../helpers/cloudinary.js';

const addDiplomas = async (req, res, next) => {
  const { file } = req;

  const { path: oldPath, filename } = file;

  // path to folder where to save file permanent
  const diplomaPath = path.resolve('public', 'images', 'diplomas');

  // // new path including filename in public folder
  const newPath = path.join(diplomaPath, filename);

  // // transfer file from temp  to public folder
  // await fs.rename(oldPath, newPath);

  // // path to file in DB it should be relating to server adress other part of path we add in app.js when allows static file
  // const diplomaURL = path.join('diplomas', filename);

  try {
    const uploadedResponce = await cloudinary.cloudinary.uploader.upload(
      file.path,
      {
        upload_preset: 'diplomas',
      }
    );
    console.log('uploadedResponce : ', uploadedResponce);
    const result = await Qualification.create({
      image: {
        public_id: uploadedResponce.public_id,
        url: uploadedResponce.secure_url,
      },
    });

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
export default asyncHandler(addDiplomas);
