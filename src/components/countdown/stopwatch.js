import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
    const[count,setcount]=useState(0);
    const [start1,setstart]=useState(true);
    const[reset1, setreset]=useState(true);
    const[pause,setpause]= useState(true);

    let data = useRef(null);
    // useEffect(()=>{
    //     data.current = setInterval(function(){
    //         setcount((count)=>{
    //             return count+1;
    //         })
    //     },1000)

    // },[])
    function start(){
        data.current = setInterval(function(){
            setcount((count)=>{
                return count+1;
            })
        },1000)
    }

    function stop(){
        clearInterval(data.current);

    }
    function reset(){
        setcount(0)
    }

  



  return (
    <div>
        <center>
       <h1>{count}</h1> <br></br>
        {count===0||(!pause && start1)?(
            <button onClick={start}>Start</button>
        ):( <> <button onClick={stop}>Stop</button>
       <button onClick={reset}>reset</button></>)}
        </center>
       
    </div>
  )
}

export default Stopwatch