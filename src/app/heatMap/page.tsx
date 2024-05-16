import React from "react";
import { Search, UserRound, CirclePlus } from "lucide-react";
import Image from "next/image";
import heatmap from "../images/heatmap.png";
const HeatMap = () => {
  return (
    <>
      <div className="h-fit bg-white shadow-md p-5">
        <p className=" text-blue-700 text-2xl  ">Heat Map</p>
        <hr />
        <div className="grid grid-flow-col p-5  gap-5 uppercase">
          <div className=" bg-blue-950 text-white items-center flex justify-center py-2 ">
         
           
              Transport
           
          </div>
          <div className=" hover:bg-blue-950 bg-slate-200 text-gray-500 hover:text-white items-center flex justify-center py-2">
         
      
              Order
           
          </div>
          <div className=" hover:bg-blue-950 bg-slate-200 hover:text-white text-gray-500 items-center flex justify-center py-2">
         
           
              Service
           
          </div>
          <div className=" hover:bg-blue-950 bg-slate-200 hover:text-white text-gray-500 items-center flex justify-center py-2">
           
              Deliavery
           
          </div>
        </div>
        <div className="flex  gap-3  my-2 ">

            <div className=" text-gray-200 bg-blue-500  px-4 py-2"> Toggle Heat Map</div>
            <div className=" text-gray-200 bg-blue-500  px-4 py-2"> Change gradiant</div>
            <div className=" text-gray-200 bg-blue-500  px-4 py-2"> Change Radius</div>
            <div className=" text-gray-200 bg-blue-500  px-4 py-2" > Change Opacity</div>
        </div>
        <Image
              src={heatmap}
              className="mt-5 w-[1230px] h-[530px]"
              objectFit="center"
              alt="heatmap"
            ></Image>
      </div>
    </>
  );
};

export default HeatMap;