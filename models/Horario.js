const mongoose = require('mongoose');
const { Schema } = mongoose;

const HorarioSchema = new Schema({
    artist: {type: Schema.ObjectId, ref: 'Artist', required: true},
    horas: {type: Array, required: true}
})

module.exports = mongoose.model('Horario', HorarioSchema);