import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = () => {
  return (
    <Carousel>
      {/* Muestra una lista de imágenes de productos */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Producto 1"
        />
        <Carousel.Caption>
          <h3>Producto 1</h3>
          <p>Descripción del producto 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Producto 2"
        />
        <Carousel.Caption>
          <h3>Producto 2</h3>
          <p>Descripción del producto 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Producto 3"
        />
        <Carousel.Caption>
          <h3>Producto 3</h3>
          <p>Descripción del producto 3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel;
