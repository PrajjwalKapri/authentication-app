export const test = (req, res, next) => {
  try {
    res.status(200).send("API is working!");
  } catch (error) {
    next(error);
  }
};
