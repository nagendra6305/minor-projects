


import { useDispatch, useSelector } from 'react-redux'
import { adddata } from './slice1'

const Homel = () => {
   
    
  
    const dispatch = useDispatch()
    const selector = useSelector((state)=>(state.nagendra))
    console.log(selector,"selector")
  

   const handleclick=()=>{
    const object = {
        name:"nagendra",
        rollNo:20
    }
    dispatch( adddata(object))
   }
    

    

  return (
    <div >
        <button onClick={handleclick}>add data</button>
        
        {selector.map((item)=>{
        return(
        <div >
            <p style={{backgroundColor:"red"}}>{item.name}</p>
            <p>{item.rollNo}</p>

        </div>
            
        )
    }
        
    )}</div>
  )
}

export default Homel