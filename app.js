
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session= require('express-session');
const cors= require("./node_modules/cors")
var ext = require('express-handlebars');
var nodemailer= require('nodemailer');
var Mongostore = require('connect-mongo')(session);
const User= require("./models/User")
var mongoose=require('mongoose');
var flash = require('connect-flash');
var handleUpload= require('./handleUpload/handleUpload')

var validator = require('express-validator');


var app = express();



// view engine setup
app.engine('.hbs' , ext({defaultLayout: 'layout' , extname : '.hbs'}));
app.set('view engine', '.hbs');
app.use(flash());
app.use(cors())
app.use(validator());
app.use(session({
  secret: 'secret',
  saveUninitialized:false,
  resave: false,
  store: new Mongostore({mongooseConnection : mongoose.connection}),
  cookie: {maxAge : 180*60*1000}
}));
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', (req,res,next)=>{
const {
  name,
  email,
  password,
  category,
  registerType,
  phone
}= req.body
const newUser= new User();
newUser.name=name;
newUser.password= newUser.encryptPassword(password);
newUser.email= email;
newUser.category= category;
newUser.phone= phone;
newUser.registerType= registerType;
newUser.save((err , user)=>{
if(err){
  return res.status(400).send(err);

}
// Jackson¾«»ª½Ü¿ËÑ·
res.json(user)
})
});
app.post('/signin', (req,res,next)=>{
  const {email,password}= req.body;
 const query= User.findOne({"email": email});
 const promises= query.exec();
 promises.then((user)=>{
   
  if(!user){
    return res.json('No user with this email is found')
  }
  if(user.validatePassword(password)){
   return res.json(user)
  }
 
    res.json(false)
  

 })
 .catch(err=>{
   res.json(false)
 })
})

app.post('/upload' , function(req,res){
  
  handleUpload(req,res,User)
})
app.get('/getProducts/:id' ,(req,res,next)=>{

const query=  User.findById({"_id":req.params.id}, {products:1}) ;
const promises=query.exec();
promises.then((products)=>{

  res.json(products)
})
.catch(err=>{
  res.json(err)
})
  
})
app.use('/edit', (req,res,next)=>{
  if(app.get('/edit')){
    console.error('sorry this should be a post route')
  }
  if(app.post('/edit')){
  
  const {name , email , phone, account , id}= req.body;
    const query= User.findOne({"_id":id});
    const promises= query.exec();
    promises.then((doc)=>{
      doc.name= (name?name:doc.name)
      doc.email= (email?email:doc.email)
      doc.phone= (phone?phone:doc.phone)
      doc.account= (account?account:doc.account);
      doc.save((err, result)=>{
        if(err){
          res.json(false)
        }
        
        res.json(result)
      })
    })
  }
})
module.exports = app;
