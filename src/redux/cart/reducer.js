import{
    CART_AGREGARITEM,
    CART_AUMENTARCANTIDAD,
    CART_BORRARITEM,
    CART_REDUCIRCANTIDAD
    } from "./action_types"

const cartState = [];

const cartReducer = (state = cartState, action) => {
    let newState = state;

    switch(action.type){
        case CART_AGREGARITEM:
            newState.push({codigo:action.payload, cantidad:1})
            return newState;
        
        case CART_AUMENTARCANTIDAD:
            newState = newState.map((i)=>{
                if(i.codigo == action.payload)
                    return {
                        codigo:i.codigo,
                        cantidad: i.cantidad + 1
                    };
                    else
                        return i;
            });
            return newState;

        case CART_BORRARITEM:
            newState = newState.filter((i)=>{
                i.codigo != action.payload
            })
            return newState;

        case CART_REDUCIRCANTIDAD:
            newState = newState.map((i)=>{
                if(i.codigo == action.payload)
                    return {
                        codigo:i.codigo,
                        cantidad:i.cantidad - 1
                    };
                else
                    return i
            });

            newState = newState.filter((i) => i.cantidad != 0);

            return newState;

        default:
            return state
    }
}

export default cartReducer;