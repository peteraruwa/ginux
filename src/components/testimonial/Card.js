import React from 'react';
import Arrow from '../../assets/Arrow.svg';
import L_Quote from '../../assets/left-quote.svg';
import R_Quote from '../../assets/right-quote.svg';


const Card = ({ name, words, job_title, company }) => {

    return (
        <div className='w-[424px] h-[376px] bg-[#F8F8F8]'>
            <div className='w-full h-[272px] relative flex flex-col items-center'>
                <div className='w-full h-[256px] bg-[#664DFF] p-[24px] flex flex-col justify-between'>
                    <div className='w-[376px] h-[48px] flex flex-col items-center justify-center'>
                        <img src={L_Quote} alt="" className='self-start' />
                    </div>
                    <p className='w-[376px] h-[96px] text-[18px] font-["Inter"] text-[#FFFFFF]'>{words}</p>
                    <div className='w-[376px] h-[48px] flex flex-col items-center justify-center'>
                        <img src={R_Quote} alt="" className='self-end' />
                    </div>
                </div>
                <img src={Arrow} alt="" className='absolute bottom-0' />
            </div>
            <div className="w-[424px] h-[50px] mt-[30px] flex flex-col items-center justify-between">
                <p className='text-center text-[16px] text-[#1D2026] font-["Helvetica"]'>{name}</p>
                <p className='text-center text-[14px] text-[#6E7485] font-["Helvetica"]'>{job_title} at {company}</p>
            </div>
        </div>
    )
}

export default Card