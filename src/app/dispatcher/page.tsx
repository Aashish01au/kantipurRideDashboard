import React from "react";
import { Search, UserRound, CirclePlus } from "lucide-react";
import Image from "next/image";
import map from "../images/map.png";
const Dispatcher = () => {
  return (
    <>
      <div className="h-fit bg-white shadow-md p-5">
        <p className=" text-blue-700 text-2xl  ">Request List</p>
        <hr />
        <div className="grid grid-flow-col p-5  gap-5">
          <div className=" bg-black text-white items-center flex justify-center py-2">
            {" "}
            <span className="flex">
              {" "}
              <Search className="h-6 w-6 " />
              Searching
            </span>
          </div>
          <div className=" hover:bg-black bg-slate-200 text-gray-500 hover:text-white items-center flex justify-center py-2">
            {" "}
            <span className="flex">
              {" "}
              <UserRound className="h-6 w-6 " />
              Assigned
            </span>
          </div>
          <div className=" hover:bg-black bg-slate-200 hover:text-white text-gray-500 items-center flex justify-center py-2">
            {" "}
            <span className="flex">
              {" "}
              <CirclePlus className="h-6 w-6 " />
              Add
            </span>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-3 gap-3 pt-3 ">
          <div className=" bg-slate-100">
            {" "}
            <div className=" bg-gray-200 text-blue-600  p-3">
              {" "}
              Searching List
          
            </div>
            <p className="text-sm ml-3 mt-3 ">No request received</p>
          </div>
          <div className="col-span-2 ">
            {" "}
            <div className=" bg-gray-200 text-blue-600  p-3"> Map</div>
            <Image
              src={map}
              className="w-[770px] h-[500px] pt-3"
              objectFit="center"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dispatcher;
