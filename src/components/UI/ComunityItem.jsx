import React from 'react';

const ComunityItem = (props) => {
    return (
        <li className='flex flex-col justify-center items-center my-6 mx-8'>
            <div className=' relative flex justify-center items-center w-12 h-12'>
                <img
                    className='relative z-10 w-12'
                    src={props.item.icon}
                    alt='Logo'
                />
                <div className='absolute left-4 top-0 w-12 h-12 bg-tint-five rounded-lg rounded-br-2xl'></div>
            </div>
            <h4 className='max-w-[210px] text-center mb-2'>
                {props.item.title}
            </h4>
            <p className='text-center w-[250px]'>{props.item.desc}</p>
        </li>
    );
};

export default ComunityItem;
