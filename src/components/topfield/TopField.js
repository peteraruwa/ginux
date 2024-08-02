import React from 'react';
import './TopField.css';
import PhotoTF from '../../assets/photo-topfield.svg';
import TopFeatures from '../UI/TopFeatures';
import { features } from './data.js';

const TopField = () => {
    return (
        <div className='bg-[#F8F8F8] h-[1100px] lg:h-[698px]  w-full flex place-content-center'>
            <div className="w-[364px] lg:w-[1124px] flex flex-col justify-around lg:flex-row lg:justify-between items-center">
                <img src={PhotoTF} alt="" className='lg:hidden w-[364px]' />
                <div className='w-[523px] '>
                    <div className=''>
                        <p className='font-bold text-[42px]'>Top Field Experts</p>
                        <p className='text-[18px]'>Our trainers come from diverse backgrounds across various technology fields. They bring real-world experience and practical insights into the classroom.</p>
                    </div>
                    {
                        features.map((feature) => (
                            <TopFeatures heading={feature.heading} text={feature.text} />

                        ))
                    }
                </div>
                <img src={PhotoTF} alt="" className='hidden lg:flex' />
            </div>
        </div>
    )
}

export default TopField