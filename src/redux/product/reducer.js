import {ADD_PROUDCT, 
        LIST_PROUDCT, 
        REMOVE_PROUDCT, 
        UPDATE_PROUDCT } from "./action_types";


const productState = { //para saber que ha pasado con la lista de productos
    productList:[], // lista en general
    productCreated:null, // ultimo producto creado
    productUpdated:null, // ultimo producto actualizado
    productRemove:null // ultimo producto que fue eliminado
};

const productReducer = (state = productState, action) => {

    let productNewState = state;

    switch(action.type){
        case ADD_PROUDCT:
            return {...productNewState, productCreated: action.payload}
        break;

        case REMOVE_PROUDCT:

        break;

        case UPDATE_PROUDCT:

        break;

        case LIST_PROUDCT:

        break;

        default:

        return state
    }

};