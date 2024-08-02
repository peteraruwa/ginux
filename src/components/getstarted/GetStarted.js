import React from 'react';
import './GetStarted.css';
import Rocket from '../../assets/RocketLaunch.svg';
import ImgScreen from '../../assets/device-screen.svg'

const GetStarted = () => {
    return (
        <div className='h-[722px] bg-[#FFFFFF] flex items-center justify-center'>
            <div className='w-[1170px] h-[592px] bg-[#664DFF] rounded-[20px] flex flex-col items-center justify-between'>
                <div className='w-full h-[241px] px-[100px] pt-[60px] flex flex-col justify-between items-center'>
                    <p className='text-[50px] text-white text-center font-bold font-["Helvetica"]'>Learning Like Never Before</p>
                    <p className='w-[970px] h-[96px] text-[21px] text-[#F6F6F8] text-center font-["Helvetica"]'>Ginux fosters engaging learning experiences through interactive Channels and real-world projects, ensuring tech enthusiasts grasp concepts effectively. Dive into a dynamic community of learners, where collaboration and innovation thrive.</p>
                </div>

                <a href="#getstarted" className='bg-[#FFC107] px-[50px] py-[16px] rounded-[6px] font-["Poppins"] font-semibold text-[16px] text-[#49475A] flex justify-center items-center gap-x-[10px]'><img src={Rocket} alt="" />Get Started</a>
                <div className='w-[842.15px] flex items-center justify-center rounded-t-[22.58px] pt-[17.5px]  bg-gradient-to-tl from-[#FFFFFF] from-9.25% via-[#D2D2D2] via-43.92% to-[#FFFFFF] to-91.11%'>
                    <img src={ImgScreen} alt="" className='shadow-inner-[0.56px_0.56px_1.13px_0_rgba(0,0,0,0.25)]' />
                </div>
            </div>
        </div>
    )
}



export default GetStarted