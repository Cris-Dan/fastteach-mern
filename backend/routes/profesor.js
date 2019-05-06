const { Router } = require('express');
const router = Router();
const passport = require('passport');

router.get('/secret-alumno', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('autenticado uwu');
    } else {
        res.send('no autenticado owo');
    }
});

router.post('/register-alumno', passport.authenticate('local-register-profesor'), (req, res) => {
    //res.send('alumno registrado owo');
    res.redirect('/');
});

router.post('/login-alumno', passport.authenticate('local-login-profesor'), (req, res) => {
    //res.send('alumno lageado owo');
    res.redirect('/dashboard');
});
router.get('/logout-alumno', (req, res) => {
    req.logOut();
    res.redirect('/');
});
//middleware que aun no uso equisde
function estaAutenticado(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
};


module.exports = router;