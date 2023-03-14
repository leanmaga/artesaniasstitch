import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/Navbar'

const Error404Page = () => {
  return (
    <Container >

      <Navbar/>

      <Row>
        
        <Col className='prod-columna1' >

          <h1 className='m-4'>Artesanias Stitch</h1>

          
          <h3>Error 404</h3>

        </Col>

      </Row>

    </Container>
  )
}

export default Error404Page