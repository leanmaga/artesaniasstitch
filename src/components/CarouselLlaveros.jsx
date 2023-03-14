import Carousel from 'react-bootstrap/Carousel';
import '../components/carousel.css';
import img1 from '../assets/img/llaveros/1.jpg';
import img2 from '../assets/img/llaveros/2.jpg';
import img3 from '../assets/img/llaveros/3.jpg';
import img4 from '../assets/img/llaveros/4.jpg';
import img5 from '../assets/img/llaveros/5.webp';
import img6 from '../assets/img/llaveros/6.webp';
import img7 from '../assets/img/llaveros/7.webp';
import img8 from '../assets/img/llaveros/8.webp';
import img9 from '../assets/img/llaveros/9.jpg';
import img10 from '../assets/img/llaveros/10.jpg';
import img11 from '../assets/img/llaveros/11.jpg';
import img12 from '../assets/img/llaveros/12.jpg';
import img13 from '../assets/img/llaveros/13.jpg';
import img14 from '../assets/img/llaveros/14.webp';


const CarouselLlaveros = () => {
  return (
    <Carousel fade interval={5000} controls indicators wrap>

      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-dark'>Rick and Morty</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>otros de Cereza</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Death Note</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Naruto</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      

      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Jack</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img6}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Aguacate</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img7}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Cerditos Simpson</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img8}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Patito</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img9}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Mate</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img10}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Sombrero Harry Potter</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img11}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Gatito</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img12}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Stitch</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img13}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Pizza</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='padre-img d-flex'>
        <img
          className="img-carousel d-block w-50"
          src={img14}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Yoda Star Wars</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      

    </Carousel>
  );
}

export default CarouselLlaveros;