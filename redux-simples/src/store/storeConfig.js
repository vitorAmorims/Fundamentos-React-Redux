import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import numerosReducer from '../store/reducers/numeros';
import asyncReducer from '../store/reducers/asyncReducer';

const reducers = combineReducers({
    numeros: numerosReducer,
    data: asyncReducer,
    nomes: function(state, action) {
        // console.log("Reducer nomes");
        // console.log(state, ' ', action);
        
        return [
            "Vitor",
            "Lucas",
            "Silvia"
        ]
    }
})

//criar uma função que vai criar um estado à partir dos reducers

function storeConfig() {
    return createStore(reducers, applyMiddleware(thunk))
}

export default storeConfig;