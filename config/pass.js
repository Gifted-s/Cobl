var passport= require('passport');
var LocalStrategy= require('passport-local').Strategy;
var bcrypt= require('bcrypt');

var mongoose=require('mongoose');
var db= mongoose.connection;
mongoose.connect('mongodb://localhost/shopcart33');
var User= require('../models/User');
var validator = require('express-validator');
var multer = require('multer');
// var upload = multer({dest : './upload'});
passport.serializeUser(function(user , done ){
    done(null , user.id);

});
passport.deserializeUser(function (id  , done ){
    User.findById(id , function (err , user) {
        done(err , user);
    });

});
//
// passport.use('local.signup' , new LocalStrategy( {
//     usernameField : 'email',
//         passwordField : ' password',
//     passReqToCallback : true
//
// },
//     function(req ,email , password, done ){
//
//     var firstname = req.body.firstname;
//     var secondname = req.body.secondname;
//     var password1 = req.body.password;
//     // var imagepath = req.body.imagepath;
//     var address = req.body.add;
//     var country = req.body.country;
//         var kin = req.body.KIN;
//         req.checkBody('firstname' , 'Please enter your first name').notEmpty();
//         req.checkBody('country' , 'Please enter your country name').notEmpty();
//     req.checkBody('add' , 'Please enter your home or company address').notEmpty();
//     req.checkBody('secondname' ,'please enter your second name').notEmpty();
//     req.checkBody('email' , 'please enter a valid email address').notEmpty().isEmail();
//     req.checkBody('password' , 'please enter password').notEmpty().isLength({max:8 , min : 4});
//     req.checkBody('password2' , 'password does not match').equals(password);
//         req.checkBody('KIN' , 'please enter the name of your next of kin').notEmpty();
//         var errors = req.validationErrors();
//         if(errors) {
//             var message = [];
//             errors.forEach(function (error){
//                 message.push(error.msg);
//             });
//              return done (null ,false , req.flash('error' , message));
//         }
//
//         User.findOne({'email' : email ,'country' : country , 'address' : address,'password1' : password1, 'imagepath' : imagepath ,'firstname' : firstname , 'secondname' : secondname}, function(err , user){
//
//         if(err){return done(err)}
// if(user){
//     return done(null , false , {message : 'Email taken already'});
// }
// var newUser = new User;
//             newUser.email = email;
//             newUser.KIN = kin;
//             newUser.password = newUser.encryptPassword(password);
//             newUser.firstname = firstname;
//             newUser.secondname = secondname;
//             newUser.password1 = password1;
//
//             newUser.add = address;
//             newUser.country= country;
//             newUser.save(function (err , user){
//             if (err){
//                 return done(err);
//
//             }
//             return done(null , newUser , {message : 'you are noq logged in'})
//
//         });
//     });
//
//
//     }));
//
//
//
//
//
//
//
//
//
//








passport.use('local.signup' , new LocalStrategy({
    usernameField : 'email',
    passwordField: 'password',
    passReqToCallback : true

},
    function (req , email , password , done ) {
    var firstname = req.body.firstname;
    var secondname = req.body.secondname;
    var password1 = req.body.password;
    var imagepath = req.body.imagepath;
    var address = req.body.add;
    var country = req.body.country;
    var msg = "Welcome to follymar collections please stay with us.";
        var kin = req.body.KIN;

    req.checkBody('firstname' , 'Please enter your first name').notEmpty();
        req.checkBody('country' , 'Please enter your country name').notEmpty();
    req.checkBody('add' , 'Please enter your home or company address').notEmpty();
    req.checkBody('secondname' ,'please enter your second name').notEmpty();
    req.checkBody('email' , 'please enter a valid email address').notEmpty().isEmail();
    req.checkBody('password' , 'please enter password').notEmpty().isLength({max:8 , min : 4});
    req.checkBody('password2' , 'password does not match').equals(req.body.password);
        req.checkBody('KIN' , 'please enter the name of your next of kin').notEmpty();
    var errors = req.validationErrors();
    if(errors){
        var message = [];
        errors.forEach(function (error) {
            message.push(error.msg);

        });
        return done(null , false , req.flash('error' , message));
    }
        User.findOne({'email' : email ,'country' : country , 'address' : address,'password1' : password1, 'imagepath' : imagepath ,'firstname' : firstname , 'secondname' : secondname}, function(err , user){
            if(err){
                return done(err);
            }
            if(user){
                return done(null , false , {message : 'Email already taken'});
            }
            var newUser = new User();
            newUser.email = email;
            newUser.KIN = kin;
            newUser.password = newUser.encryptPassword(password);
            newUser.firstname = firstname;
            newUser.secondname = secondname;
            newUser.password1 = password1;
            newUser.imagepath = imagepath;
            newUser.add = address;
            newUser.country= country;
            newUser.message=msg ;
            newUser.save(function (err , result) {
                if(err){
                    return done(err);

                }
                return done(null , result , {message:'You are now registerd'});
            });
        });
    }));


passport.use('local.signin' , new LocalStrategy({
        usernameField : 'email',
        passwordField: 'password',
        passReqToCallback : true

    },
    function (req , email , password , done ) {

        User.findOne({'email' : email }, function(err , user){
            if(err){
                return done(err);
            }
            if(!user){
                return done(null , false , {message : 'Unknown User'});
            }
            if(!user.validPassword(password)){
                return done(null , false , {message : 'Invalid  Password'})
            }

            return done(null , user , {message : 'You are now  logged in'})


        });
    }));

passport.use('locals.reset' , new LocalStrategy({
usernameField:'email',
    passwordField: 'password',
    passReqToCallback: true
},
    function(req  , email,password , done){
        var password2 = req.body.password2;
    req.checkBody('password2', 'New password  field empty').notEmpty();
    req.checkBody('password' , 'password field is empty').notEmpty();

    var errors = req.validationErrors();
    if(errors){
        var message = [];
        errors.forEach(function(error){
           message.push(error.msg);
        });
        return done(null, false , req.flash('error' , message) );
    }
    User.findOne({'email':req.user.email} , function(err , user){

        if(err){
            return done(err);
        }
        if(!user.validPassword(password)){
            return done(null , false , {message : 'Please enter a valid current password'});
        }

        var pass= user.encryptPassword(password2);
        User.update(user ,{$set : {password : pass  }}
         , function (err  , user) {
                if(err){
                 return done(err);
                }
            });
        return done(null , user , {message : 'Password changed successfully'});
    });

    }));

passport.use('locals.forgot' ,new LocalStrategy({

    usernameField: 'email',
    passwordField : 'password',
    passReqToCallback: true
},
    function (req , email ,password ,  done) {

        var kin = req.body.KIN;
        req.checkBody('password', 'New password  field empty').notEmpty();
        req.checkBody('email' , 'Email field is empty').notEmpty();
        req.checkBody('KIN' , ' please enter next of kin name').notEmpty();


        var errors = req.validationErrors();
        if(errors){
            var message = [];
            errors.forEach(function(error){
                message.push(error.msg);
            });
            return done(null, false , req.flash('error' , message) );
        }
    User.findOne({'email' : email} , function(err , user){

        // var NEW_PASSWORD = req.body.password;

        if(err){
            return done (err);
        }
        if(!user){
            return done (null , false , {message: 'Unknown user'});
        }
        var new_password= user.encryptPassword(password);
        if(kin !== user.KIN){
            return done (null , false , {message: 'Next of kin name wrong!!'});
        }

        User.update( user , {$set : {password :new_password }} , function(err , user){
          if(err){
              return done (err);
          }
        });
        return done(null , user,  {message : 'Password retrieved'});
    });

    }));


