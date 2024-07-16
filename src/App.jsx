import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import AOS from 'aos';
import 'aos/dist/aos.css'
import React from "react";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

export default function App() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Menu/>
      <Footer/>
    </div>


    
  )
}

