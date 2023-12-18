import asyncHandler from '../../decorators/acyncHandler.js';
import Qualification from '../../models/Qualification.js';

const getAllDiplomas = async (req, res) => {
  const result = await Qualification.find({});
  res.json({ status: 'success', quantity: result.length, data: result });
};

export default asyncHandler(getAllDiplomas);
