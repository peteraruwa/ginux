import React from 'react';
import Check from '../../assets/CheckCircle.svg';

const TopFeatures = ({ heading, text }) => {
    return (
        <div className='w-[536px] bg-white flex justify-around shadow-[0_4px_50px_0px_rgba(29, 32, 38, 0.05)] my-4 p-4'>
            <div className='h-full'>
                <img src={Check} alt="" />
            </div>
            <div className='w-[420px]'>
                <p className='text-[16px] text-[#1D2026]'>{heading}</p>
                <p className=' text-[14px] text-[#6E7485] '>{text}</p>
            </div>
        </div>
    )
}

export default TopFeatures