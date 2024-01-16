import { Link } from "react-router-dom";
import { StarsCanvas } from "../components"
import CarouselLlaveros from "../components/CarouselLlaveros";

import { styles } from "../styles";
const Llaveros = () => {
  return (
    <>
    <div className="flex justify-center w-full h-screen text-center">
      

    <div className="col-2"></div>

    <div className="col-8">
        <h1 className={`${styles.sectionHeadText} text-center pt-4`}><Link to='/'>Llaveros</Link></h1>
        <CarouselLlaveros/>
    </div>

    <div className="col-2"></div>

    </div>

    <StarsCanvas />

</>
  )
}

export default Llaveros