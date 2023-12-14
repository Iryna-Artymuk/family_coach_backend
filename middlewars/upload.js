import multer from 'multer';
import path from 'path';
import HttpError from '../helpers/httpError.js';

// multer config indicate where to store file and wich name to use
const destinationPath = path.resolve('temp'); // path to  tempFiles folder from  project root where to save file before controller function

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destinationPath);
  },

  filename: function (req, file, cb) {
    console.log('file: ', file);
    // creat uniqe file name
    const uniquePrefix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniquePrefix}${file.originalname}`);
  },
});
const upload = multer({
  storage,
  limits: {
    // fieldNameSize: 300,
    fileSize: 1024 * 1024 * 2, //2 Mb
  },
  fileFilter: (req, file, callback) => {
    const acceptableExtensions = ['.png', '.jpeg', '.jpg', '.JPG'];
    if (!acceptableExtensions.includes(path.extname(file.originalname))) {
      return callback(
        HttpError(
          400,
          `${path.extname(
            file.originalname
          )} is invalid file extention allowed  files format .png', .jpeg, .jpg,  .JPG`
        )
      );
    }

    // added this
    const fileSize = parseInt(req.headers['content-length']);
    if (fileSize > 1024 * 1024 * 2) {
      return callback(
        HttpError(
          400,
          `Invalid file size, file ${(fileSize / 1048576).toFixed(
            2
          )} Mb is too big, max size 2Mb`
        )
      );
    }
    // --

    callback(null, true);
  },
});

export default upload;
