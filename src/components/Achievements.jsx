import React from 'react';
import Members from '../assets/members.png';
import Clubs from '../assets/groups.png';
import Bookings from '../assets/bookings.png';
import Payments from '../assets/payments.png';
import CountItem from './UI/CountItem';

const Achievements = () => {
    const counts = [
        {
            title: 'Members',
            icon: Members,
            count: 2245341,
        },
        {
            title: 'Clubs',
            icon: Clubs,
            count: 46328,
        },
        {
            title: 'Event Bookings',
            icon: Bookings,
            count: 828867,
        },
        {
            title: 'Payments',
            icon: Payments,
            count: 1926436,
        },
    ];

    return (
        <div className='max-w-[1440px] mx-auto flex flex-col justify-center items-center xl:flex-row'>
            <div className='text-center xl:text-start'>
                <h3 className='w-[540px]'>
                    Helping a local{' '}
                    <span className='block text-primary'>
                        business reinvent itself
                    </span>
                </h3>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <ul className='max-w-[580px] flex my-5 xl:my-16'>
                {counts.map((item, index) => (
                    <CountItem key={index} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default Achievements;
