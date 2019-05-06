const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Profesor = require('../models/Profesor');



passport.serializeUser((profesor, done) => {
    done(null, profesor._id);
});

passport.deserializeUser(async (_id, done) => {
    const profesor = await Profesor.findById(_id);
    done(null, profesor);
});


passport.use('local-register-profesor', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {

    const { email } = req.body;
    const repetido = await Profesor.findOne({ username: username });

    if (repetido) {
        return done(null, false);
    }

    const emailRepetido = await Profesor.findOne({ email });
    if (emailRepetido) {
        return done(null, false);
    }

    const profesor = new Profesor();
    profesor.username = username;
    profesor.password = await profesor.encryptPassword(password);
    profesor.firstname = req.body.firstname;
    profesor.lastname = req.body.lastname;
    profesor.email = req.body.email;
    await profesor.save();
    return done(null, profesor);

}));

passport.use('local-login-profesor', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const profesor = await Profesor.findOne({ username: username });
    if (!profesor) {
        return done(null, false);
    }
    if (!profesor.comparePassword(password, profesor.password)) {
        return done(null, false);
    }
    return done(null,profesor);

}));