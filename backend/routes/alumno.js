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
    res.redirect('/');
});

router.post('/login-alumno', passport.authenticate('local-login-alumno'), (req, res) => {
    //res.send('alumno lageado owo');


    res.redirect('/dashboard');
});
router.get('/logout-alumno', (req, res) => {
    req.logOut();
    res.redirect('/');
});
router.post('/confirmation/:token',async (req,res)=>
{

    const userdecode = jwt.verify(req.token,process.env.JWTSECRET);

    if(userdecode==null)
        res.json({message:'No tiene autorizacion'});
    else {
        const alumno = await Alumno.findOne({email:userdecode.email});
        if(!alumno)
            res.json({message:'Cuenta no encontrada'});
        else
        {
            alumno.isVerified=true;
            await alumno.save();
            res.json({message:'Alumno autenticado'});
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