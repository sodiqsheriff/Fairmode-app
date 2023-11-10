
import { useState, useEffect } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import profile from '../assets/Profile.png'
import { BsBell } from 'react-icons/bs'
const Topbar =()=>{
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
    
    return(
        <>
        <div className="flex w-full">
            
           <div className="flex flex-col md:flex md:flex-row w-full">
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
            </div> 
        </div>
       
        </>
    )
}

export default Topbar