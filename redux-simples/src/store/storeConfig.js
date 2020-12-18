import { createStore, combineReducers } from 'redux';

const estadoInicial = {
    min: 17,
    max: 32
}

const reducers = combineReducers({
    numeros: function(state = estadoInicial, action) {
        // console.log('Reducer números')
        // console.log(state, ' ', action);
        switch (action.type) {
            case 'NUM_MIN_ALTERADO':
            return {
                ...state, min: action.payload
            }
            default:
                return state;
        }        
    },
    nomes: function(state, action) {
        console.log("Reducer nomes");
        console.log(state, ' ', action);
        
        return [
            "Vitor",
            "Lucas",
            "Silvia"
        ]
    }
})

//criar uma função que vai criar um estado à partir dos reducers

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;