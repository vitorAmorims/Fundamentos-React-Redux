const axios  = require('axios');

//1 - criar as constante para referenciar as possibilidades de chamada API
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


//2 - criar action creators para cada situação da requisição API
const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

const fetchSuccess = users => {
    return {
        type: FETCH_SUCCESS,
        payload: users
    }
}

const fetchFailure = error => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export function fetchUsers() {
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get('https://jsonplaceholder.typicode.com/users/')
          .then((response) => {
              const users = response.data.map(user => user.name)
              dispatch(fetchSuccess(users))
          })
          .catch(error => {
              const errMsg = error.message
              dispatch(fetchFailure(errMsg))
          })
    }
}

//agora criar reducer function...