import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count:0,
}


const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state:any)=>{
            state.count += 1
        },
        decrement:(state:any)=>{
            state.count -=1
        },
        incrementByValue:(state:any,action)=>{
            state.count += action.payload
        }
    }
})

const {actions,reducer} = CounterSlice 
export default reducer
export const {increment,decrement,incrementByValue} = actions