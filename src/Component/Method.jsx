import Sidebar from "./Sidebar"
import Topbar from "./Topbar"


const Method = () => {

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
export default Method