
import React from 'react'
import useFetch from './customhook'

const Homecustom = () => {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

    console.log(data,"homecomponent")

  return (
    <div>{data ? data.map((item)=>{
        return(
            <center>
                <div key={item.id}>{item.title}</div>
            </center>
            
        )
    }):<div>loading</div>}</div>
  )
}

export default Homecustom