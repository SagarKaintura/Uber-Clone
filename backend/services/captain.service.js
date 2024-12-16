const captainModel = require('../models/captain.model')

module.exports.createCaptain = async ({
  firstname, lastname , email , password , color, plate, capacity , vehicleType 
})=>{
  if(!firstname || !email || !password || !plate || !color || !capacity || !vehicleType){
    throw new error('All fields are required')
  }
  
  const captain = await captainModel.create({
    fullname:{
      firstname: firstname,
      lastname:  lastname
    },
    email, 
    password,
    vehicle:{
     color,
     plate,
     capacity ,
     vehicleType
    }

  })

  return captain ;

}