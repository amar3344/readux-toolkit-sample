import { configureStore } from "@reduxjs/toolkit";
import reducer from "./CounterSlice";

const store = configureStore({
    reducer:{
        counter:reducer
    },
})

export default store