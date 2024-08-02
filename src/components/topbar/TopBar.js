import React from 'react';
import './TopBar.css';
import Flags from '../../assets/flags.svg';
import Arr_rt from '../../assets/arrow-right.svg';

const TopBar = () => {
    return (
        <div className='w-full h-[48px] hidden justify-center items-center bg-[#121212] text-white lg:flex'>
            <div className='w-3/5 flex justify-between items-center'>
                <div className=''>
                    <img src={Flags} alt="" />
                </div>
                <p className='font-normal'>Join the long list of successful student from Ginux Academy</p>
                <div className='flex gap-x-3'>
                    <p>Join Now </p>
                    <img src={Arr_rt} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TopBar