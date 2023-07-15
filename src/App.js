import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Accueil from  "./components/Accueil";
import DescriptionFilm from  "./components/DescriptionFilm";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/movies/:id" element={<DescriptionFilm/>} />
      </Routes>   
     </BrowserRouter>
  );
}

export default App;


