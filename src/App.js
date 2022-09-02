import React from "react";
import About from "./components/About/About";
import Arrivals from "./components/Arrivals/Arrivals";
import Blog from "./components/Blogs/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products"

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Arrivals />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}