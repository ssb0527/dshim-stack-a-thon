const { models: { User }} = require('../db');

const isLoggedIn = async(req, res, next) => {
    try {
        req.user = await User.findByToken(req.headers.authorization);
        next();
    }
    catch(err) {
        next(err);
    }
};

module.exports = isLoggedIn;