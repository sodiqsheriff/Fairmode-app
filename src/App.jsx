import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';



import './App.css'
const router = createBrowserRouter([
  {path:'/', element:<Login />},
  {path:'/Dashboard', element:<Dashboard />},
])
function App() {
 
  return (
    <div className="h-screen w-full md:h-screen md:w-full    dark:bg-black lg:h-full lg:w-full  font-Inter">
     <RouterProvider router={router} />
  
    </div>
  
  )
}

export default App
