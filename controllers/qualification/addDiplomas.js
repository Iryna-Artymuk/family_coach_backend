import asyncHandler from '../../decorators/acyncHandler.js';
import Qualification from '../../models/Qualification.js';
import cloudinary from '../../helpers/cloudinary.js';
import fs from 'fs/promises';
const addDiplomas = async (req, res, next) => {
  const { file } = req;

  try {
    const uploadedResponce = await cloudinary.cloudinary.uploader.upload(
      file.path,
      {
        upload_preset: 'diplomas',
      }
    );

    const result = await Qualification.create({
      image: {
        public_id: uploadedResponce.public_id,
        url: uploadedResponce.secure_url,
      },
    });
    try {
      await fs.access(file.path);

      //return true;
      fs.unlink(file.path, function (err) {
        if (err && err.code == 'ENOENT') {
          // file doens't exist
          console.info("File doesn't exist, won't remove it.");
        } else if (err) {
          // other errors, e.g. maybe we don't have enough permission
          console.error('Error occurred while trying to remove file');
        } else {
          console.info(`removed`);
        }
      });
    } catch (err) {
      if (err.code === 'ENOENT') {
        // return false;
        console.info(` won't  remove old avatart maybe it is not exist `);
      } else {
        throw err;
      }
    }

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
export default asyncHandler(addDiplomas);
