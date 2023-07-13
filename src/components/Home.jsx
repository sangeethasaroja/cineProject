import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';

const Home = () => {
    let[movie,setmovie]=useState(null);
    useEffect(()=>{
setTimeout(()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:8080/fetch", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result);setmovie(result)})
        .catch(error => console.log('error', error));
},1000)
    },[])
    return ( 
        <main className="bg">
        <div className="moviedisplay">
           
{movie&&movie.map((m)=>{return(
    <div id="movie">
        <Link to={`/MovieDetails/${m.id}`}>
        <img src={m.poster} alt="moviePoster" width="180" height="180"></img>
        <h1>{m.movieName}</h1>
        <h2>({m.releaseDate})</h2></Link>
        {/* <iframe width="560" height="315" src={m.trailer}/> */}
    </div>
)})}
        </div>
        </main>
     );
}
 
export default Home;