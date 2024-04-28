const User = require("../models/user.model");

const findAllUsers = async () => {
    return await User.find();
}

const findUserByUsername = async (username) => {
    return await User.findOne({userName: username});
}

const addUser = async (body) => {
    return await User.create(body);
}

module.exports = { findAllUsers, findUserByUsername, addUser };