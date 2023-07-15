/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movieList from './MovieData';


function DescriptionFilm () {
  const { id } = useParams();
  const movie = movieList.find((movie) => movie.id === parseInt(id));
  console.log(movie);

  return (
    <div className='movie-des'>
      <img style={{ width: 'auto', height: '200px' }} src={movie.posterURL} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p style={{width:'400px' , height:'200px'}} >{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.lienBandeAnnonce}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        muted
      ></iframe>
      <Link to="/" className="linkStyle">Back Home</Link>
    </div>
  );
}

export default DescriptionFilm;
