import React from 'react'
import "./products.css"
import { images } from "../../constants";
import ProductsContainer from './ProductsContainer';
import productsData from './productsData';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";



const Products = () => {
    return (
        <section className='products' id='Products'>
            <h1 className='heading'>Our <span>Products</span></h1>

            <div className='products-slider' data-aos="zoom-in">
                <div className='wrapper'>

                    <Swiper
                        slidesPerView={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}

                        grabCursor= {true}

                        breakpoints={{
                            10: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            },
                        }}

                        modules={[Pagination]}
                        className="mySwiper"
                    >


                        {productsData.map((elem, index) => (
                            <SwiperSlide>
                                <ProductsContainer
                                    key={index}
                                    img={elem.img}
                                    heading={elem.header}
                                    price={elem.price}
                                    spanPrice={elem.spanPrice}
                                />
                            </SwiperSlide>
                        ))}


                    </Swiper>

                </div>
            </div>
        </section>
    )
}

export default Products;