import { configureStore } from "@reduxjs/toolkit";
import slice1 from "./slice1";

 

  const store = configureStore({
    reducer:{
        nagendra:slice1,
    },
  })
  export default store