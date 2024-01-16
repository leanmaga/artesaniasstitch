import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";


import { logo } from "../assets";

const Contact = () => {
  
  return (

    <div id='contact'>

      <div className='col-0 col-md-1 col-lg-2'></div>
       
      <div className="col-12 col-md-5 col-lg-4 p-8">
      
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className=' bg-black-100 p-8 rounded-2xl'
        >
          <h3 className={styles.sectionHeadText}>Contáctame.</h3>
        
          <form
          className='mt-6 flex flex-col gap-2'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium m-2 text-start'>Su nombre</span>
            <input
              type='text'
              name='name'
              placeholder="¿Cuál es su nombre?"
              className='bg-tertiary py-2 px-3 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium m-2 text-start'>Su email</span>
            <input
              type='email'
              name='email'
              placeholder="¿Cuál es su dirección de email?"
              className='bg-tertiary py-2 px-3 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium m-2 text-start'>Su Mensaje</span>
            <textarea
              rows={3}
              name='message'
              placeholder='¿Qué quiere decirme?'
              className='bg-tertiary py-2 px-3 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary m-2 py-2 px-3 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Enviar
          </button>
          </form>
        
        </motion.div>

      </div>
      
      <div className="col-12 col-md-5 col-lg-4 p-8">
      
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='flex justify-center'
        >
          <img src={logo} alt='logo' className='object-contain h-50 logo' />
        
        </motion.div>
      
      </div>

      <div className='col-0 col-md-1 col-lg-2'></div>
    
    </div>
  );
};


export default SectionWrapper(Contact, "contact");