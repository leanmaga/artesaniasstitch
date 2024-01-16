import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <div id='hero'>

      <div className='col-0 col-md-1 col-lg-2'></div>

      <div className='col-12 col-md-5 col-lg-4'>
        
        <div className={`inset-0 ${styles.paddingX} flex flex-row justify-center items-start gap-5`}>
        
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div className='flex flex-col justify-center items-center mt-5'>

            <h1 className={`${styles.heroHeadText}`}>
              <span id="title" className='text-[#915EFF]'>Artesanias Stitch</span>
            </h1>

            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Venta de aros, llaveros, pinturas,
              souvenirs, impresiones en 3d y mucho más...
            </p> 

          </div>
        
        </div>
        
      </div>
      
      <div className='col-12 col-md-5 col-lg-4'>

        <div className={`inset-0 ${styles.paddingX} flex flex-col justify-center h-[500px] items-center p-5`}>
          <ComputersCanvas className="w-[100%] h-[100%]"/>
        </div>

      </div>

      <div className='col-0 col-md-1 col-lg-2'></div>
      
    </div>
  );
};

export default Hero;