const { Router } = require('express');
const router = Router();
const passport = require('passport');
const jwt  = require('jsonwebtoken');
const Alumno  = require('../models/Alumno');


router.get('/secret-alumno', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('autenticado uwu');
    } else { 
        res.send('no autenticado owo');
    }
});

router.post('/register-alumno', passport.authenticate('local-register-alumno'), (req, res) => {
    //res.send('alumno registrado owo');
    res.json({message:'Correo Enviado'});
});

router.post('/login-alumno', passport.authenticate('local-login-alumno'), (req, res) => {
    //res.send('alumno lageado owo');


    res.redirect('/dashboard');
});
router.get('/logout-alumno', (req, res) => {
    req.logOut();
    res.redirect('/');
});
router.get('/confirmation/:token',async (req,res)=>
{
    //console.log(req.params.token);
    const userdecode = jwt.verify(req.params.token,process.env.JWTSECRET);
    //console.log(userdecode.data.email);
    if(!userdecode)
        res.status(401);
    else {
        const alumno = await Alumno.findOne({email:userdecode.data.email});
        if(!alumno)
            res.status(401);
        else
        {
            alumno.isVerified=true;
            await alumno.save();
            res.status(200);
        }

    }

});
//middleware que aun no uso equisde
function estaAutenticado(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
};


module.exports = router;