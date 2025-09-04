import React from 'react';

const SuccessStory = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-gray-700 text-center mb-10">🎥 Learn the success story from satisfied users</h1>

            <div className='flex justify-center items-center gap-10 mt-20'>
                <iframe width="560" className='rounded-4xl'
                    height="315" 
                    src="https://www.youtube.com/embed/EColTNIbOko" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture;
                    web-share" allowfullscreen>
                </iframe>
                <iframe width="560" className='rounded-4xl'
                    height="315" 
                    src="https://www.youtube.com/embed/gZgpNehW2mg" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture;
                    web-share" allowfullscreen>
                </iframe>
            </div>
        </div>
    );
};

export default SuccessStory;