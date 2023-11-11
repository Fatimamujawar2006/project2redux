import { createStore,combineReducers } from "redux";
import { productReducer } from "./reducer/productReducer";
import { pdetailReducer } from "./reducer/pdetailReducer";
import { pcardReducer } from "./reducer/pcartReducer";
export const configstore=()=>{
    const store=createStore(
        combineReducers({
            productReducer,pdetailReducer,pcardReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}