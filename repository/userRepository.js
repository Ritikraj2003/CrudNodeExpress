import User from "../model/userModel.js";

const getAllUsers = async () => {
   const  res = await User.find({});
   return {
    success: true,
    users: res
   }
};

const createUser = async (userData) => {
    console.log("Repository - Creating User:", userData);

    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
        return {
            success: false,
            message: "User with this email already exists",
            user: existingUser
        };
    }

    const user = new User(userData);
    const savedUser = await user.save();
    return {
        success: true,
        message: "User created successfully",
        user: savedUser
    };
};

const getUserById = async(id)=>{
    console.log("Repository - GetUserById:", id);
    const user = await User.findById(id);
    return user;    
}


export default { getAllUsers, createUser , getUserById };