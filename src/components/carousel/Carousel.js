import React from 'react';
import Slider from "react-slick";
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img_One from '../../assets/car_1.svg';
import Img_Three from '../../assets/car_2.svg';
import Img_Two from '../../assets/car_3.svg';


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
            <div className='h-[688px] w-full flex place-content-center'>
                <div className="flex justify-around items-center">
                    <div className='text-white w-[677px] h-[350px] flex flex-col gap-y-[20px]'>
                        <p className='font-bold text-[60px]'>Skill Up, Cash In with Ginux Academy</p>
                        <p>Gain expertise in cutting-edge tech fields while earning rewards through active participation. Your journey starts here - shape your future with Ginux </p>
                        <a href="#getstarted" className='rounded-[6px] px-[24px] py-[14px] bg-white text-[#272727] self-start'>Get Started</a>
                    </div>
                    <img src={Img_One} alt="" className='' />
                </div>
            </div>

            <div className='h-[688px] w-full flex place-content-center'>
                <div className="flex justify-around items-center">
                    <div className='text-white w-[677px] h-[350px] flex flex-col gap-y-[20px]'>
                        <p className='font-bold text-[60px]'>Join Ginux Tech Tribe</p>
                        <p>Connect with like-minded individuals, learn from industry experts, and grow together in the supportive Ginux community. Expand your network, share insights, and thrive in the world of technology.</p>
                        <a href="#getstarted" className='rounded-[6px] px-[24px] py-[14px] bg-white text-[#272727] self-start'>Get Started</a>
                    </div>
                    <img src={Img_Two} alt="" className='' />
                </div>
            </div>

            <div className='h-[688px] w-full flex place-content-center'>
                <div className="flex justify-around items-center">
                    <div className='text-white w-[677px] h-[350px] flex flex-col gap-y-[20px]'>
                        <p className='font-bold text-[60px]'>Get Hired & Accelerate Your Career Journey</p>
                        <p>Connect with like-minded individuals, learn from industry experts, and grow together in the supportive Ginux community. Expand your network, share insights, and thrive in the world of technology.</p>
                        <a href="#getstarted" className='rounded-[6px] px-[24px] py-[14px] bg-white text-[#272727] self-start'>Get Started</a>
                    </div>
                    <img src={Img_Three} alt="" className='' />
                </div>
            </div>
        </Slider>
    );
}



export default Carousel