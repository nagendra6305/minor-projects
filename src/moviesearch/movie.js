import React, {  useState } from 'react'

const Movie = () => {
  const[search,setsearch]=useState('')
 const [data,setdata]= useState([])
 console.log(data,"data")

  const submithandler= e =>{
    e.preventDefault();
    // console.log(search,"search")
   fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(
    response=> response.json()
   ).then( value => setdata(value.Search,"data"))
   .catch(error=>console.log(error,"data not fetching"))
  }
//   const download =urls=>{
//  fetch(urls).then(response=>{
//   response.arrayBuffer().then(function(buffer){
//     const url = window.URL.createObjectURL(new Blob([buffer]));
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download","image.jpg")
//     document.body.appendChild(link);
//     link.click();
    
//   })
  
//  }).catch(err=>{
//   console.log(err)
// });
//   }
const download= url =>{
  fetch(url).then(response=>{
    response.arrayBuffer().then(function(buffer){
      const url = window.URL.createObjectURL(new Blob([buffer]));
      const link = document.createElement('a')
      link.href = url 
      link.setAttribute("download", "image-png")
      document.body.appendChild(link);
      link.click();
    })
  })
}
    
  return (
    <div>
      <center>
        <h1>Movie App</h1>
    <form onSubmit={submithandler}>
        <input type='text'size={40} value={search} onChange={(e)=>setsearch(e.target.value)}/><br/><br/>
        <input type='submit' value="search"/>
    </form>
    <div className="row">
          {data.map(item => (
            <div className="col-md-4" key={item.imdbID}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={item.Poster} className="card-img-top" alt={item.Title} />
                <div className="card-body">
                  <h4 className="card-title">{item.Title}</h4>
                  <a href={item.Poster} className='btn btn-primary' onClick={()=>download(item.Poster)}> Download</a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </center>
    </div>
  )
}

export default Movie