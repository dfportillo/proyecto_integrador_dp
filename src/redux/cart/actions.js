import{
CART_AGREGARITEM,
CART_AUMENTARCANTIDAD,
CART_BORRARITEM,
CART_REDUCIRCANTIDAD
} from "./action_types"

export const cartAgregaItem = (codigo) => ({
    type:CART_AGREGARITEM,
    payload: codigo,
});

export const cartAumentaCantidad = (codigo) => ({
    type:CART_AUMENTARCANTIDAD,
    payload: codigo,
});

export const cartBorrarItem = (codigo) => ({
    type:CART_BORRARITEM,
    payload: codigo,
});

export const cartReducirCantidad = (codigo) => ({
    type:CART_REDUCIRCANTIDAD,
    payload: codigo,
});