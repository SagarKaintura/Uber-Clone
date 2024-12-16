const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');
const captainServices = require('../services/captain.service')
const blacklistedModel = require('../models/blacklist.model')

module.exports.registerCaptain = async (req, res, next)=>{

  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array()})
  }

  const {fullname , password , email , vehicle} = req.body ;

  const isCaptainAlreadyExists = await captainModel.findOne({email});

  if(isCaptainAlreadyExists){
    return res.status(400).json({message : 'Captain already exists'})
  }

  const hashedPassword = await captainModel.hashPassword(password);
 
  const captain = await captainServices.createCaptain({
    firstname : fullname.firstname ,
    lastname: fullname.lastname,
    email,
    password : hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate ,
    capacity: vehicle.capacity,
    vehicleType : vehicle.vehicleType

  })

  const token =  captain.generateAuthToken();

  res.status(400).json({token , captain})

}

module.exports.loginCaptain = async (req, res, next)=>{
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array()})
  }

  const {email , password } = req.body ;

  const captain =  await captainModel.findOne({email}).select('+password');

  if(!captain){
    return res.status(400).json({message : 'Invalid email and password'});
  }

  const isMatch = await captain.comparePassword(password);

  if(!isMatch){
    return res.status(400).json({message : 'Invalid email and password'});
  }

  const token = captain.generateAuthToken();

   res.cookie("token" , token )

   res.status(200).json({token , captain})
}

module.exports.getCaptainProfile = async (req,res , next )=>{
  res.status(200).json(req.captain)
}

module.exports.logoutCaptain  = async (req, res, next)=>{
  res.clearCookie("token");

  const token = req.cookies.token || req.headers.authorization.split(' ')[1]

  await blacklistedModel.create({token})

  res.status(200).json({message : 'logged out'})
}