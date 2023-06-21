import React from 'react';
import ComunityItem from './UI/ComunityItem';
import membershipIcon from '../assets/membership.png';
import associationIcon from '../assets/association.png';
import grupsIcon from '../assets/groups.png';

const Comunity = () => {
    const comunitiItemList = [
        {
            icon: membershipIcon,
            title: 'Membership Organizations',
            desc: 'Our membership management software provides full automation of membership renewals and payments',
        },
        {
            icon: associationIcon,
            title: 'National Association',
            desc: 'Our membership management software provides full automation of membership renewals and payments',
        },
        {
            icon: grupsIcon,
            title: 'Clubs And Groups',
            desc: 'Our membership management software provides full automation of membership renewals and payments',
        },
    ];

    return (
        <div className='max-w-[1440px] mx-auto bg-white flex flex-col justify-center items-center'>
            <h3 className='max-w-[542px] text-center mb-2 '>
                Manage your entire comunity in a single system
            </h3>
            <p className='mb-4'>Who is Nextcent suiteble for?</p>
            <ul className='w-full flex flex-1 flex-wrap justify-around items-center'>
                {comunitiItemList.map((item, index) => (
                    <ComunityItem key={index} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default Comunity;
