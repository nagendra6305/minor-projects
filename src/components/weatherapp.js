
import React, {useState} from "react"
const Weatherapp = () => {
    const[city,Setcity]=useState("")
    const[result,Setresult]=useState("")
   
   
  
    
    const changehandler = (e)=>{
      Setcity(e.target.value)
    }
    const submithandler=e=>{
        e.preventDefault();
        console.log(city)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            response=>response.json()
        ).then(data=> {
            const kelvin = data.main.temp;
            const celcius =  kelvin-273.5;
            Setresult("Temparature At"+" "+city+ '\n ' +Math.round(celcius)+"°C" );
       Setcity("")

        }
       
        ).catch(error=>console.log(error))

    }

  return (
    <center>
    <div className='card'>
        <div className='card-body'>
            <h5 className='card-tittle'> weatherapp </h5>
            <form>
            <input type='text' name='city'  onChange={changehandler}/> <br/><br/>
            <input type='submit'  onClick={submithandler} value="GetTemp"/>
            </form>
            <h4 >{result}</h4>
          
        </div>
    </div>
    </center>
  )
}

export default Weatherapp