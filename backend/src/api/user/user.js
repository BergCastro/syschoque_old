const restful = require("node-restful");
const mongoose = restful.mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true, "O nome do usuário é obrigatório!"] },
  matricula: { type: String, required: true },
  cargo: { type: String, required: true },
  nomeGuerra: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, min: 6, max: 12, required: true },
  pin: {type: String, required: [true, 'Um PIN de 4 dígitos deve ser inserido!']},
  perfilAcesso: []
});

module.exports = restful.model("User", userSchema);
