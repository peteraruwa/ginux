import React from 'react';
import Clock from '../../assets/clock.svg';
import Pipe from '../../assets/pipe.svg';

const Card = ({ image, duration, course, desc, no_of_app, total_app, app_fee }) => {
    return (
        <div className='w-[395.2px] h-[600px]'>
            <img src={image} alt="" className='w-[384.12px] h-[187.44px]' />
            <div className='h-[354px] w-[384.12px] bg-[#FFFFFF] rounded-bl-[4.62px] rounded-br-[4.62px] drop-shadow-[0_3.69px_7.39px_rgba(0, 0, 0, 0.05)]'>
                <div className="flex justify-start items-center ps-[20px] pt-[20px]">
                    <img src={Clock} alt="" />
                    <p className='text-[#262626] text-[11.08px] font-["Helvetica"] ps-[3px]'>{duration}</p>
                </div>
                <p className='text-[18.47px] font-["Helvetica"] font-bold ps-[20px] py-[10px]'>{course}</p>
                <p className='text-[14px] font-["Helvetica"] px-[20px] pb-[20px] leading-6'>{desc}</p>
                <div className='w-[337.03px] h-[135px] flex flex-col'>
                    <div className='flex ps-[20px]'>
                        <div className=''>
                            <p className='text-[14.77px] font-["Helvetica"]'>Hurry up</p>
                            <p className='text-[12px] font-["Helvetica"]'>Only Few slots left</p>
                        </div>
                        <img src={Pipe} alt="" className='px-[10px]' />
                        <div className=''>
                            <p className='text-[14.77px] font-["Helvetica"]'>{no_of_app} of {total_app}</p>
                            <p className='text-[12px] font-["Helvetica"]'>application received</p>
                        </div>
                        <img src={Pipe} alt="" className='px-[10px]' />
                        <div>
                            <p className='text-[14.77px] font-["Helvetica"]'>{app_fee}</p>
                            <p className='text-[12px] font-["Helvetica"]'>Application Fee</p>
                        </div>
                    </div>
                    <a href="#apply" className='rounded-[27.7px] bg-[#664DFF] text-white text-[14.77px] w-[235px] h-[35px] px-[79.64px] py-[6.42px] my-[30px] ms-[61px]'>Apply Now</a>
                </div>
            </div>

        </div>
    )
}

export default Card