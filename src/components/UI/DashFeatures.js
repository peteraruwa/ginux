import React from 'react';
import Phone_icon from "../../assets/phone-sm.svg"


const DashFeatures = ({ heading, text, image }) => {
    return (
        <div className='flex justify-around items-center w-full h-[550px] py-0 px-[50px] odd:flex-row-reverse odd:text-right'>
            <div className='w-[506px] h-[313px] leading-10'>
                <img src={Phone_icon} alt="" className='py-[20px]' />
                <p className='text-[24px] text-[#263238] font-bold'>{heading}</p>
                <p className='text-[18px] text-[#263238] font-["Helvetica"] w-[506px] h-[313px]'>{text}</p>
            </div>
            <div className='w-[608.2px] h-[495px] bg-[#6157A00D] rounded-[20px] flex justify-center items-center'>
                <img src={image} alt="" className='w-[486px] h-[334px]' />
            </div>
        </div>
    )
}

export default DashFeatures