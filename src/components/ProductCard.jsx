import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = (props) => {
  return (
    <Card>
      {/* Muestra la imagen del producto */}
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        {/* Muestra el título del producto */}
        <Card.Title>{props.title}</Card.Title>
        {/* Muestra el precio del producto */}
        <Card.Text>Precio: ${props.price}</Card.Text>
        {/* Muestra la calificación del producto */}
        <Card.Text>Calificación: {props.rating}/5</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;
