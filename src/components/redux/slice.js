import { createSlice } from "@reduxjs/toolkit";



const Userlist =[{
    name:"nagendra",
    Email:"nag@123"
},{
    name:"siddu",
    Email:"sid@123"
},{
    name:"tharun",  
    Email:"tharun@123"
}]
const Slice = createSlice({
    name:"users",
initialState:Userlist,
reducers:{
    
    adduser:(state,action)=>{
        console.log(action)
        state.push(action.payload)
    },
  
    
}
})
export default Slice.reducer;
export const {adduser}= Slice.actions

