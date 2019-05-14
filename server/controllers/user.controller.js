const mongoose = require('mongoose');
const passport = require('passport');
const rp = require('request-promise');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.category=req.body.category;
    user.subcategory=req.body.subcategory;
    user.usertype=req.body.usertype;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = async (req, res, next) => {
    let user = await rp.get("https://oauth2.googleapis.com/tokeninfo?id_token="+req.body.id);
    if (user)  return res.status(200).json({ "token": user.generateJwt() }); 
    // passport.authenticate('local', (err, user, info) => {       
    //     if (err) return res.status(400).json(err);
    //     else 
    //     else return res.status(404).json(info);
    // })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req.user._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email','category','subcategory','usertype']) });
        }
    );
}