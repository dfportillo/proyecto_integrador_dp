import {ADD_PROUDCT, 
        LIST_PROUDCT, 
        REMOVE_PROUDCT, 
        UPDATE_PROUDCT } from "./action_types";


const productState = { //para saber que ha pasado con la lista de productos
    productList:[], // lista en general
    productCreated:null, // ultimo producto creado
    productUpdated:null, // ultimo producto actualizado
    productRemoved:null // ultimo producto que fue eliminado
};

const productReducer = (state = productState, action) => {

    let productNewState = state;

    switch(action.type){
        case ADD_PROUDCT:
            return {...productNewState, productCreated: action.payload};

        case REMOVE_PROUDCT:
            return {
                ...productNewState, productRemoved:action.payload};

        case UPDATE_PROUDCT:
            return {
                ...productNewState, productUpdated:action.payload};

        case LIST_PROUDCT:
            return {...productNewState,productList:action.payload}

        default:

        return state
    }

};

export default productReducer;