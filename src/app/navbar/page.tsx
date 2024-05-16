"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Collapse } from "@mui/material";
import {
  Home,
  ChevronDown,
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
  SmilePlus,
  UserRound,
  FolderCog,
  PersonStanding,
  BusFront,
} from "lucide-react";

const NavbarPage = () => {

  const router = useRouter();
  const pathname= usePathname();

  const [isCollapseDispute, setIsCollappseDispute] = React.useState(false);

  const handleCollappseDispute = () => {
    setIsCollappseDispute(!isCollapseDispute);
  };
  const [isCollapseRole, setIsCollappseRole] = React.useState(false);

  const handleCollappseRole = () => {
    setIsCollappseRole(!isCollapseRole);
  };

  const [isCollapseAccount, setIsCollappseAccount] = React.useState(false);

  const handleCollappseAccount = () => {
    setIsCollappseAccount(!isCollapseAccount);
  };
  const [isCollapsePayrolls, setIsCollappsePayrolls] = React.useState(false);

  const handleCollappsePayrolls = () => {
    setIsCollappsePayrolls(!isCollapsePayrolls);
  };
  const [isCollapseRating, setIsCollappseRating] = React.useState(false);

  const handleCollappseRating = () => {
    setIsCollappseRating(!isCollapseRating);
  };
  return (
   
    <div className=" w-[300px] overflow-y-scroll h-screen">
      
      <nav className="grid items-start px-2 text-sm font-medium mt-3 lg:px-4  ">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  shadow-xl"
        >
          <div className=" bg-gradient-to-tl  from-purple-700 to-blue-500 mr-2 flex items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 ">
            {" "}
            <Home className=" h-4 w-4 text-white " />
          </div>

          <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft font-semibold uppercase text-gray-800">
            Admin Dashboard
          </span>
        </Link>
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all uppercase font-semibold mr-2 mt-4 p-2.5">
          Dashboard
        </div>

        <Link
          href="dispatcher"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <Car className="h-4 w-4" />
            </Button>
            <p className="ml-5">Dispatcher Panel</p>{" "}
          </div>
        </Link>
        {/* Dispute Pannel start */}
        <Link
          onClick={handleCollappseDispute}
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <Bike className="h-4 w-4" />
            </Button>
            <p className="ml-5">Dispute Panel</p>{" "}
          </div>

          <div className="">
            {" "}
            {isCollapseDispute ? (
              <ChevronUp className="h-4 w-4 " />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
        </Link>
        {/*  sub menu start */}
        <Collapse in={isCollapseDispute} timeout="auto" unmountOnExit >
          
          <Link
         
            href="dispute"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Dispute Reason
          </Link>
          <Link
            href="disputeRide"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Ride Dispute Requests
          </Link>
          <Link
            href="disputeService"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Service Dispute Requests
          </Link>
          <Link
            href="disputeOrder"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Order Dispute Requests
          </Link>
        </Collapse>
        {/* sub menu end */}
        {/* Dispute panel end */}
        <Link
          href="heatMap"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <MapPinned className="h-4 w-4" />
            </Button>
            <p className="ml-5">Heat Map</p>{" "}
          </div>
        </Link>
        <Link
          href="godView"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <p className="ml-5">God &aposs View</p>{" "}
          </div>
        </Link>
        {/* =============================================================  members  ================================================================================ */}
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all uppercase font-semibold mr-2 mt-4 p-2.5">
          Members
        </div>
        {/* Roles start */}
        <Link
          onClick={handleCollappseRole}
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <SmilePlus className="h-4 w-4" />
            </Button>
            <p className="ml-5">Roles</p>{" "}
          </div>

          <div className="">
            {" "}
            {isCollapseRole ? (
              <ChevronUp className="h-4 w-4 " />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
        </Link>
        {/*  sub menu start */}
        <Collapse in={isCollapseRole} timeout="auto" unmountOnExit>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Roles Types
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Administrator
          </Link>
        </Collapse>
        {/* sub menu end */}
        {/* Role  end */}
        <Link
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <UserRound className="h-4 w-4" />
            </Button>
            <p className="ml-5">Users</p>{" "}
          </div>
        </Link>
        <Link
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <Bike className="h-4 w-4" />
            </Button>
            <p className="ml-5">Providers</p>{" "}
          </div>
        </Link>
        <Link
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <Ship className="h-4 w-4" />
            </Button>
            <p className="ml-5">Fleet Owners</p>{" "}
          </div>
        </Link>
        <Link
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <BusFront className="h-4 w-4" />
            </Button>
            <p className="ml-5">Dispatcher Manager</p>{" "}
          </div>
        </Link>
        <Link
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <FolderCog className="h-4 w-4" />
            </Button>
            <p className="ml-5">Account Manager</p>{" "}
          </div>
        </Link>
        <Link
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <PersonStanding className="h-4 w-4" />
            </Button>
            <p className="ml-5">Dispute Manager</p>{" "}
          </div>
        </Link>
        {/* =======================================================  Accounts  ================================================================================ */}
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all uppercase font-semibold mr-2 mt-4 p-2.5">
          Accounts
        </div>
        <Link
          onClick={handleCollappseAccount}
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <Landmark className="h-4 w-4" />
            </Button>
            <p className="ml-5">Statements</p>{" "}
          </div>

          <div className="">
            {" "}
            {isCollapseAccount ? (
              <ChevronUp className="h-4 w-4 " />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
        </Link>
        {/*  sub menu start */}
        <Collapse in={isCollapseAccount} timeout="auto" unmountOnExit>
          <Link
            href="transportStatement"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Transport Statement
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Services Statement
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Orders Statement
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            User Statement
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Provider Statement
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Admin Statement
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Fleet Statement
          </Link>
        </Collapse>
        {/* sub menu end */}
        {/* Account end */}
        {/* Payrol start */}
        <Link
          onClick={handleCollappsePayrolls}
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <FileBadge className="h-4 w-4" />
            </Button>
            <p className="ml-5">Payrolls</p>{" "}
          </div>

          <div className="">
            {" "}
            {isCollapsePayrolls ? (
              <ChevronUp className="h-4 w-4 " />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
        </Link>
        {/*  sub menu start */}
        <Collapse in={isCollapsePayrolls} timeout="auto" unmountOnExit>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Zones
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Payroll
          </Link>
        </Collapse>
        {/* sub menu end */}
        {/* pay rolls end */}
        {/*  ========================================Details=====================================================*/}
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all uppercase font-semibold mr-2 mt-4 p-2.5">
          Details
        </div>
        {/*  */}
        <Link
          onClick={handleCollappseRating}
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <Star className="h-4 w-4" />
            </Button>
            <p className="ml-5">Rating & Reviews</p>{" "}
          </div>

          <div className="">
            {" "}
            {isCollapseRating ? (
              <ChevronUp className="h-4 w-4 " />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
        </Link>
        {/*  sub menu start */}
        <Collapse in={isCollapseRating} timeout="auto" unmountOnExit>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            User Rating
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-transparent px-3 py-2 text-gray-400 transition-all hover:bg-white hover:text-black "
          >
            <Dot size={30} />
            Provider Rating
          </Link>
        </Collapse>
        {/* ============================================Offer========================================= */}
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all uppercase font-semibold mr-2 mt-4 p-2.5">
          Offer
        </div>
        <Link
          href="#"
          className="flex justify-between bg-transparent items-center gap-3 rounded-lg  px-3 py-2 text-gray-800 transition-all  hover:text-black "
        >
          <div className="flex items-center">
            {" "}
            <Button
              variant="outline"
              size="icon"
              className=" h-8 w-8 shadow-lg hover:bg-white"
            >
              <Sparkles className="h-4 w-4" />
            </Button>
            <p className="ml-5">Promocodes</p>{" "}
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default NavbarPage;
