import jwt from "jsonwebtoken";
import { findUserByEmail } from "../repository/authRepository.js";

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

export const loginUser = async (req, res) => {
  const { email } = req.body;
  console.log(email); 
  const user = await findUserByEmail(email);
  if (!user) return res.status(404).json({ message: "User not found" });

  // // Plain text comparison
  // if (user.password !== password) {
  //   return res.status(401).json({ message: "Invalid credentials" });
  // }

  const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
};