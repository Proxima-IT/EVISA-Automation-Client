import React from 'react';
import siteDemo from '../../assets/siteDemoImg.png';
import siteDemo2 from '../../assets/siteDemo2.png';

const DemoPreview = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-gray-700 dark:text-yellow-50 text-center'>🦾 Things that make us <span className='underline italic'>Unique</span> </h1>

            <div className='mt-20 max-w-7xl mx-auto space-y-20'>
                <div data-aos="fade-up-right" className='flex flex-col lg:flex-row justify-center items-center gap-5 m-10'>
                    <img className="p-3 w-170 h-80 border-2 border-purple-950 rounded-3xl"src={siteDemo} alt="" />
                    <div className='mt-10 space-y-5'>
                        <h3 className='text-3xl text-[#1a3c4c] dark:text-yellow-50 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                        <p className='text-xl text-[#1a3c4c] dark:text-yellow-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quis reprehenderit! Consectetur, reiciendis consequatur! Amet minus soluta hic ab corrupti placeat ipsam, modi assumenda expedita voluptate eaque voluptatibus maxime impedit.
                        Praesentium ratione quod eum vero nesciunt tempore culpa reprehenderit, veniam nostrum voluptatum! </p>
                    </div>
                </div>

                <div data-aos="fade-up-left" className='flex  flex-col lg:flex-row-reverse justify-center items-center gap-5  m-10'>
                    <img className="p-3 w-170 h-80 border-2 border-purple-950 rounded-3xl"src={siteDemo2} alt="" />
                    <div className='mt-10 space-y-5'>
                        <h3 className='text-3xl text-[#1a3c4c] dark:text-yellow-50 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                        <p className='text-xl text-[#1a3c4c] dark:text-yellow-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quis reprehenderit! Consectetur, reiciendis consequatur! Amet minus soluta hic ab corrupti placeat ipsam, modi assumenda expedita voluptate eaque voluptatibus maxime impedit.
                        Praesentium ratione quod eum vero nesciunt tempore culpa reprehenderit, veniam nostrum voluptatum! </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoPreview;