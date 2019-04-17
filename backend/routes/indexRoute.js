const { Router } = require('express');
const router = Router();
const passport = require('passport');

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    passReqToCallback: true
}));
module.exports = router;