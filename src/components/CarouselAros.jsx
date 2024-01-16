import { motion } from 'framer-motion'

import { useRef, useEffect, useState } from 'react'

import aros from './aros';

export default function CarouselAros() {

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
                {aros.map(aro => {
                    return(
                        <motion.div className='item' key={aro}>
                            <img src={aro} alt=''/>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    </div>
  );
}