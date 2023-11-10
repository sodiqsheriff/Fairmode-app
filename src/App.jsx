import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Overview from './Component/Overview'
import Payments from './Component/Payments'
import Method from './Component/Method'
import Loans from './Component/Loans'
import Savings from './Component/Savings'
import Settings from './Component/Settings'


import './App.css'
  const router= createBrowserRouter([ 
   {path: "/", element: <Login />}, 
   {path: "Dashboard", element: <Dashboard />} ,
   {path: "Dashboard/overview/*", element: <Overview />},
   {path: "Dashboard/payments/*", element: <Payments />},
   {path: "Dashboard/loans/*", element: <Loans />},
   {path: "Dashboard/savings/*", element: <Savings />},
   {path: "Dashboard/settings/*", element: <Settings />},
   {path: "Dashboard/method/*", element: <Method />}
 ]) 
function App() {
 
  return (
    <div className="h-screen w-full md:h-screen md:w-full    dark:bg-black lg:h-full lg:w-full  font-Inter">
       <RouterProvider router={router} />
  
    </div>
  
  )
}

export default App
