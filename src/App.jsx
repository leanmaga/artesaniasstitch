import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Aros from "./Pages/Aros";
import Funkos from "./Pages/Funkos"; 
import Llaveros from "./Pages/Llaveros";
import Otros from "./Pages/Otros";



const App = () => {
  return (
    <div >
      <div className='relative z-0 bg-black'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/aros' element={<Aros/>} />
              <Route path='/funkos' element={<Funkos/>} />
              <Route path='/llaveros' element={<Llaveros/>} />
              <Route path='/otros' element={<Otros/>} />
              <Route path='*' element={<Home />} />
          </Routes>
          
        </div>
      </div>
    </div>
  );
}

export default App;