const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Usuario = require('../models/Usuario');

passport.serializeUser((usuario, done) => {
    done(null, usuario._id);
});
passport.deserializeUser(async (_id, done) => {
    const usuario = await Usuario.findById(_id);
    done(null, usuario);
});
passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const usuario = new Usuario();
    usuario.username = username;
    usuario.password = password;
    await usuario.save();
    done(null, usuario);
}));