import { About, Contact, Experience, Feedbacks, Hero,  Navbar,  StarsCanvas } from "../components";

const Home = () => {
  return (
    <>
        <div>
            <Navbar/>
            <Hero />
        </div>
        <div >
            <About  />

            <Experience />  
        
            <Feedbacks />
        </div>
        <div >
            <Contact />
            <StarsCanvas />
        </div>
    
    </>
    
  )
}

export default Home