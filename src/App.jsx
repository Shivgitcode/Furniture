import { mainimage } from "./assets"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OurFurnitures from "./components/OurFurnitures"
import Projects from "./components/Projects"
import Services from "./components/Services"
import WhoWeAre from "./components/WhoWeAre"

function App() {


  return (
    <div className=" font-poppins">
      <div className="relative w-full h-[650px]">
        <img src={mainimage} alt="" className="absolute w-full object-cover h-full" />
        <Navbar>
        </Navbar>
        <Hero></Hero>
      </div>
      <Services></Services>
      <AboutUs></AboutUs>
      <OurFurnitures></OurFurnitures>
      <WhoWeAre></WhoWeAre>
      <div className=" py-[200px] w-full">
        <Projects></Projects>
      </div>
      <ContactUs></ContactUs>

    </div>
  )
}

export default App

