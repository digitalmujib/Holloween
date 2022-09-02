import React from 'react'
import "./contact.css"

const Contact = () => {
    return (
        <section class="contact" id="Contact">

            <h1 className='heading'><span>Contact</span>Us</h1>

            <div className='row'>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61602.282970736516!2d73.94005810589273!3d15.205355919401427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb3339fc88f4f%3A0x785fe8406941baf9!2sChinchinim%2C%20Goa!5e0!3m2!1sen!2sin!4v1662098937067!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                <form action=''>
                    <h3 data-aos="zoom-in">Tell us something!</h3>
                    <input data-aos="zoom-in" type="text" className='input-box' placeholder='Name' />
                    <input data-aos="zoom-in" type="email" className='input-box' placeholder='Email' />
                    <input data-aos="zoom-in" type="phone" className='input-box' placeholder='Contact Number' />
                    <textarea data-aos="zoom-in" placeholder='Message' cols="30" className="input-box" rows="10"></textarea>
                    <div data-aos="zoom-in" >
                        <button className='btn'>Send Message</button>
                    </div>
                </form>

            </div>

        </section>
    )
}

export default Contact