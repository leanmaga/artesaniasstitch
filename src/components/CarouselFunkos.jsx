import Carousel from 'react-bootstrap/Carousel';
import '../components/carousel.css';
import img1 from '../assets/img/funkos/1.jpg';
import img2 from '../assets/img/funkos/2.jpg';


const CarouselSouvenir = () => {
  return (
    <Carousel fade interval={5000} controls indicators wrap>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-dark'>Sombrerero Loco</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Feyrre (Libro Acotar)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
        

    </Carousel>
  );
}

export default CarouselSouvenir;