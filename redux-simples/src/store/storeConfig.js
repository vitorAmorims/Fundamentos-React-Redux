import { createStore, combineReducers } from 'redux';
import numerosReducer from '../store/reducers/numeros'

const reducers = combineReducers({
    numeros: numerosReducer,
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