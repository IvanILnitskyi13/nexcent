import React from 'react';
import logoList from '../assets/clients/index';

const Clients = () => {
    return (
        <div className=' max-w-[1440px] mx-auto flex flex-col justify-center items-center bg-white py-10'>
            <h3 className='mb-2'>Our Clients</h3>
            <p className='text-center mb-4'>
                We have been working with some Fortune 500+ clients
            </p>
            <ul className='gap-6 md:gap-16 lg:gap-24 xl:gap-32'>
                {logoList.map((logo, index) => (
                    <li key={index}>
                        <img
                            className='w-12 h-12'
                            src={logo}
                            alt='logo'
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Clients;
