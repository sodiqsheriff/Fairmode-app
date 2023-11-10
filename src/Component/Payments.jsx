import Sidebar from "./Sidebar"
import symbol from '../assets/fairrr.png'
import airtime from '../assets/Group.png'
import sub from '../assets/data.png'
import cable from '../assets/tv-line.png'
import net from '../assets/station.png'
import bulb from '../assets/bulb.png'
import { useState, useEffect } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import profile from '../assets/Profile.png'
import { BsBell } from 'react-icons/bs'
import bank from '../assets/overview.png'
const Payments = () =>{
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
        <div className="flex">
            <Sidebar />
            <div className=" w-full h-full pt-12  lg:pt-0 lg:w-4/5">
            <div className="flex flex-col md:flex w-full">
            
            <div className="flex flex-col md:flex md:flex-row w-full">
            <div className="flex space-x-12 md:pt-5 items-center justify-between h-10  md:flex  md:justify-between md:h-16 md:w-full md:border-b md:border-gray-400 md:pb-10 md:px-5 md:pt-5">
           <div className="w-sm md:p-5 md:flex-col-10 leading-0 ">
             <h1 className="text-2xl text-black font-bold capitalize dark:text-white">payments</h1>
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
         <div className="p-0 md:p-5">
            <h1 className="text-xl font-bold capitalize">send money</h1>
            <div className="flex gap-5 md:gap-8 lg:gap-20">
                <div className="flex pt-5 pb-7 gap-3">
                    <div className="w-12 border-2 p-1 rounded-full">
                    <img src={symbol} alt="symbol" className="" />
                    </div>
                    <div className="flex flex-col">
                    <h1 className="text-lg font-semibold">To FairMoney Account </h1>
                    <h1 className="text-sm font-thin text-gray-400">Send money to a fairmoney user</h1>
                    </div> 
                </div>
                <div className="flex pt-5 pb-7 gap-3">
                    <div className=" w-12 border-2 px-3 py-3 rounded-full">
                    <img src={bank} alt="bank" className="" />
                    </div>
                    <div className="flex flex-col">
                    <h1 className="text-lg font-semibold">To other Banks </h1>
                    <h1 className="text-sm font-thin text-gray-400">Send money to a local bank</h1>
                    </div>
                </div>
            </div>
            <h1 className="text-xl pt-5 font-bold capitalize">pay bills</h1>
            <div className="flex gap-5 md:grid md:grid-cols-2 md:gap-0 lg:grid lg:grid-cols-3 lg:gap-0">
                <div className="flex gap-3 py-7 ">
                <div className="w-12 border-2 px-3 py-3 rounded-full">
                    <img src={airtime} alt="airtime" className="" />
                    </div> 
                    <div className="flex flex-col">
                    <h1 className="text-lg font-semibold capitalize">airtime recharge </h1>
                    <h1 className="text-sm font-thin text-gray-400">Send money to a fairmoney user</h1>
                    </div>
                </div>
                <div className="flex gap-3 py-7">
                <div className="w-12 border-2 px-3 py-3  rounded-full">
                    <img src={sub} alt="sub" className="" />
                    </div> 
                    <div className="flex flex-col">
                    <h1 className="text-lg font-semibold capitalize">data </h1>
                    <h1 className="text-sm font-thin text-gray-400">Send money to a local bank</h1>
                    </div>
                </div>
                <div className="flex gap-3 md:pt-0 md:pb-5 py-7 lg:py-7">
                <div className="w-12 border-2 px-3 py-3  rounded-full">
                    <img src={bulb} alt="bulb" className="" />
                    </div> 
                    <div className="flex flex-col">
                    <h1 className="text-lg font-semibold capitalize">electricity </h1>
                    <h1 className="text-sm font-thin text-gray-400">Send money to a local bank</h1>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 md:gap-8 lg:gap-28">
              <div className="flex  gap-3">
                    <div className=" w-12 border-2 px-3 py-3 rounded-full">
                    <img src={cable} alt="bank" className="" />
                    </div>
                    <div className="flex flex-col">
                    <h1 className="text-lg font-semibold">Cable TV </h1>
                    <h1 className="text-sm font-thin text-gray-400">Send money to a fairmoney user</h1>
                    </div>
                </div>
                <div className="flex items-center gap-3 ">
                <div className="w-12 border-2 px-3 py-3  rounded-full">
                    <img src={net} alt="sub" className="" />
                    </div> 
                    <div className="flex flex-col">
                    <h1 className="text-lg font-semibold capitalize">internet</h1>
                    <h1 className="text-sm font-thin text-gray-400">Send money to a local bank</h1>
                    </div>
                </div>
            </div>
         </div>
        </div>
        </div>
        
        </>
    )
}
export default Payments