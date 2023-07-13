import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Addmovie = () => {
    let navigate=useNavigate();
    let movieName=useRef();
    let hero=useRef();
    let heroine=useRef();
    let director=useRef();
    let languages=useRef();
    let genre=useRef();
    let poster=useRef();
    let trailer=useRef();
    let releaseDate=useRef();
    let rating=useRef();
    let synopsis=useRef();

    let CreateMovie=(e)=>{
        e.preventDefault();
    //    let add={ 
    //      movieName:movieName.current.value,
    //      hero:hero.current.value,
    //      heroine:heroine.current.value,
    //      director:director.current.value,
    //      languages:languages.current.value,
    //      genre:genre.current.value,
    //      poster:poster.current.value,
    //      trailer:trailer.current.value,
    //      releaseDate:releaseDate.current.value,
    //      rating:rating.current.value,
    //      synopsis:synopsis.current.value
    //    }
       var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    movieName:movieName.current.value,
    hero:hero.current.value,
    heroine:heroine.current.value,
    director:director.current.value,
    languages:languages.current.value,
    genre:genre.current.value,
    poster:poster.current.value,
    trailer:trailer.current.value,
    releaseDate:releaseDate.current.value,
    rating:rating.current.value,
    synopsis:synopsis.current.value
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/addMovie", requestOptions)
  .then(response => response.text())
  .then(result => {console.log(result);alert("movie added");
  navigate("/");
})
  .catch(error => console.log('error', error));
    }
    return ( 
        <div className="addmovie">
            <form onSubmit={CreateMovie}>
              <div className="form1">
                <input type="text" placeholder="movieName" ref={movieName} />
                 <input type="text" placeholder="heroName" ref={hero} />
                 <input type="text" placeholder="heroineName" ref={heroine}/>
                 <input type="text" placeholder="directorName" ref={director} />
                 <input type="text" placeholder="languages" ref={languages} />
                 <input type="text" placeholder="genre" ref={genre}/>
                 </div>
                 <div className="form2">
                 <input type="url" placeholder="posterUrl" ref={poster} />
                 <input type="url" placeholder="trailerUrl" ref={trailer} />
                 <input type="number" placeholder="releaseDate" ref={releaseDate} min={1990} max={2025}/>
                 <input type="number" placeholder="rating" min={1} max={10} step={0.1} ref={rating}/>
                 <textarea  cols="80" rows="5" ref={synopsis}/>
                 <input id="createmovie" type="submit" value='CreateMovie' />
                 </div>
            </form>
        </div>
     );
}
 
export default Addmovie;