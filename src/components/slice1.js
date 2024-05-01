import { createSlice } from "@reduxjs/toolkit";

 

const Slice1 =createSlice({
    name:"users",
    initialState:[],
    
    reducers:{
        adddata:(state,action) => {
            state.push(action.payload)
        }
    }
})

export default Slice1.reducer
export const {adddata} =Slice1.actions