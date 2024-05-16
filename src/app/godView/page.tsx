import React from "react";500
import { Search, UserRound, CirclePlus } from "lucide-react";
import Image from "next/image";
import godView from "../images/heatmap.png";
import { Skeleton } from "@/components/ui/skeleton"
const GodView = () => {
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

            <div className=" bg-gray-200 hover:bg-gray-300 px-4 py-2"> Enroute to Pickup</div>
            <div className=" bg-gray-200 hover:bg-gray-300 px-4 py-2"> Reached Pickup</div>
            <div className=" bg-gray-200 hover:bg-gray-300 px-4 py-2"> Journey Started</div>
            <div className=" bg-gray-200 hover:bg-gray-300 px-4 py-2" > Available</div>
            <div className=" bg-gray-200 hover:bg-gray-300 px-4 py-2" > All</div>
        </div>
        <div className="grid grid-flow-col grid-cols-3 gap-3 pt-3  ">
          <div className=" bg-slate-100 ">
            <p className="text-sm ml-3 mt-3 ">All</p>
            <div className="flex items-center space-x-4 px-3 py-3">
    <Image src={godView}  className="h-12 w-12 rounded-full"/>
      <div className="space-y-2">
        <p className="h-4 w-[250px]" >Provide demo</p>
        <p className="h-4 w-[200px]" >98124*******</p>
      </div>
    </div>
    <div className="flex items-center space-x-4 px-3 py-3">
    <Image src={godView}  className="h-12 w-12 rounded-full"/>
      <div className="space-y-2">
        <p className="h-4 w-[250px]" >Provide demo</p>
        <p className="h-4 w-[200px]" >98124*******</p>
      </div>
    </div>
    <div className="flex items-center space-x-4 px-3 py-3">
    <Image src={godView}  className="h-12 w-12 rounded-full"/>
      <div className="space-y-2 text-sm">
        <p className="h-4 w-[250px]" >Provide demo</p>
        <p className="h-4 w-[200px]" >98124*******</p>
      </div>
    </div>
    <div className="flex items-center space-x-4 px-3 py-3">
    <Image src={godView}  className="h-12 w-12 rounded-full"/>
      <div className="space-y-2 text-sm">
        <p className="h-4 w-[250px]" >Provide demo</p>
        <p className="h-4 w-[200px]" >98124*******</p>
      </div>
    </div>
    <div className="flex items-center space-x-4 px-3 py-3">
    <Image src={godView}  className="h-12 w-12 rounded-full"/>
      <div className="space-y-2 text-sm">
        <p className="h-4 w-[250px]" >Provide demo</p>
        <p className="h-4 w-[200px]" >98124*******</p>
      </div>
    </div>
    <div className="flex items-center space-x-4 px-3 py-3">
    <Image src={godView}  className="h-12 w-12 rounded-full"/>
      <div className="space-y-2 text-sm">
        <p className="h-4 w-[250px]" >Provide demo</p>
        <p className="h-4 w-[200px]" >98124*******</p>
      </div>
    </div>

          </div>
          <div className="col-span-2 ">
            <Image
              src={godView}
              className="w-[770px] h-[500px] pt-3"
              objectFit="center"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default GodView;