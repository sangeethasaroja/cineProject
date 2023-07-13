import { useEffect, useRef } from "react";
import { useNavigate, useParams} from "react-router-dom";

const Update = () => {
    let navigate=useNavigate();
    let{getid}=useParams();
    let id=useRef();
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

    useEffect(()=>{
        setTimeout(()=>{
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch(`http://localhost:8080/getByid?id=${getid}`, requestOptions)
                .then(response => response.json())
                .then(result => {console.log(result)
                id.current.value=result.id;
                movieName.current.value=result.movieName;
                hero.current.value=result.hero;
                heroine.current.value=result.heroine;
                director.current.value=result.director;
                languages.current.value=result.languages;
                genre.current.value=result.genre;
                poster.current.value=result.poster;
                trailer.current.value=result.trailer;
                rating.current.value=result.rating;
                releaseDate.current.value=result.releaseDate;
                synopsis.current.value=result.synopsis;
                })
                .catch(error => console.log('error', error));
        },1000)
    },[])
    let handleUpdateMovie=(e)=>{
        e.preventDefault();
        let movieUpdate={
            id:id.current.value,
            movieName:movieName.current.value,
            hero:hero.current.value,
            heroine:heroine.current.value,
            director:director.current.value,
            languages:languages.current.value,
            genre:genre.current.value,
            poster:poster.current.value,
            trailer:trailer.current.value,
            rating:rating.current.value,
            releaseDate:releaseDate.current.value,
            synopsis:synopsis.current.value
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(movieUpdate);
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8080/update", requestOptions)
          .then(response => response.json())
          .then(result =>{ console.log(result);
            alert("movie updated");
            navigate("/MovieDetails/"+getid);
        })
          .catch(error => console.log('error', error));
    }
    return ( 
        <div className="updateMovie">
            <form onSubmit={handleUpdateMovie}>
              <div className="updateform1">
                <input type="number" ref={id} placeholder="id"/>
                <input type="text" ref={movieName} placeholder="movieName" />
                <input type="text" ref={hero} placeholder="hero"/>
                <input type="text" ref={heroine} placeholder="heroine"/>
                <input type="text" ref={director} placeholder="Director"/>
                <input type="text" ref={languages} placeholder="languages"/>
                </div>
                <div className="updateform2">
                <input type="text" ref={genre} placeholder="Genre" />
                <input type="url" ref={poster} placeholder="Poster"/>
                <input type="url" ref={trailer} placeholder="Trailer link"/>
                <input type="number" min="1950" max="2024" ref={releaseDate} placeholder="RealeaseDate"/>
                <input type="number" min="1" max="10" step="0.1" ref={rating} placeholder="Ratings : 1 - 10" />
                <textarea cols="70" rows="5" ref={synopsis}></textarea>
                <input type="submit" id="updatemovie" value="updateMovie" />
                </div>
            </form>
        </div>
     );
}
 
export default Update;