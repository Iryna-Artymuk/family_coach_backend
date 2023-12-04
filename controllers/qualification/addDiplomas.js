import asyncHandler from '../../decorators/acyncHandler.js';
import Qualification from '../../models/Qualification.js';
import path from 'path';
import fs from 'fs/promises';

const addDiplomas = async (req, res) => {
  const { file } = req;

  const { path: oldPath, filename } = file;

  // path to folder where to save file permanent
  const diplomaPath = path.resolve('public', 'images', 'diplomas');

  // new path including filename in public folder
  const newPath = path.join(diplomaPath, filename);

  // transfer file from temp  to public folder
  await fs.rename(oldPath, newPath);

  // path to file in DB it should be relating to server adress other part of path we add in app.js when allows static file
  const diplomaURL = path.join('diplomas', filename);

  const result = await Qualification.create({ url: diplomaURL });

  res.status(201).json(result);
};

export default asyncHandler(addDiplomas);
