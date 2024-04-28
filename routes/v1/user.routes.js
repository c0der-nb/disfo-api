const express = require("express");
const router = express.Router();
const validateRegisterRequest = require("../../middleware/validateUserRegister");
const verifyAuth = require("../../middleware/verifyAuth");
const { getAllUsers, getUserByUsername, createUser } = require("../../controllers/user.controller");

router.get("/all", verifyAuth, getAllUsers);

router.get("/:username", getUserByUsername);

router.post("/register", validateRegisterRequest, createUser);

module.exports = router