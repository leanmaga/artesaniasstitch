import { StarsCanvas } from "../components"
import CarouselFunkos from "../components/CarouselFunkos";

import { logo } from "../assets";


import { Link } from "react-router-dom";


import { styles } from "../styles";

const Funkos = () => {
  return (
    <>
    <div className="flex justify-center w-full h-screen text-center">
    

    <div className="col-2"></div>

    <div className="col-8">
        <h1 className={`${styles.sectionHeadText} text-center  pt-4`}><Link to='/'>Funkos</Link></h1>
       
        <CarouselFunkos/>
    </div>

    <div className="col-2"></div>

    </div>

    <StarsCanvas />

</>
  )
}

export default Funkos