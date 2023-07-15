import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import MovieData from './MovieData';

function Accueil() {
  // Liste des films
  return (
    <Row xs={1} md={2} className="g-4">
      {MovieData.map(movie => (
        <Col key={movie.id}>
          <Card>
            <Card.Img variant="top" src={movie.posterURL} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>

             <Link to={`/films/${movie.id}`}>Voir la description</Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Accueil;