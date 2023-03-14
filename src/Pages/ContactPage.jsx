import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import SocialIcons from '../components/SocialIcons'

function Contact() {
  return (
    <Container className="contact">

      <Navbar/>
      
      <Row>
        
        <Col className='contact-title' md={6} lg={6} >
          <h1 className='m-4'>Artesanias Stitch</h1>
          {/* Agrega un título */}
          <h3 className='text-white'>Contacto</h3>
          {/* Agrega una breve descripción de cómo los visitantes pueden ponerse en contacto contigo */}
          <p className='text-white'>
            Si estás interesado en adquirir alguna de mis piezas o en colaborar en un proyecto, no dudes en ponerte en contacto conmigo a través de los siguientes canales:
          </p>
          {/* Agrega una lista con enlaces a tus redes sociales o a tu correo electrónico */}
          <div className='m-4'>
            <SocialIcons/>
          </div>
        </Col>
        <Col md={6} lg={6}>
          {/* Agrega un formulario de contacto */}
          <Form >
            {/* Agrega un campo para el nombre */}
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>
            {/* Agrega un campo para el correo electrónico */}
            <Form.Group controlId="formEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
            </Form.Group>
            {/* Agrega un campo para el mensaje */}
            <Form.Group controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Escribe tu mensaje"/>
            </Form.Group>
             {/* Agrega un botón para enviar el formulario */}
            <Button className='boton' type="submit">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default Contact;