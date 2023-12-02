export const imgValidation = (req, res, next) => {
  const image = req.file;
  // Array of allowed files
  const array_of_allowed_files = ['png', 'jpeg', 'jpg', 'gif'];
  const array_of_allowed_file_types = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/gif',
  ];
  // Allowed file size in mb
  const allowed_file_size = 1;
  // Get the extension of the uploaded file
  const file_extension = image.originalname.slice(
    ((image.originalname.lastIndexOf('.') - 1) >>> 0) + 2
  );
  const urlToDelete = image.path;

  // Check if the file exists in the current directoryna and delete old avatar

  // Check if the uploaded file is allowed
  if (
    !array_of_allowed_files.includes(file_extension)
    // || !array_of_allowed_file_types.includes(image.memetype)
  ) {
    throw Error('Invalid file');
  }

  if (image.size / (1024 * 1024) > allowed_file_size) {
    throw Error('File too large');
  }
  return next();
};
