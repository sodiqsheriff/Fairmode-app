import arrow from '../assets/plane.png'
import home from '../assets/overview.png'
import care from '../assets/customer.png'
import lon from '../assets/coin.png'
import save from '../assets/stack-line.png'
import payments from '../assets/payee.png'
import settings from '../assets/settings.png'
import fairLogo from '../assets/fairmoney-logo.png'
import { BsArrowRight, BsArrowRightCircle } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose} from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useRoutes, Link } from "react-router-dom";
import Overview from './Overview'; // Import subpage components
import Payments from './Payments';
import Loans from './Loans'
import Savings from './Savings';
import Settings from './Settings';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () =>{
       setIsOpen(!isOpen);
    };
    const subpageRoutes = useRoutes([
        { path: "/", element: <Overview /> }, // This is the default route
        { path: "/Payments", element: <Payments /> },
        { path: "/Loans", element: <Loans /> },
        { path: "/Savings", element: <Savings /> },
        { path: "/Settings", element: <Settings /> }
        // Add more subpage routes here
      ]);
    return(
        <>
         
         <div className="hidden md:grid  md:w-2/5 lg:grid  border-r border-gray-400 lg:h-full lg:w-1/5 ">
        <div className=" md:grid grid-cols-2 pl-5 pt-5 border-b border-gray-400 h-16  pb-10">
        <img src={fairLogo} alt="" className='w-full '/>
        </div>
        <div className="md:flex-col  p-5 space-y-9 ">
     
          <a href="/dashboard/overview" className='flex gap-3 text-gray-400 font-semibold hover:text-blue-900 hover:text-xl '><img src={home} alt='' />Overview</a>
          <a href="/dashboard/payments" className='flex gap-3 text-gray-400 font-semibold hover:text-blue-900 hover:text-xl '><img src={arrow} alt='' />Payments</a>
          <a href="/dashboard/loans" className='flex gap-3 text-gray-400 font-semibold hover:text-blue-900 hover:text-xl '><img src={lon} alt='' />Loans</a>
          <a href="/dashboard/savings/*" className='flex gap-3 text-gray-400 font-semibold hover:text-blue-900 hover:text-xl '><img src={save} alt='' />Savings</a>
          <a href="/dashboard/method" className='flex gap-3 text-gray-400 font-semibold hover:text-blue-900 hover:text-xl '><img src={payments} alt='' />Payments Method</a>
          <a href="/dashboard/settings" className='flex gap-3 text-gray-400 font-semibold hover:text-blue-900 hover:text-xl '><img src={settings} alt='' />Settings</a>
        </div>
        <div className=" pt-96 pl-5 "> 
          <span className="flex gap-2 text-gray-400 font-semibold mt-48 pb-7">
            <img src={care} alt="" />
            <h1> Chat with Efe!</h1></span>
            <span className="flex items-center gap-2 text-gray-400 font-semibold  pb-7">
            <BsArrowRightCircle className='text-2xl ' />
            <a href='/'> Log out</a></span>

        </div>
      </div>
      <button className='flex flex-col text-2xl  dark:text-white md:hidden lg:hidden ' onClick={toggleMenu}>
     
        {isOpen ?( <MdOutlineClose />): <GiHamburgerMenu /> }
      </button>
      {isOpen  &&(
         <ul className='absolute top-0 right-0 left-0 overflow-y-hidden  space-y-5  bg-white md:space-y-9 pt-7 px-10 dark:bg-black   lg:hidden ' onClick={toggleMenu}>
          {subpageRoutes}
          
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
            <img src={home} alt="" />
            <Link to='/dashboard/Overiew'>Overview</Link>
          </li>
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
            <img src={arrow} alt="" />
            <Link to='/dashboard/Payments'>Payments</Link>
          </li>
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
            <img src={lon} alt="" />
            <Link to='/Loans'>Loans</Link>
          </li>
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
            <img src={save} alt="" />
            <Link to='/Savings'>Savings</Link>
          </li>
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
            <img src={payments} alt="" />
           
          </li>
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
            <img src={settings} alt="" />
            <a href="/Settings">Settings</a>
          </li>
          
          <div className=" pt-5 "> 
          <span className="flex gap-2 text-gray-400 font-semibold pb-3 dark:text-white hover:text-blue-500 ">
            <img src={care} alt="" />
            <h1 className='hover:text-blue-500'> Chat with Efe!</h1></span>
            <span className="flex items-center gap-2 text-gray-400 font-semibold  pb-24 dark:text-white hover:text-blue-500">
            <BsArrowRightCircle className='text-2xl ' />
            <a href='/dashboard' className='hover:text-blue-500'> Log out</a></span>

        </div>
         </ul>


    

      )}
         
        </>
    )
}
export default Sidebar