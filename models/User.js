const mongoose= require('mongoose');
var options = {
  autoReconnect:true,
  useNewUrlParser:true,
  reconnectTries:6,
  reconnectInterval:2000,
  poolSize:50,
  keepAlive:true
  }
mongoose.connect("mongodb://localhost/COBOL" , options, ()=>{
  console.log("Database connection was successful")
} );
function toString(email){
return email.toLowerCase()
}
const Schema = mongoose.Schema;
const bcrypt= require("bcryptjs")
const UserSchema= new Schema({
  name:{
    type:String,
    get:toString,
      required:true
  },
  account:{
    type:Number,
      required:false
  },
  products:{
    type:Array,
    required:false
  },
  email:{
      required:true,
      type:String,
  },
  password:{
    required:true,
    type:String,
  },
  category: {
    required:true,
    type:String,
}
, registerType:{
    required:true,
    type:String,
},
phone:{
   required:true,
    type:Number,
}
})

UserSchema.methods.encryptPassword= function(password){
    return  bcrypt.hashSync(password , bcrypt.genSaltSync(5), null)
}
UserSchema.methods.validatePassword= function(password){
  return bcrypt.compareSync(password, this.password )
}

module.exports = mongoose.model("User", UserSchema);

