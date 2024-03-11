const { Schema, model } = require('mongoose');

// Define el esquema
const UsersSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Exporta el modelo
const nuevo = model('usuarios', UsersSchema);

module.exports = nuevo;