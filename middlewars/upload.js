import multer from 'multer';
import path from 'path';
import HttpError from '../helpers/httpError.js';

// multer config indicate where to store file and wich name to use
const destinationPath = path.resolve('temp'); // path to  tempFiles folder from  project root where to save file before controller function

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const array_of_allowed_files = ['png', 'jpeg', 'jpg', 'gif', 'JPG'];

    // Get the extension of the uploaded file
    const file_extension = file.originalname.slice(
      ((file.originalname.lastIndexOf('.') - 1) >>> 0) + 2
    );
    if (!array_of_allowed_files.includes(file_extension)) {
      return cb(HttpError(400, `Invalid file`), null);
    } else cb(null, destinationPath);
  },

  filename: function (req, file, cb) {
    // creat uniqe file name
    const uniquePrefix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniquePrefix}${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;
