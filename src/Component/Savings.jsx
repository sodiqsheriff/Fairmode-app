import Sidebar from "./Sidebar"
import Topbar from "./Topbar"


const Savings = () =>{

    return(
        <>
        <div className="flex">
            <Sidebar />
            <div className=" w-full h-full  lg:w-4/5">
             <Topbar />
        </div>
        </div>
        </>
    )
}
export default Savings