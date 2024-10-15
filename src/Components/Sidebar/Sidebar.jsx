import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {

    const [toggle, setToggle] = useState(false);

    function changeToggle() {
        setToggle(!toggle);
    }

    return (
        <>
            <nav className={`${toggle ? 'w-64' : 'w-20'} z-50 fixed top-0 left-0 h-screen flex`}>
                {/* Sidebar Content */}
                <div
                    className={`${toggle ? 'sidebar w-44 ps-5 h-full bg-black text-white flex flex-col justify-between transition-transform duration-200 ease-in-out' : 'sidebar w-0 overflow-hidden h-full bg-black text-white flex flex-col justify-between transition-transform duration-200 ease-in-out'}`}
                    style={{ willChange: 'transform' }}
                >
                    <div className="sidebar-links">
                        <ul>
                            <li onClick={() => setToggle(false)} className='pt-6 hover:text-red-700 transition-all duration-200'>
                                <NavLink to={''}>Now playing</NavLink>
                            </li>
                            <li onClick={() => setToggle(false)} className='pt-6 hover:text-red-700 transition-all duration-200'>
                                <NavLink to={'/popular'}>Popular</NavLink>
                            </li>
                            <li onClick={() => setToggle(false)} className='pt-6 hover:text-red-700 transition-all duration-200'>
                                <NavLink to={'/toprated'}>Top Rated</NavLink>
                            </li>
                            <li onClick={() => setToggle(false)} className='pt-6 hover:text-red-700 transition-all duration-200'>
                                <NavLink to={'/trending'}>Trending</NavLink>
                            </li>
                            <li onClick={() => setToggle(false)} className='pt-6 hover:text-red-700 transition-all duration-200'>
                                <NavLink to={'/upcoming'}>Upcoming</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-text text-white mb-8">
                        <div className="sidebr-icon mb-5">
                            <i className="fa-brands fa-facebook pe-4"></i>
                            <i className="fa-brands fa-twitter pe-4"></i>
                            <i className="fa-brands fa-chrome pe-4"></i>
                        </div>

                        <p className='text-[#999999]'>Copyright © 2022 All Rights Reserved.</p>
                        <p className='text-[#999999]'>
                            created by <span onClick={() => window.open('https://www.linkedin.com/in/eslam-elsayed-7273a926b', '_blank')} className='text-red-700 cursor-pointer'>
                                Eslam Elsayed
                            </span>
                        </p>
                    </div>
                </div>

                {/* Sidebar Toggle */}
                <div className="sidebar-toggle h-full bg-white text-black w-20 flex flex-col justify-between items-center">
                    <div className='pt-8'>
                        <i className="fa-solid fa-blog fa-2xl"></i>
                    </div>
                    <div onClick={() => changeToggle()} className='cursor-pointer'>
                        {toggle ? <i className="fa-solid fa-x fa-2xl"></i> : <i className="fa-solid fa-list fa-2xl"></i>}
                    </div>
                    <div className='flex flex-col pb-8'>
                        <i className="fa-brands fa-chrome pe-4 fa-lg py-8"></i>
                        <i className="fa-solid fa-share fa-lg"></i>
                    </div>
                </div>
            </nav>
        </>
    );
}
