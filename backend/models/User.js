const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  //TODO poner los demas campos como requeridos
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String,required: true },
  userType: {
    type: Schema.Types.ObjectId,
    ref: 'UserType'
  },
  ingresado: { type: Date, default: Date.now() }

});


UserSchema.methods.encryptPassword = async (password) => {
  return await bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UserSchema.methods.comparePassword = async (password,password2) => {
  return await bcrypt.compareSync(password, password2);
};

module.exports = model('User', UserSchema);