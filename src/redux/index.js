import { legacy_createStore as createStore,combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import productReducer from "./product/reducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer
});

const store = createStore(rootReducer);

export default store;