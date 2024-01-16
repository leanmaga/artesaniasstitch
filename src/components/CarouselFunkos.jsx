import { motion } from 'framer-motion'

import { useRef, useEffect, useState } from 'react'

import funkos from './funkos';

export default function CarouselFunkos() {

    const [width, setWidth ] = useState(0);

    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

  return (
    <div className='carousel-container'>
        <motion.div 
            ref={carousel} 
            className='carousel' 
            whileTap={{cursor: 'grabbing'}}
        >
            <motion.div 
                drag='x'
                dragConstraints={{ right: 0, left: -width }} 
                className='inner-carousel'>
                {funkos.map(funko => {
                    return(
                        <motion.div className='item' key={funko}>
                            <img src={funko} alt=''/>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    </div>
  );
}