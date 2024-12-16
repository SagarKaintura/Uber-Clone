const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const blacklistedModel = require('../models/blacklist.model');


module.exports.authUser = async (req, res, next) =>  {
 
  const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
  if(!token){
   return  res.status(401).json({message : 'Unauthorized'});
  }
  
  const isBlacklisted =  await  blacklistedModel.findOne({token : token})

  if(isBlacklisted){
    return res.status(401).json({ message: 'Unauthorized'})
  }
  
  try{
    const decoded =  jwt.verify( token , process.env.JWT_TOKEN_SECRET);
    
    const user = await userModel.findById(decoded._id)
    
    req.user = user;

    return next();

  }catch(err){
    return res.status(401).json({message : 'Unauthorized'})
  }
}