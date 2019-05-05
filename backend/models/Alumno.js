const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const AlumnoSchema = new Schema({

  username: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  ingresado: { type: Date, default: Date.now() }

});

AlumnoSchema.methods.encryptPassword = async (password) => {
  return await bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

AlumnoSchema.methods.comparePassword = async (password, password2) => {
  return await bcrypt.compareSync(password, password2);
};

module.exports = model('Alumno', AlumnoSchema);