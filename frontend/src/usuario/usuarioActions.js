import axios from "axios";
import { Urls } from "../consts";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";
import bcrypt from "bcryptjs";
import { showTabs, selectTab } from "../common/tab/tabActions";

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-z]).{6,20})/;
const pinRegex = /^\d{4}$/

const BASE_URL = Urls.API_URL;
const INITIAL_VALUES = {
  name: "",
  matricula: "",
  cargo: "",
  nomeGuerra: "",
  email: "",
  password: "",
  pin: "",
  perfilAcesso: ""
};

export const GET_USUARIOS = "GET_USUARIOS";
export const GET_COUNT_USUARIO = "GET_COUNT_USUARIO";
export const UPDATE_USER = "UPDATE_USER";

export function getList() {
  const request = axios.get(`${BASE_URL}/usuarios`);
  return {
    type: GET_USUARIOS,
    payload: request
  };
}

export function getCount() {
  const response = axios.get(`${BASE_URL}/usuarios/count`);
  return {
    type: GET_COUNT_USUARIO,
    payload: response
  };
}

export function updateUser(value) {
  return {
    type: UPDATE_USER,
    payload: value
  };
}

export function create(values) {
  const email = values.email;
  const password = values.password;
  const pin = values.pin;
  if (!email.match(emailRegex)) {
    return toastr.error(`Erro`, "O e-mail informado está inválido.");
  }
  if (!pin.match(pinRegex)) {
    return toastr.error(`Erro`, "O PIN deve ser um numero de 4 dígitos!");
  }
  if (!email.match(emailRegex)) {
    return toastr.error(`Erro`, "O e-mail informado está inválido.");
  }
  if (!password.match(passwordRegex)) {
    return toastr.error(
      `Erro`,
      "Senha precisar ter: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$ %) e tamanho entre 6-20."
    );
  }
  const salt = bcrypt.genSaltSync();
  const passwordHash = bcrypt.hashSync(password, salt);
  const pinHash = bcrypt.hashSync(pin, salt);
  const perfilArray = values.perfilAcesso.split(" ");
  const valor = {
    ...values,
    password: passwordHash,
    pin: pinHash,
    perfilAcesso: [perfilArray]
  };
  return submit(valor, "post");
}

export function update(values) {
  return submit(values, "put");
}

export function remove(values) {
  return submit(values, "delete");
}

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : "";

    axios[method](`${BASE_URL}/usuarios/${id}`, values)
      .then(resp => {
        toastr.success(`Sucesso`, "Operação Realizada com sucesso.");
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error("Erro", error));
      });
  };
}

export function showUpdate(usuario) {
  const usuarioFormatado = {
    ...usuario,
    perfilAcesso: usuario.perfilAcesso.toString().replace(/,/g, " ")
  };
  console.log("perfis: " + usuario.perfilAcesso);
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("usuarioForm", usuarioFormatado)
  ];
}

export function showDelete(usuario) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("usuarioForm", usuario)
  ];
}

export function init() {
  return [
    //array de actions possivel por causa do redux multi
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("usuarioForm", INITIAL_VALUES)
    // getCount()
  ];
}
