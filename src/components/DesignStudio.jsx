import React from 'react';
import img from '../assets/rafiki.png';

const DesignStudio = () => {
    return (
        <div className='max-w-[1440px] mx-auto bg-white flex flex-col justify-center items-center py-12 lg:flex-row lg:gap-12'>
            <img className='w-[440px]' src={img} alt='Graphics' />
            <div className='max-w-[600px] flex flex-col justify-center items-center lg:items-start'>
                <h3 className='py-4 mx-4 text-center md:text-start'>
                    The unseen of spending three years at Pixelgrade
                </h3>
                <p className='pb-8 px-4 font-normal leading-5 text-[14px] text-center lg:text-start'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet justo ipsum. Sed accumsan quam vitae est varius
                    fringilla. Pellentesque placerat vestibulum lorem sed porta.
                    Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                    risus pretium auctor. Etiam quis massa pulvinar, aliquam
                    quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button className='w-[150px] h-12'>Learn More</button>
            </div>
        </div>
    );
};

export default DesignStudio;
