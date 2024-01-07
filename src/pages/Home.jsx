import React from "react";
import Navbar from "../Components/NavBar/Navbar";
import Intro from "../Components/Intro/Intro";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Education from "../Components/Education/Education";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
