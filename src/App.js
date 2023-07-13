import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Update from './components/Update';
import MovieDetails from './components/MovieDetails';
import Addmovie from './components/Addmovie';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/update/:getid' element={<Update/>}></Route>
        <Route path='/MovieDetails/:id' element={<MovieDetails/>}></Route>
        <Route path="/addmovie" element={<Addmovie/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
