import React from 'react'
import {
    Bell,
    Settings ,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ChevronDown,
    ShoppingCart,
    ChevronUp,
    Dot,
    Bike,
    Car,
    Eye,
    Ship,
    Star,
    Sparkles,
    Landmark,
    FileBadge,
    MapPinned,
    Users,
    SmilePlus,
    UserRound,
    FolderCog,
    PersonStanding,
    BusFront,
    Waypoints,
  } from "lucide-react";
const ViewPage = () => {
  return (
    <>
        <main className="flex flex-1 flex-col gap-4  lg:gap-6 lg:p-6 bg-muted/40">
          <div className=" items-center">
            <div className=" items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all uppercase  mr-2 mt-4 p-2.5">
            <p className=" text-sm">Dashboard </p>
            <h3 className="  text-blue-800  font-semibold">Dashboard Overview</h3>
                </div>
          </div>
          {/* ===================================select============================= */}
          <div className="gird grid-cols-1 text-right ">
             <div className="">
             <p className="text-gray-400  text-sm mr-44">Graph by Country   </p>
             <select name="" className=" bg-white p-3 border text-sm w-3/12" id="">
              <option  value=""> United States</option>
              <option value="">Nepal</option>
              <option value=""> Vaitnam</option>
             </select>
             </div>
          </div>
          {/* ============================================================================================== */}
          <div className="grid-flow-col grid gap-5">
          <div className=" flex justify-between text-center items-center border uppercase gap-5 bg-white hover:shadow-2xl shadow-md">
            <div className="p-8 ml-5 mb-5 bg-orange-400">
            <UserRound  className="h-8 w-8 text-white" />
                </div>
    <div className="mr-5 text-base">
    <p className=" text-sm">No. of users </p>
            <h3 className="  text-blue-800  font-semibold">30</h3>
    </div>
          </div>
          <div className=" flex justify-between text-center items-center border uppercase gap-5 bg-white hover:shadow-2xl shadow-md">
            <div className="p-8 ml-5 mb-5 bg-green-500">
            <Bike className="h-8 w-8 text-white" />
                </div>
    <div className="mr-5 text-base">
    <p className=" text-sm">No. of Providers </p>
            <h3 className="  text-blue-800  font-semibold">30</h3>
    </div>
          </div>
          <div className=" flex justify-between text-center items-center border uppercase gap-5 bg-white hover:shadow-2xl shadow-md">
            <div className="p-8 ml-5 mb-5 bg-red-500">
            <Waypoints className="h-8 w-8 text-white" />
                </div>
    <div className="mr-5 text-base">
    <p className=" text-sm ">No. of Fleets </p>
            <h3 className="  text-blue-800  font-semibold">30</h3>
    </div>
          </div>
          <div className=" flex justify-between text-center items-center border uppercase gap-5 bg-white hover:shadow-2xl shadow-md">
            <div className="p-8 ml-5 mb-5 bg-sky-600">
            <Home className="h-8 w-8 text-white" />
                </div>
    <div className="mr-5 text-base">
    <p className=" text-sm">No. of Shops </p>
            <h3 className="  text-blue-800  font-semibold">30</h3>
    </div>
          </div>
          </div>
          {/* ================================================================================================ */}
          <div className="grid grid-flow-col grid-cols-2  gap-5">
            <div className="shadow-md hover:shadow-2xl bg-white  text-blue-700 text-2xl  h-40 p-5">Total Transports <hr /> </div>
            <div className="shadow-md hover:shadow-2xl bg-white   text-blue-700 text-2xl  h-40 p-5">Total Services <hr /> </div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-5">
            <div className="shadow-md hover:shadow-2xl bg-white  text-blue-700 text-2xl h-40 p-5">Total Order <hr /> </div>
            <div className="shadow-md hover:shadow-2xl bg-white   text-blue-700 text-2xl  h-40 p-5">Overall Summary <hr /> </div>
          </div>        
        </main>
    
    </>
  )
}

export default ViewPage