import React from 'react'
import { images } from "../../constants"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about' id="About" >
        <div className='content' data-aos="fade-right">
          <h3>About us</h3>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora assumenda quia eos accusantium, aperiam voluptates esse repellendus aliquid rem tenetur quas animi odio minima vero. Distinctio earum reiciendis cupiditate fugit. </p>

          <a href="#" className='btn'>Read more...</a>
        </div>
      </section>
    </>
  )
}

export default About;