import {
  GET_OFICIOS,
  GET_TIPOS_OFICIO,
  GET_COUNT_OFICIO,
  GET_OFICIO
} from "./oficioActions";

const INITIAL_STATE = {
  list: [],
  tiposOficios: [],
  sugestao: {},
  count: 0,
  oficioAtual: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_OFICIOS:
      return { ...state, list: action.payload.data };
    case GET_OFICIO:
      return { ...state, oficioAtual: action.payload };
    case GET_TIPOS_OFICIO:
      return { ...state, tiposOficios: action.payload.data };
    case GET_COUNT_OFICIO:
      return { ...state, count: action.payload.data };

    default:
      return state;
  }
};
