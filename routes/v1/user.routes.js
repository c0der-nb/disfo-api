const express = require("express");
const router = express.Router();
const validateRegisterRequest = require("../../middleware/validateUserRegister");
const verifyAuth = require("../../middleware/verifyAuth");
const userModel = require("../../models/user.model");

router.get("/all", verifyAuth, async (req, res) => {
    try {
        const users = await userModel.find();
        if (!users) {
            return res.status(404).json({message: "No users found."});
        }
        return res.status(200).json(users);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({message: "Something went wrong! Try again later."})
    }
})

router.get("/:username", async (req, res) => {
    try {
        const { username } = req.params;
        const user = await userModel.findOne({userName: username});
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
})

router.post("/register", validateRegisterRequest, async (req, res) => {
    try {
        const newUserDoc = await userModel.create(req.body);

        return res.status(201).json(newUserDoc);
    }
    catch (err) {
        console.log(err);
        if (err.errorResponse?.code === 11000) {
            return res.status(409).json({message: "Failed to create new user.", reason: "Already Exists in DB"})
        }
        return res.status(500).json({message: "Something went wrong! Try agin later."});
    }
})

module.exports = router