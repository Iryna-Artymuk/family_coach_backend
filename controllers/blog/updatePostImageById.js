import fs from 'fs/promises';
import cloudinary from '../../helpers/cloudinary.js';
import asyncHandler from '../../decorators/acyncHandler.js';

import Blog from '../../models/Blog.js';

const updatePostImageById = async (req, res, next) => {
  const { file } = req;

  const { id } = req.params;
  try {
    // upload  new img to  cloudinary
    const uploadedResponce = await cloudinary.cloudinary.uploader.upload(
      file.path,
      {
        upload_preset: 'blog',
      }
    );

    const result = await Blog.findOne({ _id: id });
    // delete old img from cloudinary

    await cloudinary.cloudinary.uploader.destroy(result.postImage.public_id);

    //update img  in DB
    result.postImage = {
      public_id: uploadedResponce.public_id,
      url: uploadedResponce.secure_url,
    };
    result.save();

    // delete from temp folder
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

    res.status(201).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default asyncHandler(updatePostImageById);
