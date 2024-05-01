import axios from 'axios'

import { useEffect,useState } from 'react'


const useFetch = (url) => {

const [data,setData]=useState(null)


    const fetchdata = async()=>{
        try{
            const response = await axios.get(url)
                  console.log(response)
                setData(response.data);
        } catch(error){
            console.log("error fetching data",error )
        }
        

    }
    useEffect(()=>{
fetchdata();
    },[url])
    console.log(data,"data")
  return ([data]
  )
}

export default useFetch;