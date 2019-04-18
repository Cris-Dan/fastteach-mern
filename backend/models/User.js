const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  //TODO poner los demas campos como requeridos
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  userType: {
    type: Schema.Types.ObjectId,
    ref: 'UserType'
  },
  ingresado: { type: Date, default: Date.now() }

});

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

UserSchema.methods.encryptPassword = async (password) => {
  return await bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UserSchema.methods.comparePassword = async (password) => {
  return await bcrypt.compareSync(password, this.password);
};


module.exports = model('User', UserSchema);