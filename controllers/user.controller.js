const UserService = require("../services/user.service");

const userServiceInstance = new UserService();

const getAllUsers = async (req, res) => {
    try {
        const users = await userServiceInstance.findAllUsers();
        if (!users) {
            return res.status(404).json({message: "No users found."});
        }
        return res.status(200).json(users);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({message: "Something went wrong! Try again later."})
    }
}

const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await userServiceInstance.findUserByUsername(username);
        if (user) {
            return res.status(200).json(user);
        }
        else {
            return res.status(404).json({message: "User not found", username});
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({message: "Something went wrong! Try again later."});
    }
}

const createUser = async (req, res) => {
    try {
        const newUserDoc = await userServiceInstance.addUser(req.body);

        return res.status(201).json(newUserDoc);
    }
    catch (err) {
        console.log(err);
        if (err.errorResponse?.code === 11000) {
            return res.status(409).json({message: "Failed to create new user.", reason: "Already Exists in DB"})
        }
        return res.status(500).json({message: "Something went wrong! Try agin later."});
    }
}

module.exports = { getAllUsers, getUserByUsername, createUser };