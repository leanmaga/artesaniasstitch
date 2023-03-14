import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/Navbar'
import '../index.css'
const AboutPage = () => {
  return (
    <Container>
        <Row className="artesanias-stitch">

          <Col xs={12} md={6} className='m-4'>
            <h1>Artesanias Stitch</h1>
            <Navbar/>
            <p className='text-white'>Soy una apasionada de las artesanias y llevo más de 10 años 
              trabajando en el mundo del diseño y la producción de piezas 
              únicas y hechas a mano. Mi emprendimiento, Artesanias Stitch, 
              se enfoca en ofrecer productos de alta calidad y 
              diseños innovadores a un público que valora el trabajo artesanal 
              y el diseño personalizado. 
            </p>
          </Col>

        </Row>
    </Container>
  )
}

export default AboutPage