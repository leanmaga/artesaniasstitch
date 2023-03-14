import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <Row>
      {/* Muestra una lista de productos */}
      <Col md={4} lg={4}>
        <ProductCard 
          title="Producto 1" 
          imageUrl="https://via.placeholder.com/200x200" 
          price={19.99} 
          rating={4}
        />
      </Col>
      <Col md={4} lg={4}>
        <ProductCard 
          title="Producto 2" 
          imageUrl="https://via.placeholder.com/200x200" 
          price={29.99} 
          rating={5}
        />
      </Col>
      <Col md={4} lg={4}>
        <ProductCard 
          title="Producto 3" 
          imageUrl="https://via.placeholder.com/200x200" 
          price={9.99} 
          rating={3}
        />
      </Col>
    </Row>
  )
}

export default ProductList;
