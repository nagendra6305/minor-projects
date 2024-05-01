import React,{useState} from "react";
//state Variable


const Example=()=>{
 const[data,setData]=useState("intitialvalue")
console.log(setData,"hgfsj")


    return(<>
        <div>i am from nags component</div>
<button onClick={()=>setData("nagendra")}>nagendra</button>
<button onClick={()=>setData("revi")} >ravi</button>
<button onClick={()=>setData("siddharth BHAI")}>sid</button><br></br>
<button onClick={()=>setData("sandy")}>santosh</button>


<div>{data}</div>
</>
    )
}

export default Example;