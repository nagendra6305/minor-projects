import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Pagenumber from './pageno';

const Pagination = () => {
    const[data,Setdata]=useState([])
    const [perpage,Setperpage]=useState([])
    // console.log(perpage,"perpage")
    // console.log(data,"data")

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res=>{Setdata(res.data);Setperpage(res.data.slice(0,10));}
        
        )
        console.log(data,"res")
    },[])
    const pagenhandler =(pages)=>{
        Setperpage(data.slice((pages*10)-10,pages*10))

    }
  return (
    <div>
        <center>
        {data.length>=1?
        <div>
            {perpage.map((item)=><h4 className='post'>{item.title}</h4>)}<br></br>
            <Pagenumber  value={data} pagechanger={pagenhandler}/>
        </div> :<p>datanotfound</p>
        
        }
        </center>
    </div>
  )
}

export default Pagination;