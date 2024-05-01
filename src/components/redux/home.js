import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from './slice'

const Home = () => {
    const dispatch = useDispatch()
    const Selector = useSelector((state)=>(state.users))
    console.log(Selector,"selector")
    const[data,setdata]=useState()
    const [input1,setinput1]=useState("")
    const [input2,setinput2]=useState("")
    console.log(input1)
    console.log(input2)
    console.log(data,"data")

 

    const input = ()=>{
        const newdata = {
            name:input1,
            email:input2
           
        }
    setdata([...data,newdata])
    dispatch(adduser(data))

    }
    



  return (
    <div>
        <div>
           {Selector.map((item)=>{
            
            return(
                <div>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                </div>
            )
        
        
        })}
            <input type='text' onChange={(e)=>setinput1(e.target.value)} placeholder='enter text'/>
           
            <input type='text' onChange={(e)=>setinput2(e.target.value)} placeholder='enter text'/>
            <button onClick={input}>godata</button>
        </div>
    </div>
  )
}

export default Home