import { motion } from 'framer-motion'

import { useRef, useEffect, useState } from 'react'

import otros from './otros';

export default function CarouselOtros() {

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
                {otros.map(otro => {
                    return(
                        <motion.div className='item' key={otro}>
                            <img src={otro} alt=''/>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    </div>
  );
}