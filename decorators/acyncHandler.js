const asyncHandler = ctrl => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      
      // викликаємо функцію обробки помилок
      next(error);
      console.log('error: ', error);
    }
  };

  return func;
};
export default asyncHandler;
