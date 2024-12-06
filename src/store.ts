import {configureStore, Store} from "@reduxjs/toolkit";
import nodeReducer from "./reducers/nodeReducer.ts";

const store = configureStore({
    reducer:{
        node:nodeReducer,
    }
});

export type RootState =  ReturnType<Store["getState"]>;
export default store;