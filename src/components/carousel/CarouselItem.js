import React from 'react'

const CarouselItem = ({ heading, desc, image }) => {
    return (
        <div className='h-[688px] w-full flex place-content-center'>
            <div className="flex flex-col justify-around items-center lg:flex-row">
                <div className='text-white w-[677px] h-[350px] flex flex-col gap-y-[20px]'>
                    <p className='font-bold text-[60px]'>{heading}</p>
                    <p>{desc}</p>
                    <a href="#getstarted" className='rounded-[6px] px-[24px] py-[14px] bg-white text-[#272727] self-start'>Get Started</a>
                </div>
                <img src={image} alt="" className='' />
            </div>
        </div>
    )
}

export default CarouselItem