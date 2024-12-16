const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const captainSchema = new mongoose.Schema({
  fullname:{
    firstname:{
      type:String,
      required:true,
      minLength:[3, 'firstname must be atleast 3 character long']
    },
    lastname:{
      type:String,
      minLength:[3, 'lastname must be atleast 3 character long']
    }
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    match:[/^\S+@\S+\.\S+$/, 'please enter a valid email']
  },
  password:{
    type:String,
    required: true,
    select:false
  },
  socketId:{
    type:String
  },
  status:{
    type:String,
    enum :['active', 'inactive'],
    default:'inactive'
  },
  vehicle:{
    color:{
      type:String,
      required:true,
      minLength:[3,'Color must be at least 3 characters long']
    },
    plate:{
      type:String,
      required:true,
      minLength:[3 , 'plate must be at least 3 characters long']
    },
    capacity :{
      type: String ,
      required : true,
      min :[1 , 'Capacity must be at least 1']
    },
    vehicleType:{
      type:String,
      enum :['car', 'motorcycle','auto']
    }
  },
  location:{
    lat:{
      type:Number,
    },
    log:{
      type:Number
    }
  }
})



captainSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id:this._id} , process.env.JWT_TOKEN_SECRET , {expiresIn : '24h'});
  return token 
}
captainSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword  = async function (password){
  return await bcrypt.hash(password ,10)
}
const captainModel = mongoose.model( 'captain',captainSchema)

module.exports  = captainModel;