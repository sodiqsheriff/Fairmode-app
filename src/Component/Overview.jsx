import Sidebar from "./Sidebar"
import Topbar from "./Topbar";
import { useState, useEffect } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import {FiSearch, FiDownload}  from 'react-icons/fi';
import {BsFilter} from 'react-icons/bs'
import profile from '../assets/Profile.png'
import save from '../assets/stack-line.png'

import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsArrowRight, BsArrowRightCircle } from 'react-icons/bs'
import { BsBell } from 'react-icons/bs'

const Overview = () => {
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
            <div className=" md:w-full lg:flex lg:flex-col lg:w-4/5">
      <Topbar />
       <div className="">
        <div className="flex-col p-5  space-y-3 w-full md:flex md:flex-row md:justify-between">
          <div className="flex-col">
            <h1 className=" md:text-2xl font-semibold text-black dark:text-white">Overview</h1>
            <h1 className="text-sm text-gray-500">Send money and receive money with ease</h1>
          </div>
          <div className="flex-col">
            <div className="flex gap-2">
              <a href="" className='px-2 py-1 flex md:flex border border-gray-400 rounded md:px-3 md:py-2 hover:opacity-50 capitalize items-center dark:text-white'><FaTelegramPlane className='text-xl dark:text-white' /><h1 className="pl-2"> make payments</h1></a>
              <a href="" className='px-2 py-1 flex md:flex border border-gray-400 rounded md:px-3 md:py-2 hover:opacity-50 capitalize items-center bg-black text-white'><AiOutlinePlus className='text-xl' /> <h1 className="pl-2">add money</h1></a>
            </div>
          </div>
        </div>

        <div className="block space-y-4 md:grid grid-cols-2 md:space-y-0 lg:flex p-5 w-full gap-5 lg:space-y-0">
        <div className="w-full bg-black text-white  shadow-2xl rounded hover:opacity-50 p-5 dark:bg-gray-800">
            <div className="flex justify-between">
            <h1 className='text-lg tracking-wider'>5910483467</h1>
            <BsArrowRight className='text-2xl' />
            </div>
            <h1 className="text-xs pt-7">Available balance</h1>
            <h1 className="text-3xl font-semibold tracking-wider">#50,525.00</h1>
            
          </div>
          <div className="bg-green-600 text-white  w-full shadow-2xl rounded hover:opacity-50 p-5">
            <div className="flex justify-between">
            <h1 className='text-xl font-semibold'>Loans</h1>
            <BsArrowRight className='text-2xl' />
            </div>
            <h1 className="text-xs pt-7">Available balance</h1>
            <h1 className="text-3xl font-semibold tracking-wider">#527,500.00</h1>
            </div>
              <div className="bg-blue-500 text-white  shadow-2xl  w-full rounded hover:opacity-50 p-5">
              <div className="flex justify-between">
            <h1 className='text-xl font-semibold'>Savings</h1>
            <BsArrowRight className='text-2xl' />
            </div>
            <h1 className="text-xs pt-7">Total Savings</h1>
            <h1 className="text-3xl font-semibold tracking-wider">#780,230.40</h1>
              </div>
        </div>
           <div className="block w-full space-y-4 gap-0 md:flex md:w-full p-5 md:gap-4 md:space-y-0">
            <div className="flex w-full bg-green-100 rounded border-gray-300 hover:opacity-50 p-5  md:flex items-center gap-3 md:w-full">
              <BsBell />
              <span>
              <h1 className="text-sm text-black font-semibold pb-2">Upcoming repayment</h1>
              <h1 className="text-2xl font-semibold pb-3 md:pb-0">#527,500.00 <label className="text-xs">due by 12th of july</label> </h1>
            </span>
            <a href="" className='px-12 py-2 text-white font-semibold bg-black rounded-2xl'>Repay</a>
            </div>
            <div className="flex w-full bg-yellow-200 rounded border-gray-300 hover:opacity-50 p-5  md:flex items-center gap-3 md:w-full">
            <img src={save} alt="" />
            <span>
              <h1 className="text-xl text-black pb-2">Earn 27% on your savings</h1>
              <h1 className="text-xs">FairLock your savings % earn highest </h1>
              <h1 className="text-xs pb-3 md:pb-0">ever interest on your savings</h1>
            </span>
            <a href="" className='px-8 py-2 md:px-12 md:py-2 text-white font-semibold bg-black rounded-3xl'>Save now!</a>

            </div>

           </div>
     
        <div className="w-full h-full px-5 dark:text-white">
          <div className="border rounded-xl border-b-0  p-5">
            <div className="  md:flex justify-between w-full">
              <div>
              <h1 className="text-2xl font-bold capitalize">transaction history</h1>
              </div>
              <div className="space-y-3 md:flex gap-5 md:space-y-0">
                <div className="flex text-sm w-3/5 h-10 md:flex items-center border md:text-md border-gray-400 rounded p-1   text-gray-400 font-semibold">
                  <FiSearch className='text-xl' />
                  <input type="Search" placeholder='Search Transaction' className='p-2 border-collapse outline-none dark:text-white dark:bg-black' />
                </div>
                <div className="flex text-sm w-1/5 h-10 md:flex items-center border md:text-md border-gray-400 rounded p-1   text-gray-400 font-semibold">
                  <BsFilter className='text-xl' />
                  <input type="button" value='Filter' className='p-2 dark:text-white dark:bg-black' />
                </div>
                <div className="flex text-sm w-28 h-10 md:flex items-center border md:text-md border-gray-400 rounded p-1   text-gray-400 font-semibold">
                  <FiDownload className='text-xl' />
                  <input type="button" value='Download' className='p-2' />
                </div>
              </div>
            </div>
            <div className="px-0 pt-5 space-y-3 md:flex justify-between md:px-5 md:pt-7 md:space-y-0 lg:flex lg:justify-between lg:pt-10 lg:space-y-0">
              <h1 className="text-2xl font-bold">
                June 2023
              </h1>
              <div className="flex  gap-4">
                <h1 className="flex text-xl items-center text-gray-400 pr-2">In:
                <h1 className="text-black font-semibold dark:text-white">#66,560.56</h1>
                </h1>
                <h1 className="flex text-xl items-center text-gray-400 pr-2">Out:
                <h1 className="text-black font-semibold dark:text-white">#66,358.96</h1>
                </h1>
              </div>
            </div>
          </div>

        </div>
         <div className="overflow-x-auto px-5">
        <table className=" text-left text-black min-w-full   md:text-left md:w-full px-5 dark:text-white border  border-b rounded-xl ">
               <thead className="w-full text-gray-500 md:text-gray-300 border">
               <tr >
              <th className='p-3 '>Name</th>
              <th>Transaction Type</th> 
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
                </tr>
               </thead>
               <tbody className='border border-gray-300 '>
          <tr>
            <td className='p-5'>PAYSTACK CHECKOUT</td>
            <td>Money received</td>
            <td>June 21th, 10:30AM</td>
            <td>+2,250.00</td>
            <td ><a href="" className="bg-green-200 text-green-500 py-2 px-3 rounded font-semibold dark:bg-green-500 dark:text-white">Successful</a></td>
          </tr>
          </tbody>
          <tbody className='border border-gray-300 '>
          <tr>
            <td className='p-5'>MTN MOBILE TOPUP</td>
            <td>Airtime Recharge</td>
            <td>June 11th, 01:00AM</td>
            <td>+5,000.00</td>
            <td ><a href="" className="bg-red-200 text-red-500 py-2 px-3  w-28 rounded font-semibold dark:bg-red-500 dark:text-white">Failed</a></td>
          </tr>
          </tbody>
          <tbody className='border border-gray-300 '>
          <tr>
            <td className='p-5'>AFOLABI OLAMILEKAN OLANREWAJU</td>
            <td>Money Sent</td>
            <td>June 10th, 09:10AM</td>
            <td>+1,000.00</td>
            <td ><a href="" className="bg-yellow-200 text-yellow-500 py-2 px-3 w-28 rounded font-semibold dark:bg-yellow-500 dark:text-white">Pending</a></td>
          </tr>
          </tbody>
          <tbody className='border border-gray-300 p-5'>
          <tr className=''>
            <td className='p-5'>SODIQ SHERIFF OLUWATOBI</td>
            <td>Money Received</td>
            <td>June 7th, 01:30AM</td>
            <td>+20,000.00</td>
            <td> <a href="" className="bg-green-200 text-green-500 py-2 px-3 rounded font-semibold dark:bg-green-500 dark:text-white">Successful</a></td>
          </tr>
          </tbody>
          </table>
          </div>
        
          
       </div>
      </div>
      
        </div>
        </>
    )
}
export default Overview