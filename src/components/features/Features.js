import React from 'react';
import './Features.css';
import DashFeatures from '../UI/DashFeatures';
import { dash_features } from './data';


const Features = () => {
    return (
        <div className='bg-white py-[38px]'>
            <p className='text-[40px] text-center text-[#1D2026] font-semibold '>Features</p>

            {
                dash_features.map((feature) => (
                    <DashFeatures heading={feature.heading} text={feature.text} image={feature.image} />
                ))
            }
        </div>

    )
}

export default Features