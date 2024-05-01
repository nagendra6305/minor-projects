

import React from 'react'
import State from './todolist/State'
import Capital from './todolist/Capital'

const Main = () => {
    // const [data,Setdata]=useState()
const obj={
telangana:"hydderabad",
goa : "panaji",
uk:"londan"
}
  return (
    <div >Main
    {/* <div className='card'>
    <div className='card-body'> */}
        <div  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{display:"flex"}}>  <State key1={Object.keys(obj)}/></div>
       <div style> <Capital key2={Object.values(obj)}/></div>
        </div>
    {/* </div>
    </div> */}
    
       
    </div>
  )
}

export default Main