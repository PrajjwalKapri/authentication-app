import User from "../models/user.model.mjs";
import bcryptjs from "bcryptjs";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    next(error);
    // or next(errorHandler(300,"something went wrong!"))
  }
};
