import React from 'react';
import './Footer.css';
import GC from '../../assets/GC.svg'

const Footer = () => {
    return (
        <div className='h-[540px] bg-[#121212] border-t-[20px] border-t-[#664DFF] text-[#FFFFFF] text-[16px] flex flex-col item-center '>
            <div className='h-[443px] border-b border-b-[#494949] flex justify-around mt-[80px]'>
                <div className='w-[305px] h-[148px] flex flex-col justify-between'>
                    <div className='flex items-center'>
                        <img src={GC} alt="" />
                        <p className='text-[#664DFF]  font-["Helvetica"] font-bold'>GinuxChannel</p>
                    </div>
                    <p className='w-full h-[84px] '>Lorem ipsum dolor sit amet consectetur. Aliquam vitae vulputate vitae id mauris odio pharetra nisl non. Ornare nisl.</p>
                </div>
                <div className='w-[109px] h-[216px] flex flex-col justify-between'>
                    <p>COMPANY</p>
                    <a href="#about">About</a>
                    <a href="#features">Features</a>
                    <a href="#work">Work</a>
                    <a href="#career">Career</a>
                </div>
                <div className='w-[149px] h-[168px] flex flex-col justify-between'>
                    <p>HELP</p>
                    <a href="#support">Customer Support</a>
                    <a href="#tac">Terms & Conditions</a>
                    <a href="#ppolicy">Privacy Policy</a>
                </div>
                <div className='w-[306px] h-[163px] flex flex-col justify-between'>
                    <p className='text-[14px] text-[#DADADA] font-semibold font-["Inter"]'>NEWSLETTER</p>
                    <div className=' relative flex flex-col justify-center items-start'>
                        <p className='text-[#A1A1AA] absolute left-[10px]'>Enter your email address</p>
                        <input type="text" className='border-[#E4E4E7] bg-[#FFFFFF] rounded-[10px] w-full h-[55px] ' />
                    </div>
                    <a href="" className='bg-[#664DFF] px-[24px] py-[14px] rounded-[10px] text-center font-medium'>Subscribe Now</a>
                </div>
            </div>
            <p className=' text-[14px] text-center font-["Helvetica"] pt-[30px] pb-[60px]'>&copy; Copyright 2024. All Rights Reserved by Ginux Academy</p>
        </div>
    )
}

export default Footer