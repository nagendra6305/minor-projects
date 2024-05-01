import { useState } from "react"


const Data = ()=>{
  const[nag,setnag] = useState("home")

  return(

    <>
        <button onClick={()=>setnag("nagendra")}>clickme</button>
        <div >{nag}</div>
</>
  )
}

export default Data