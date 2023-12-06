import asyncHandler from '../../decorators/acyncHandler.js';
import Price from '../../models/Price.js';

const getPrice = async (req, res) => {
  const result = await Price.find({})
  .populate('kids')
  // .populate('adult')
  ;
  
  //console.log('result: ', result);
  res.json({ data: result });
};

export default asyncHandler(getPrice);
