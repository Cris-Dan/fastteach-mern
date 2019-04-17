const { Schema, model } = require('mongoose');

const UserTypeSchema = new Schema({
    userType: { type: String, required: true }
});

module.exports = model('Sede',UserTypeSchema);