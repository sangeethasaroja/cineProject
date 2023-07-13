import { useState } from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    
    return ( 
        <nav>
            <div id="logo">
                <Link to="/"><h1><i class='bx bxs-camera-movie' ></i><h6>cine</h6>World</h1></Link>
            </div>
            <div id="home">
                <Link to="/"><h2>Home</h2></Link>
            </div>
            <div id="add">
                <Link to="/addmovie"><h2>AddMovie</h2></Link>
            </div>
            <div id="login">
                <Link to="/login"><h2>SignUp</h2></Link>
            </div>
        </nav>
     );
}
 
export default Nav;