
import fs from 'fs/promises';
const deleteOldImg = async function (oldImgtUrlPath, urlToDelete) {
  try {
    await fs.access(oldImgtUrlPath);

    //return true;
    fs.unlink('./public/images/' + urlToDelete, function (err) {
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
};

export default deleteOldImg;
