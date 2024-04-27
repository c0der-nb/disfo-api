const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        maxLength: 50,
        default: "",
        required: false
    },
    userName: {
        type: String,
        maxLength: 25,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model("User", userSchema);