const jwt = require('jsonwebtoken');
require("dotenv").config();

secret_key = process.env.JSON_SECRET_KEY;


function setUser(user) {
     const payload = {
        _id: user._id,
        name:user.name
     }
    return jwt.sign(payload,secret_key,{expiresIn:"4h"})
}

function getuser(token){
    if(!token) return null;
    try {
        return jwt.verify(token,secret_key);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getuser
}