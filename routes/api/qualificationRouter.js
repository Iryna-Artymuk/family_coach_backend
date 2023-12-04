import express from 'express';

import {
  getAlldiplomas,
  deleteDiplomaById,
  addDiplomas,
} from '../../controllers/qualification/index.js';
import isValidId from '../../middlewars/isValidId.js';
import vadidateQualificationBody from '../../middlewars/validation/qualificationBodyValidation.js';
import upload from '../../middlewars/upload.js';

const qualificationRouter = express.Router(); // create router

qualificationRouter.get('/', getAlldiplomas);

qualificationRouter.post(
  '/',

  upload.single('diplomaImg'),
  vadidateQualificationBody,
  addDiplomas
);

qualificationRouter.delete('/:id', isValidId, deleteDiplomaById);

export default qualificationRouter;
