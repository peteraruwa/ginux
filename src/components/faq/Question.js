import React, { useState } from 'react';
import { HiArrowUp, HiArrowDown } from "react-icons/hi";


const Question = ({ title, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const handleClick = () =>
        setShowAnswer(!showAnswer)
    return (

        <div className='w-[760px]'>
            <div className={`w-full flex justify-between items-center border  p-[20px]  ${showAnswer ? 'border-[#1D2026] bg-[#1D2026] text-[#FFFFFF]' : 'border-[#D8D8D8] text-[#1D2026]'}`} >
                <p className='text-[16px] font-["Helvetica"] '>{title}</p>
                <button onClick={handleClick}>
                    {
                        showAnswer ? <HiArrowUp /> : <HiArrowDown />
                    }
                </button>
            </div>
            <div className=''>
                {showAnswer && <p className='w-full p-[20px] text-justify border-x border-b border-[#D8D8D8]'>{answer}</p>}
            </div>
        </div>
    )
}

export default Question
