import React from 'react';
import './Scholarship.css';
import Slider from './Slider';


const Scholarship = () => {
    return (
        <div className='w-full flex flex-col items-center '>
            <div className='w-full h-[157px] my-[20px] flex flex-col items-center'>
                <p className='text-[40px] text-center font-["Inter"] py-[20px]'>Scholarship</p>
                <p className='text-[18px] text-center font-["Helvetica"] w-[701px]'>We believe in equal access to education. That's why we offer a scholarship program every three months, providing opportunities for deserving learners to excel.</p>
            </div>
            <div className="w-[1400px]">
                <Slider />
            </div>
        </div>
    )
}

export default Scholarship

