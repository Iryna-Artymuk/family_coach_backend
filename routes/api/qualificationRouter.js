import express from 'express';

import {
  getAlldiplomas,
  deleteDiplomaById,
  addDiplomas,
} from '../../controllers/qualification/index.js';
import {
  authentication,
  isValidId,
  upload,
  vadidateQualificationBody,
  verifyRoles,
} from '../../middlewars/index.js';
import ROLES_LIST from '../../config/roles_list.js';

const qualificationRouter = express.Router(); // create router

qualificationRouter.get('/', getAlldiplomas);

qualificationRouter.post(
  '/',
  // authentication,
  // verifyRoles(ROLES_LIST.ContentEditor, ROLES_LIST.Admin),
  upload.single('diplomaImg'),
  // vadidateQualificationBody,
  addDiplomas
);

qualificationRouter.delete(
  '/:id',
  // authentication,
  // verifyRoles(ROLES_LIST.Admin),
  isValidId,
  deleteDiplomaById
);

export default qualificationRouter;
