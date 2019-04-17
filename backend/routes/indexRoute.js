const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const withAuth = require('../withAuth');
router.get('/home',  (req, res) =>{
    res.send('holiMundo!');
});
router.get('/secret', withAuth, (req, res) => {
    res.send('Al descubierto');
});

router.get('/checkToken', withAuth, (req, res) =>{
    res.sendStatus(200);
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    user.password = await user.encryptPassword(password);
    await user.save();

    res.send('agregado');
});

router.post('/api/authenticate', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        res.status(401)
            .json({
                error: 'Incorrect email or password'
            });
    } else {
        const match = await user.comparePassword(password);
        if (!match) {
            res.status(401)
                .json({
                    error: 'Incorrect email or password'
                });
        } else {
            const payload = { username };
            const token = jwt.sign(payload, process.env.SECRET, {
                expiresIn: '1h'
            });
            res.cookie('token', token, { httpOnly: true })
                .sendStatus(200);
        }
    }
});


module.exports = router;