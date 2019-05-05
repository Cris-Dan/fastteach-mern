const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const ProfesorSchema = new Schema({

  username: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  ingresado: { type: Date, default: Date.now() }

});

ProfesorSchema.methods.encryptPassword = async (password) => {
  return await bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

ProfesorSchema.methods.comparePassword = async (password, password2) => {
  return await bcrypt.compareSync(password, password2);
};

module.exports = model('Profesor', ProfesorSchema);