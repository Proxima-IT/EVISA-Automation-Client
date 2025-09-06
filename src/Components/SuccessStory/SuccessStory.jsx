import React from 'react';

const SuccessStory = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-gray-700 dark:text-yellow-50  text-center mb-10">🎥 Learn the success story from satisfied users</h1>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 mt-20'>
                <iframe  className='rounded-4xl w-100 h-100 lg:w-160 lg:h-115' data-aos="fade-up-right"
                    src="https://www.youtube.com/embed/EColTNIbOko" 
                    title="YouTube video player" 
                    frameBorder="0"
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture;
                    web-share" allowFullScreen>
                </iframe>
                <iframe className='rounded-4xl w-100 h-100 lg:w-160 lg:h-115' data-aos="fade-up-left"
                    
                    src="https://www.youtube.com/embed/gZgpNehW2mg" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture;
                    web-share" allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default SuccessStory;