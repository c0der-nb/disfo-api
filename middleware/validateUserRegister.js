const userSchema = require("../validators/userRegister.validator");

const validateRegisterRequest = (req, res, next) => {
    const result = userSchema.validate(req.body);
    if(result.error)
      return res.status(422).json({ message: result.error.details[0].message });
    next()
}

module.exports = validateRegisterRequest;