"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../images/logo.png";
import {
  Bell,
  Settings,
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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Collapse } from "@mui/material";
import Dispatcher from "../dispatcher/page";
import Dispute from "../dispute/page";
import DisputeRide from "../disputeRide/page";
import DisputeService from "../disputeService/page";
import DisputeOrder from "../disputeOrder/page";
import HeatMap from "../heatMap/page";
import GodView from "../godView/page";
import TransportStatement from "../transportStatement/page";

const HeaderPage = () => {
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
    <div className="flex items-center justify-between  w-full  ">
      <div className="flex h-full max-h-screen flex-col gap-2 lg:w-[375px] lg:border">
        <div className=" h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 hidden lg:block">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src={logo} className="w-[50px] h-[50px]" alt=""></Image>
            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand hidden lg:block">
              Kanti_pur_Ride
            </span>
          </Link>
        </div>
      </div>
      <header className="flex w-full h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            {/* responsive */}
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
              <Image src={logo} className="w-[50px] h-[50px]" alt=""></Image>
              <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand ">
              Kanti_pur_Ride
            </span>
              </Link>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
              >
                <ShoppingCart className="h-5 w-5" />
                Dispatcher Panel
              
              </Link>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                Dispute Panel
              </Link>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Users className="h-5 w-5" />
                Members
              </Link>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <LineChart className="h-5 w-5" />
                Accounts
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        {/* search button */}
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground " />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        
        {/* profile */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full hover:shadow-lg shadow-lg"
            >
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Aashish</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* setting */}
        <Button
          variant="outline"
          size="icon"
          className=" h-8 w-8 shadow-lg hover:bg-white"
        >
          <Settings className="h-4 w-4" />
        </Button>
    
      </header>
    </div>

  );
};

export default HeaderPage;
