import React from 'react';
import Slider from "react-slick";
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from './CarouselItem';
import { carousel_data } from './data';



function Carousel() {
    var settings = {
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {
                carousel_data.map((item) => (
                    <CarouselItem key={item.id} heading={item.heading} desc={item.desc} image={item.image} />
                ))
            }

        </Slider>
    );
}



export default Carousel