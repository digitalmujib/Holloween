import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <section className='footer'>
            <div className='box-container'>

                <div className='footer-box' data-aos="fade-right">
                    <h3>Our branches</h3>
                    <a href='#'> <i className='fas fa-map-marker-alt'></i>India</a>
                    <a href='#'> <i className='fas fa-map-marker-alt'></i>USA</a>
                    <a href='#'> <i className='fas fa-map-marker-alt'></i>Russia</a>
                    <a href='#'> <i className='fas fa-map-marker-alt'></i>France</a>
                    <a href='#'> <i className='fas fa-map-marker-alt'></i>Japan</a>
                </div>

                <div className='footer-box' data-aos="fade-down">
                    <h3>Quick links</h3>
                    <a href='#Home'> <i className='fas fa-arrow-right'></i>Home</a>
                    <a href='#Products'> <i className='fas fa-arrow-right'></i>Products</a>
                    <a href='#About'> <i className='fas fa-arrow-right'></i>About</a>
                    <a href='#Arrivals'> <i className='fas fa-arrow-right'></i>Arrivals</a>
                    <a href='#Contact'> <i className='fas fa-arrow-right'></i>Contact</a>
                    <a href='#Blog'> <i className='fas fa-arrow-right'></i>Blog</a>
                </div>

                <div className='footer-box' data-aos="fade-up">
                    <h3>Contact us</h3>
                    <a href='#'> <i className='fas fa-phone'></i>+91 9921688776</a>
                    <a href='#'> <i className='fas fa-envelope'></i>mujib.freelance@gmail.com</a>
                    <a href='#'> <i className='fas fa-map-marker-alt'></i>Chinchinim, goa india - 403715</a>
                </div>

                <div className='footer-box' data-aos="fade-left">
                    <h3>Contact us</h3>
                    <a href='#'> <i className='fab fa-facebook'></i>facebook</a>
                    <a href='#'> <i className='fab fa-twitter'></i>twitter</a>
                    <a href='#'> <i className='fab fa-instagram'></i>instagram</a>
                    <a href='#'> <i className='fab fa-linkedin'></i>linkedin</a>
                    <a href='#'> <i className='fab fa-whatsapp'></i>whatsapp</a>

                </div>
            </div>

            <div className='credit'>Created by <a href='https://digitalmujib.github.io/portfolio'><span>@digitalmujib</span></a> | All rights reserved!</div>
        </section>
    )
}

export default Footer