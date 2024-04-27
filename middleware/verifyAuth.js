const API_KEY = "Abracadabra";

const verifyAuth = (req, res, next) => {
    if (!req.headers['x-api-key'] || req.headers['x-api-key'] !== API_KEY) {
        return res.status(403).json({message: "Unauthorized request"});
    }
    next();
}

module.exports = verifyAuth;