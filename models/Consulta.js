const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConsultaSchema = new Schema({
    name: {type: String, required: true},
    user: {type: Schema.ObjectId, ref: 'User', required: true},
    telefono: {type: String, required: true},
    email: {type: String, required: true},
    consulta: {type: String, required: true}
})

module.exports = mongoose.model('Consulta', ConsultaSchema);