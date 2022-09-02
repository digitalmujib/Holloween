import React from 'react'
import "./hero.css";
import { images } from "../../constants";
import SliderContainer from "./SliderContainer"
import heroData from './heroData';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

const Hero = () => {

    return (
        <section className='hero' id='home'>

            <div className='home-slider'>

                <div className=' wrapper'>

                    <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false
                        }}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination, Autoplay]}
                        className="mySwiper"
                    >

                        {heroData.map((elem, index) => (
                            <SwiperSlide>
                                <SliderContainer
                                    key={index}
                                    img={elem.img}
                                    header={elem.header}
                                    para={elem.para}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>

            </div>

        </section>
    )
}

export default Hero;