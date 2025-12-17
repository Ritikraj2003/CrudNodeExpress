import  auth from "../model/authModel.js";

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

