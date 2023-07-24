import{
    ADD_PROUDCT,
    REMOVE_PROUDCT,
    UPDATE_PROUDCT,
    LIST_PROUDCT
} from './action_types'

export const addProduct = (product) => ({
    type:ADD_PROUDCT,
    payload:product
});

export const removeProduct = (product) => ({
    type:REMOVE_PROUDCT,
    payload:product
});

export const updatePrduct = (product) => ({
    type:UPDATE_PROUDCT,
    payload:product
}); 

export const listProduct = (product) => ({
    type:LIST_PROUDCT,
    payload:product
});