const {getuser} = require('../service/auth')


async function restrictToLoggedinUserOnly (req,res,next) {
    const userUid = req.cookies?.uid;

    if(!userUid)  return res.redirect('/user/login')

    const user = getuser(userUid);

    if(!user)  return res.redirect('/user/login')

    req.user = user;

    next()
}

async function checkAuth(req,res,next) {
    const userUid = req.cookies?.uid;

    
    const User = getuser(userUid);
    req.user = User;

    next()
}

module.exports= {restrictToLoggedinUserOnly , checkAuth};