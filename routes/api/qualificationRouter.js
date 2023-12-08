import express from 'express';

import {
  getAlldiplomas,
  deleteDiplomaById,
  addDiplomas,
} from '../../controllers/qualification/index.js';
import { isValidId, upload, vadidateQualificationBody } from '../../middlewars/index.js';

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
