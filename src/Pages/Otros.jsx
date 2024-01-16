import { StarsCanvas } from "../components"
import CarouselOtros from "../components/CarouselOtros";

import { styles } from "../styles";

import { Link } from "react-router-dom";
const Otros = () => {
  return (
    <>
    <div className="flex justify-center w-full h-screen text-center">
   

    <div className="col-2"></div>

    <div className="col-8">
        <h1 className={`${styles.sectionHeadText} text-center pt-4`}><Link to='/'>Otros</Link></h1>
        <CarouselOtros/>
    </div>

    <div className="col-2"></div>

    </div>

    <StarsCanvas />

</>
  )
}

export default Otros