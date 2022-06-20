const mongoose = require('mongoose');
const { Schema } = mongoose;

const OpinionSchema = new Schema({
    artist: {type: Schema.ObjectId, ref: 'Artist', required: true},
    user: {type: String, required: true},
    titulo: {type: String, required: true},
    opinion: {type: String, required: true}
})

module.exports = mongoose.model('Opinion', OpinionSchema);