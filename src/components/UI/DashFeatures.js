import React from 'react';
import Phone_icon from "../../assets/phone-sm.svg"


const DashFeatures = ({ heading, text, image }) => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-around items-center w-full h-[900px] lg:h-[550px] py-0 px-[50px] lg:odd:flex-row-reverse lg:odd:text-right'>
            <div className='w-[506px] h-[313px] leading-10'>
                <img src={Phone_icon} alt="" className='py-[20px]' />
                <p className='text-[24px] text-[#263238] font-bold'>{heading}</p>
                <p className='text-[18px] text-[#263238] font-["Helvetica"] w-[506px] h-[313px]'>{text}</p>
            </div>
            <div className='w-[364px] h-[313px] lg:w-[608.2px] lg:h-[495px] bg-[#6157A00D] rounded-[20px] flex justify-center items-center'>
                <img src={image} alt="" className='w-[290.86px] h-[199.89px] lg:w-[486px] lg:h-[334px]' />
            </div>
        </div>
    )
}

export default DashFeatures