import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import LogoWhite from '../assets/logo-white.png';
import {
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineInstagram,
    AiOutlineDribbble,
    AiOutlineTwitter,
    AiFillYoutube,
} from 'react-icons/ai';

const Navbar = () => {
    const navData = {
        menuItemList: [
            {
                name: 'Home',
                url: '/',
            },
            {
                name: 'Service',
                url: '/',
            },
            {
                name: 'Feature',
                url: '/',
            },
            {
                name: 'Product',
                url: '/',
            },
            {
                name: 'Testimonial',
                url: '/',
            },
            {
                name: 'FAQ',
                url: '/',
            },
        ],
    };

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center max-w-[1440px] h-20 m-auto'>
            <img className='ml-6 xl:ml-28' src={Logo} alt='Logo' />
            <ul className='hidden md:flex gap-4 lg:gap-10'>
                {navData.menuItemList.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            <div className='hidden md:flex mr-5 lg:mr-10 xl:mr-28'>
                <button className='md:w-[70px] md:h-8 lg:w-[77px] lg:h-10 mr-3  bg-silver text-primary'>
                    Login
                </button>
                <button className='md:w-[70px] md:h-8 lg:w-[77px] lg:h-10'>
                    Sign up
                </button>
            </div>

            <div className='block m-4 md:hidden' onClick={handleNav}>
                {nav ? (
                    <AiOutlineMenu size={20} color='black' />
                ) : (
                    <AiOutlineClose size={20} color='black' />
                )}
            </div>
            <aside className={nav ? 'left-[-100%]' : 'left-0'}>
                <img
                    className='w-[190px] m-4 text-white'
                    src={LogoWhite}
                    alt='Logo'
                />
                <ul className='flex flex-col m-8 gap-4 w-[100px] text-white'>
                    {navData.menuItemList.map((item, index) => (
                        <li key={index} className='border-b border-silver '>
                            {item.name}
                        </li>
                    ))}
                </ul>
                <div className='fixed bottom-0'>
                    <div className='m-4'>
                        <button className='w-[77px] h-10 mr-3  bg-silver text-primary'>
                            Login
                        </button>
                        <button className='w-[77px] h-10'>Sign up</button>
                    </div>
                    <div className='flex gap-4 m-4'>
                        <AiOutlineInstagram size={32} color='white' />
                        <AiOutlineDribbble size={32} />
                        <AiOutlineTwitter size={32} />
                        <AiFillYoutube size={32} />
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Navbar;
