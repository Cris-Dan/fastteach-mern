const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UsuarioSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: email, required: true },
    userType: {
        type: Schema.Types.ObjectId,
        ref: 'UserType', required: true
    },
    ingresado: { type: Date, default: Date.now() }

});

UsuarioSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UsuarioSchema.methods.comparePassword = (password) => {
    return bcrypt.compareSync(password, this.password);
};


module.exports = model('Admin', UsuarioSchema);