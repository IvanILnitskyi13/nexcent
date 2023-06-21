import React from 'react';

const CountItem = ({item}) => {
    return (
        <div className='w-[250px] h-[60px] flex justify-start items-center mx-3 my-5'>
            <img className='w-12 h-auto mr-4' src={item.icon} alt='Photo' />
            <div>
                <h4>{item.count.toLocaleString('en-US')}</h4>
                <p>{item.title}</p>
            </div>
        </div>
    );
};

export default CountItem;
