import React from 'react'
import { images } from "../../constants"
import "./blog.css"

const Blog = () => {
    return (
        <section className='blog' id='Blogs' >
            <h1 className='heading'>Our <span>Blogs</span></h1>

            <div className='blogs-box-container'>

                <div className='bg-box' data-aos="fade-right">
                    <div className='image'>
                        <img src={images.blog1} alt="blog img" />
                    </div>

                    <div className='content'>
                        <h3>Believe in the Magic of Halloween.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis repudiandae laboriosam, minus laudantium dignissimos expedita.</p>
                        <a href='#' className='btn'>read more...</a>

                        <div className='icons'>
                            <a href='#'> <i class="fa-solid fa-calendar-days"></i> 2nd September, 2022</a>
                            <a href='#'> <i className='fas fa-user'></i> By admin</a>
                        </div>
                    </div>
                </div>

                <div className='bg-box' data-aos="fade-down">
                    <div className='image'>
                        <img src={images.blog2} alt="blog img" />
                    </div>

                    <div className='content'>
                        <h3>Believe in the Magic of Halloween.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis repudiandae laboriosam, minus laudantium dignissimos expedita.</p>
                        <a href='#' className='btn'>read more...</a>

                        <div className='icons'>
                            <a href='#'> <i class="fa-solid fa-calendar-days"></i> 2nd September, 2022</a>
                            <a href='#'> <i className='fas fa-user'></i> By admin</a>
                        </div>
                    </div>
                </div>

                <div className='bg-box' data-aos="fade-left">
                    <div className='image'>
                        <img src={images.blog3} alt="blog img" />
                    </div>

                    <div className='content'>
                        <h3>Believe in the Magic of Halloween.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis repudiandae laboriosam, minus laudantium dignissimos expedita.</p>
                        <a href='#' className='btn'>read more...</a>

                        <div className='icons'>
                            <a href='#'> <i class="fa-solid fa-calendar-days"></i> 2nd September, 2022</a>
                            <a href='#'> <i className='fas fa-user'></i> By admin</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;