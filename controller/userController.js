import User from "../model/userModel.js";

import userRepo from "../repository/userRepository.js";

export const create = async (req, res) => {
  try {
    const userData = req.body;
    const result = await userRepo.createUser(userData);

    res.status(201).json({success: true, user: result, });
  } catch (err) {
             res.status(400).json({success: false,message: err.message || "Server Error",});
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const users = await userRepo.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
export const GetUserById = async (req, res)=>{
  try{
    const { _id } = req.body;
    console.log("Controller - GetUserById:", _id);
    const user = await userRepo.getUserById(_id);
    res.status(200).json({success:true,user:user}); 
  } catch(error){
    res.status(500).json({message: "Server Error"});  
  }
};
export const fetch = async (req, res)=>{
    try{
            res.json("Hello Ritik....")
    } catch(error){
        res.status(500).json({message: "Server Error"});
    }
};
