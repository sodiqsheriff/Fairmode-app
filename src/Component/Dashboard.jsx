import React from "react";
import { useRoutes, Link } from "react-router-dom";

import Overview from './Overview'; // Import subpage components
import Payments from './Payments';
import Method from "./Method";
import Loans from './Loans'
import Savings from './Savings';
import Settings from './Settings';
import Topbar from "./Topbar";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose} from 'react-icons/md';
import fairLogo from '../assets/fairmoney-logo.png'
import home from '../assets/overview.png'
import arrow from '../assets/plane.png'
import lon from '../assets/coin.png'
import save from '../assets/stack-line.png'
import care from '../assets/customer.png'
import profile from '../assets/Profile.png'

import payments from '../assets/payee.png'
import settings from '../assets/settings.png'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import {FiSearch, FiDownload}  from 'react-icons/fi';
import {BsFilter} from 'react-icons/bs'



import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsArrowRight, BsArrowRightCircle } from 'react-icons/bs'
import { BsBell } from 'react-icons/bs'
import { useState, useEffect } from 'react';

const Dashboard  = () =>   {
  const subpageRoutes = useRoutes([
    { path: "*", element: <Overview /> }, // This is the default route
    { path: "/Payments", element: <Payments /> },
    { path: "/Method", element: < Method /> },
    { path: "/Loans", element: <Loans /> },
    { path: "/Savings", element: <Savings /> },
    { path: "/Settings", element: <Settings /> }
    // Add more subpage routes here
  ]);


  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    // Check local storage for theme preference and set the initial theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.body.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []); // The empty dependency array ensures this effect runs only once on component mount
  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };
  


  const [isOpen, setIsOpen] = useState(false);
     const toggleMenu = () =>{
        setIsOpen(!isOpen);
     };
 
    
  return (
     <div className='dark:bg-black h- w-full'>
   
      {subpageRoutes}
     
     <div className="flex flex-col md:flex md:flex-row w-full">
     
      <Topbar />
      <div className="flex space-x-12 pt-5 items-center justify-between h-10  md:flex  md:justify-between md:h-16 md:w-full md:border-b md:border-gray-400 md:pb-10 md:px-5 md:pt-5">
          <div className="w-sm p-5 md:flex-col-10 leading-0 ">
            <h1 className="text-sm text-gray-400 dark:text-white">Hello</h1>
            <h1 className="text-2xl text-black font-bold capitalize dark:text-white">olanrewaju</h1>
          </div>
          <div className={`dashboard ${isDarkMode ? 'dark:bg-gray-900' : 'bg-gray-100'}`}>
      
      <div className={`theme-switcher flex gap-2 items-center ${isDarkMode ? 'dark:bg-black' : 'bg-white'} p-2 rounded-md shadow-inner`}>
      <p className="ml-2 text-black dark:text-white">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-gray-800 shadow-2xl' : 'bg-white shadow-inner'}`}
        >
          <div className="flex   space-x-5">
            {isDarkMode ? <IoSunnyOutline className='bg-gray-400 text-white h-5 shadow-inner dark:bg-gray-800 dark:text-gray-600  rounded w-7'  /> : <IoMoonOutline  />}
            {isDarkMode ? <IoMoonOutline className='dark:text-white '/> : <IoSunnyOutline   className='text-white bg-gray-400 h-5 shadow-inner dark:bg-black  rounded w-7' />}
          </div>
        </button>
        <div className="flex items-center space-x-8">
       <BsBell className='text-2xl' />
       <img src ={profile} alt='profile' className='rounded-full' />
       </div>
      </div>
      {/* Other content of your Dashboard */}
    </div>
        </div>
      <Overview />
      
     </div>
    </ div>
  )
}

export default Dashboard