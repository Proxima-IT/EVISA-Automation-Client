import React from 'react';

const AutomationSettings = () => {
    return (
        <div className='lg:mx-20 flex flex-col lg:flex-row gap-10 justify-between items-center mt-20'>
            <h1 className='font-bold text-[#1d224f]  text-lg lg:text-xl whitespace-nowrap'>Allow our bot to book automatically</h1>
            <button className='cursor-pointer whitespace-nowrap px-8 py-3 bg-[#2D336B] text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-[#1d224f] transition'>Start Automation</button>
        </div>
    );
};

export default AutomationSettings;