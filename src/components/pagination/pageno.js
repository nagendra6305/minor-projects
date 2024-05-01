import React from 'react'

const Pagenumber = ({value,pagechanger}) => {
const pages = []
for(let i=1;i< Math.ceil(value.length/10)+1;i++){
    pages.push(i);
}

  return (
    <div>
        <center>
        {pages.map((item)=><div className='pagebutton'
        onClick={()=>pagechanger(item)}>{item}</div>)}
        
        </center>
    
       
    </div>  
  )

}

export default Pagenumber