const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
  fullname: {
    firstname:{
       type:String,
       required: true ,
       minLength:[3,'First name must be at least 3 character long']
  },
    lastname:{
       type:String,
       minLength:[3,'Last name must be at least 3 character long']
  }
},
  email:{
    type:String,
    required:true,
    unique:true,
    minLength:[5,'Email must be at least 5 character long']

  },
  password:{
    type:String,
    required:true,
    unique:true,
    select:false,
  },
  socketId:{
    type:String
  }
})

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id:this._id}, process.env.JWT_TOKEN_SECRET , {expiresIn : '24h'})
  return token ;
}

userSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function(password){
  return await bcrypt.hash(password , 10)
}

const userModel = mongoose.model('user', userSchema)

module.exports  = userModel ;
 