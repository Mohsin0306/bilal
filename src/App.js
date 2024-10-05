import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import AboutMe from "./components/AboutMe"; // Import the new component
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <MainSection />
      <AboutMe /> {/* Added About Me section here */}
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
