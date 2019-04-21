require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
require('./database');

//configs
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cookieParser());
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({ storage }).single('image'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rutas
app.use('/api',require('./routes/indexRoute'));



//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

//iniciar
app.listen(app.get('port'), () => {
    console.log("servidor en puerto: " + app.get('port'));
});