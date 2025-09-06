import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Favorites from "./Favorites";
import React, { useState} from "react";


export default function App() {
   const [favorites, setFavorites] = useState([]);  

    const addToFavorites = (job) => {
    const exists = favorites.find(fav => fav.id === job.id);
    if (!exists) {
      setFavorites([...favorites, job]);
    }
  };
  return (
    <BrowserRouter>
    <Navbar/>     
      <Routes>
        
       <Route path="/" element={<Home onAddFavorite={addToFavorites}/>}/>
         <Route path="/favorites" element={<Favorites  favorites={favorites} />}/>
      </Routes>
    </BrowserRouter>
    
  );
  
}
