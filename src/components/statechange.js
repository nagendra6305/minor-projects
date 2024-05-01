
import React, {useState} from 'react'

const Statechange = () => {
    const [data,setdata]=useState([{
        name:"nagendra",
        State:"telangana",
    }])
    
    console.log(data,"data")
  return (
    <div className='card-container'>  
    <div className='card-body'> {data.map((item)=>(<div><h1>{item.name}</h1><h1>{item.State}</h1></div>))}</div>
      <div style={{data}}>hello</div>
        <button onClick={()=>setdata([...data,{name:"chintu",State:"andhra"}])}>click</button>
      
    </div>
  )
}

export default Statechange