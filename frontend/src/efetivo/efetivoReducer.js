import {
  GET_EFETIVO, 
  GET_COUNT_EFETIVO,
  
} from "./efetivoActions";

const INITIAL_STATE = {
  list: [],
  
  count: 0,
  
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EFETIVO:
      return { ...state, list: action.payload.data };
    
    case GET_COUNT_EFETIVO:
      return { ...state, count: action.payload.data };

    default:
      return state;
  }
};
