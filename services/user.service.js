const User = require("../models/user.model");

class UserService {
    findAllUsers = async () => {
        return await User.find();
    }
    
    findUserByUsername = async (username) => {
        return await User.findOne({userName: username});
    }
    
    addUser = async (body) => {
        return await User.create(body);
    }
}

module.exports = UserService;