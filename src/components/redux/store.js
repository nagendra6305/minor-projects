import { configureStore } from "@reduxjs/toolkit";

import  Slice from '../redux/slice'


const Store = configureStore({
    reducer:{
        users:Slice
    }
})


export default  Store