import React from 'react';
import { Link, useParams } from 'react-router-dom';
import movieList  from './MovieData';

function DescriptionFilm() {
  const { id } = useParams();
  const movie = movieList.find((movie) => movie.id === parseInt(id));

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
       width="560"
        height="315" 
        src={movie.lienBandeAnnonce} 
        title="Bande-annonce du film"
        >
</iframe>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}
export default DescriptionFilm;
