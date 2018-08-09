const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema



const feriasSchema = new Schema({
    dataPublicacao: Date,
    documento: String,
    inicio: Date,
    fim: Date,
    obs: String
})

const cursosSchema = new Schema({
    dataPublicacao: Date,
    documento: String,
    inicio: Date,
    fim: Date,
    curso: String,
    cargaHoraria: Number,
    nota: Number, 
    obs: String
})

const uniformeSchema = new Schema({
    cabeca: String,
    camisa: String,
    calca: String,
    sapato: String
})

const recompensaSchema = new Schema({
    recompensa: String,
    dataPublicacao: Date,
    documento: String,
    obs: String
})

const sancaoDisciplinarSchema = new Schema({
    sancao: String,
    dataPublicacao: Date,
    documento: String,
    obs: String
})

const promocaoSchema = new Schema({
    cargo: String,
    dataPublicacao: Date,
    documento: String,
    obs: String
})

const lincencaSchema = new Schema({
    licenca: String,
    dataPublicacao: Date,
    documento: String,
    inicio: Date,
    fim: Date,
    obs: String
})

const movimentacaoSchema = new Schema({
    origem: String,
    destimo: String,
    dataPublicacao: Date,
    documento: String,
    obs: String
})

const fichaMilitarSchema = new Schema({
    ferias: [feriasSchema],
    cursos: [cursosSchema],
    recompensas: [recompensaSchema],
    sacoesDisciplinares: [sancaoDisciplinarSchema],
    promocoes: [promocaoSchema],
    licencas: [lincencaSchema],
    movimentacoes: [movimentacaoSchema]
})

const enderecoSchema = new Schema({
    logradouro: String,
    numero: String,
    complemento: String,
    bairro: String,
    cidade: String,
    estado: String,
    cep: String


})

const telefoneSchema = new Schema({
    tipo: String,
    numero: String
})

const dadoBancarioSchema = new Schema({
    banco: String,
    agencia: String,
    conta: String
})

const dadoSomaticoSchema = new Schema({
    altura: String,
    raca: String,
    cabelo: String,
    bigode: Boolean,
    peso: String,
    olhos: String
})

const efetivoSchema = new Schema({
    numero: String,
    matricula: String,
    nome: String,
    nomeDeGuerra: String,
    cargo: String,
    unidadePolicial: String,
    comportamento: String,
    situacaoFuncional: String,
    dataNascimento: Date,
    sexo: String,
    tipoSanguineo: String,
    nomeMae: String,
    nomePai: String,
    escolaridade: String,
    estadoCivil: String,
    naturalidade: String,
    nacionalidade: String,
    uniforme: uniformeSchema,
    fichaMilitar: fichaMilitarSchema,
    dataIngresso: Date,
    documentoIngresso: String,
    cpf: String,    
    reservista: String,
    reservistaOrgaoExp: String,
    reservistaSerie: String,
    reservistaTipo: String,
    tituloEleitoral: String,
    tituloEleitoralZona: String,
    tituloEleitoralSecao: String,
    pisPasepNis: String,
    cnh: String,
    cnhCategoria: String,
    cnhValidade: Date,
    endereco: enderecoSchema,
    telefones: [telefoneSchema],
    email: String,
    dadoBancario: dadoBancarioSchema,
    dadoSomatico: dadoSomaticoSchema   
      
})



module.exports = restful.model('Efetivo', efetivoSchema)