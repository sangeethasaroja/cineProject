import { useEffect, useState } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";

const MovieDetails = () => {
    let navigate=useNavigate();
    let {id}=useParams();
let[movie,setMovie]=useState(null);
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`http://localhost:8080/getByid?id=${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {console.log(result);setMovie(result)})
            .catch(error => console.log('error', error));
    },[])
    let deleteMovie=(id)=>{
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`http://localhost:8080/delete/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {console.log(result);
                alert("movie detail deleted");navigate('/')})
            .catch(error => console.log('error', error));
    }
    return ( 
        <div>
     {movie&&  <div className="moviedetails">
     <iframe src={movie.trailer} frameborder="0"></iframe>
        {/* <img src={movie.poster} alt="poster" width="180" height="180"/> */}
        <h1 style={{fontSize:"70px",fontFamily:"Fantasy",letterSpacing:"6px"}}>Title :{movie.movieName}</h1>
        <h1>Actors :{movie.hero},{movie.heroine}</h1>
        <h1>Director :{movie.director}</h1>
        <h1>Year Of Release :{movie.releaseDate}</h1>
        <h1>Languages :{movie.languages}</h1>
        <h1>Genre :{movie.genre}</h1>
        <h1>Movie Rating :{movie.rating}</h1>
        <h1>Synopsis :{movie.synopsis}</h1>
        
        <button onClick={()=>deleteMovie(movie.id)}>Delete</button>
        <Link to={`/update/${id}`}><button>Update</button></Link>
        </div>}
        </div>
     );
}
 
export default MovieDetails;