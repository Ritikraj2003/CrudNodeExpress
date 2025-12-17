import User from "../model/userModel.js";

export const findUserByEmail = async (email) => {
  console.log("Finding user with email:", email);
  return await User.findOne({ email });
};

