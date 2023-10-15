import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';



import './App.css'
const router = createBrowserRouter([
  {path:'/', element:<Login />},
  {path:'Dashboard', element:<Dashboard />},
])
function App() {
 
  return (
    <div className="dark:bg-black h-screen w-full font-Inter">
     <RouterProvider router={router} />
  
    </div>
  
  )
}

export default App
