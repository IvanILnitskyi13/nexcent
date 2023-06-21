import React from 'react';
import Illustration from '../assets/illustration.png';

const Hero = () => {
    return (
        <div className='text-dark-grey'>
            <div className='max-w-[1440px] mx-auto my-32 flex flex-col-reverse lg:flex-row justify-around items-center'>
                <div>
                    <h1 className='mb-4'>
                        Lessons and insights{' '}
                        <span className='block text-primary'>from 8 years</span>
                    </h1>
                    <p className='mb-8'>
                        Where to grow your business as a photographer: site or
                        social media?
                    </p>
                    <button className='w-[128px] h-[52px]'>Register</button>
                </div>
                <img
                    className='w-60 md:w-96 h-auto'
                    src={Illustration}
                    alt='Illustration'
                />
            </div>
        </div>
    );
};

export default Hero;
