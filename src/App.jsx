import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';



import './App.css'

const router = createBrowserRouter([
  {path: "/", element:<Login />},
  {path: "Dashboard", element:<Dashboard />}
])

function App() {
 
  return (
    <div className="dark:bg-black h-full">
    
    <RouterProvider router={ router } />

    </div>
  
  )
}

export default App
