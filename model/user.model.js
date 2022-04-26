const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
  // _id: { type: String, required: true },
  name: { type: String, required: true },
  country: { type: String, required: true },
  gender: { type: String, required: false },
  age: { type: Number, required: false },
  // rol: {type: String, require: [true, 'Rol del usuario obligatorio']},
});

// Convertir a modelo
const userModel = mongoose.model('users', UserSchema);
module.exports = userModel;
