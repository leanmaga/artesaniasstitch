import {  StarsCanvas } from "../components"
import CarouselAros from "../components/CarouselAros";

import { styles } from "../styles";

import { Link } from "react-router-dom";

const Aros = () => {
  return (
    <>
        <div className="flex justify-center w-full h-screen text-center">
        

        <div className="col-2"></div>

        <div className="col-8">
            <h1 className={`${styles.sectionHeadText} text-center pt-4`}><Link to='/'>Aros</Link></h1>

            <CarouselAros/>
        </div>

        <div className="col-2"></div>

        </div>

        <StarsCanvas />

    </>
  )
}

export default Aros