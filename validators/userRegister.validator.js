const Joi = require("joi");

const validator = Joi.object().keys({
    fullName: Joi.string().pattern(new RegExp('^[a-zA-Z]')).max(50),
    userName: Joi.string().pattern(new RegExp('^[a-zA-Z]')).max(25).required(),
    email: Joi.string().email().required()
});

module.exports = validator;