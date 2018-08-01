const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema



const geralSchema = new Schema({
    comandante: { type: String, required: true },
    subcomandante: { type: String, required: true },
    endereco: { type: String,  required: true},
    telefones: [],
    email: {type: String},
    nomeBatalhao: {type: String}
    
    
})

module.exports = restful.model('Geral', geralSchema)