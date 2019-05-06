const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Alumno = require('../models/Alumno');
const pemailer  = require('emailer/enviar')



passport.serializeUser((alumno, done) => {
    done(null, alumno._id);
});

passport.deserializeUser(async (_id, done) => {
    const alumno = await Alumno.findById(_id);
    done(null, alumno);
});


passport.use('local-register-alumno', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {

    const { email } = req.body;
    const repetido = await Alumno.findOne({ username: username });

    if (repetido) {
        return done(null, false);
    }

    const emailRepetido = await Alumno.findOne({ email });
    if (emailRepetido) {
        return done(null, false);
    }

    const alumno = new Alumno();
    alumno.username = username;
    alumno.password = await alumno.encryptPassword(password);
    alumno.firstname = req.body.firstname;
    alumno.lastname = req.body.lastname;
    alumno.email = req.body.email;
    await alumno.save();




    return done(null, alumno);

}));

passport.use('local-login-alumno', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const alumno = await Alumno.findOne({ username: username });
    if (!alumno) {
        return done(null, false);
    }
    if (!alumno.comparePassword(password, alumno.password)) {
        return done(null, false);
    }
    return done(null,alumno);

}));