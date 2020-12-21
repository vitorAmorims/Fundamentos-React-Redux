import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "../actions/asyncActions";

//1 - criar o estado inicial
const initialState = {
  loading: false,
  users: [],
  error: "",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_FAILURE:
      return { 
        ...state, 
        loading: false, 
        users: [], 
        error: action.payload 
      };
    default:
      return state;
  }
}
