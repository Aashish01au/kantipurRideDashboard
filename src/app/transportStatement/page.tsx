"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  UserRound,
  Bike,
  Waypoints,
  Home,
  Plus,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    Action: 316,
    status: "success",
    email: "ken99@yahoo.com",
    name: "Ashish",
    address: "ktm",
    number: "98176822555566",
  },
  {
    id: "3u1reuv4",
    Action: 242,
    status: "success",
    email: "Abe45@gmail.com",
    name: "Amit",
    address: "Malasiya",
    number: "98176086",
  },
  {
    id: "derv1ws0",
    Action: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    name: "Suman",
    address: "Mahuwa",
    number: "9817681466",
  },
  {
    id: "5kma53ae",
    Action: 874,
    status: "success",
    email: "Silas22@gmail.com",
    name: "Balram",
    address: "Jnk",
    number: "9817682255599",
  },
  {
    id: "bhqecj4p",
    Action: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    name: "Rakesh",
    address: "Malasiya",
    number: "98176",
  },
];

export type Payment = {
  id: string;
  Action: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  name: string;
  address: string;
  number: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="font-bold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase ">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Address
          <ArrowUpDown className="ml-2 h-4 w-4 " />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("address")}</div>
    ),
  },
  {
    accessorKey: "number",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Number
          <ArrowUpDown className="ml-2 h-4 w-4 " />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("number")}</div>
    ),
  },
  {
    accessorKey: "Action",
    header: () => <div className="text-right">Action</div>,
    cell: ({ row }) => {
      const Action = parseFloat(row.getValue("Action"));

      // Format the Action as a dollar Action
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Action);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const TransportStatement = () => {
  const [date, setDate] = React.useState<Date>();
  const [searchQuery, setSearchQuery] = useState("");
  const searchData = (searchQuery) => {
    // let filterData=data;
    // if(searchQuery){
    //   filterData=data.filter(usr=>
    //     usr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     usr.email.toLowerCase().includes(searchQuery.toLowerCase())
    //     )
    //   setData(filterData)
    // }else{
    //   setData(allData);
    // }
  };

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <>
      <div className="h-fit bg-white shadow-md p-5 ">
        <div className="w-full sm:overflow-hidden">
          <div className="flex justify-between items-center py-4 ">
            <h2 className=" text-blue-800 text-2xl ">
              {" "}
              Overall Transport Statements
            </h2>
          </div>
          <hr />
              {/* ============================== list +++=======================          */}
              <div className="flex gap-3  pt-5 cursor-pointer text-sm ml-3 ">
            <p className=" hover:text-blue-800 text-blue-600">Today </p> |
            <p className=" hover:text-blue-800 text-blue-600">Yesterday </p> |
            <p className=" hover:text-blue-800 text-blue-600">Current Week </p>{" "}
            |
            <p className=" hover:text-blue-800 text-blue-600">Previous Week </p>{" "}
            |
            <p className=" hover:text-blue-800 text-blue-600">Current Month </p>{" "}
            |
            <p className=" hover:text-blue-800 text-blue-600">
              Previous Month{" "}
            </p>{" "}
            |<p className=" hover:text-blue-800 text-blue-600">Current Year </p>{" "}
            |
            <p className=" hover:text-blue-800 text-blue-600">Previous Year </p>{" "}
            |
          </div>
          {/* ================================menu============================= */}
      <div className="m-5">
      <div className="grid md:grid-cols-4 grid-cols-4 lg:grid-cols-4 gap-3 my-5">
            {/*  */}
            <div className=" ">
              <p className="p-3">Date from *</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            {/*  */}
            <div className="">
              {" "}
              <p className="p-3">Date to *</p>{" "}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            {/*  */}
            <div className="">
            <p className="p-3">Country *</p>
                <select name="" className="bg-white p-3 border w-full text-sm text-gray-400 " id="">
                    <option value="">select</option>
                    <option value="">United States</option>
                    <option value="">Nepal</option>
                    <option value="">Vaitnam</option>
                </select>
            </div>
            {/*  */}
            <div className="">
            <p className="p-3">Fleet *</p>
                <select name="" className="bg-white p-3 border w-full text-sm text-gray-400 " id="">
                    <option value="">select</option>
                    <option value="">United States</option>
                    <option value="">Nepal</option>
                    <option value="">Vaitnam</option>
                </select>
            </div>
          
          </div> 
          <div className="grid md:grid-cols-4 grid-cols-4 lg:grid-cols-4 gap-3 my-5">
            {/*  */}
            <div className="">
            <p className="p-3">Status *</p>
                <select name="" className="bg-white p-3 border w-full text-sm text-gray-400" id="">
                    <option value="">select</option>
                    <option value="">United States</option>
                    <option value="">Nepal</option>
                    <option value="">Vaitnam</option>
                </select>
            </div>
            {/*  */}
            <div className="">
            <p className="p-3">Users *</p>
                <select name="" className="bg-white p-3 border w-full text-sm text-gray-400 " id="">
                    <option value="">select</option>
                    <option value="">United States</option>
                    <option value="">Nepal</option>
                    <option value="">Vaitnam</option>
                </select>
            </div>
            {/*  */}
            <div className="">
            <p className="p-3">Provider *</p>
                <select name="" className="bg-white p-3 border w-full text-sm text-gray-400 " id="">
                    <option value="">select</option>
                    <option value="">United States</option>
                    <option value="">Nepal</option>
                    <option value="">Vaitnam</option>
                </select>
            </div>
            {/*  */}
            <div className="">
            <p className="p-3">Service type *</p>
                <select name="" className="bg-white p-3 border w-full text-sm text-gray-400 " id="">
                    <option value="">select</option>
                    <option value="">United States</option>
                    <option value="">Nepal</option>
                    <option value="">Vaitnam</option>
                </select>
            </div>
          
          </div>
      </div>
      
          {/* ====================================  Button ======================================== */}
          <div className="flex justify-center my-5">
            <div className="flex my-3 gap-3 cursor-pointer">
              <p className="py-2 px-3 text-sm text-white bg-blue-600 hover:bg-blue-700">
                Reset
              </p>
              <p className="py-2 px-3 text-sm text-white bg-blue-600 hover:bg-blue-700">
                {" "}
                Search{" "}
              </p>
            </div>
          </div>
          {/* =====================================box =============================== */}
          <div className="grid-flow-col grid gap-10 m-5">
            <div className=" flex justify-between text-center items-center border uppercase gap-5 bg-white hover:shadow-2xl shadow-md">
              <div className="p-8 ml-5 mb-5 bg-orange-400 drop-shadow-2xl">
                <UserRound className="h-8 w-8 text-white" />
              </div>
              <div className="mr-5 text-base">
                <p className=" text-sm">No. of users </p>
                <h3 className="  text-blue-800  font-semibold">30</h3>
              </div>
            </div>
            <div className=" flex justify-between text-center items-center border uppercase gap-5 bg-white hover:shadow-2xl shadow-md">
              <div className="p-8 ml-5 mb-5 bg-green-500 drop-shadow-2xl">
                <Bike className="h-8 w-8 text-white" />
              </div>
              <div className="mr-5 text-base">
                <p className=" text-sm">No. of Providers </p>
                <h3 className="  text-blue-800  font-semibold">30</h3>
              </div>
            </div>
            <div className=" flex justify-between text-center items-center border uppercase gap-5 bg-white hover:shadow-2xl shadow-md">
              <div className="p-8 ml-5 mb-5 bg-red-500 drop-shadow-2xl">
                <Waypoints className="h-8 w-8 text-white" />
              </div>
              <div className="mr-5 text-base">
                <p className=" text-sm ">No. of Fleets </p>
                <h3 className="  text-blue-800  font-semibold">30</h3>
              </div>
            </div>
          </div>
          {/* =========================pdf excell============================== */}
          <div className="flex justify-between">
            <div className="flex my-3 gap-3 cursor-pointer">
              <p className="py-2 px-3 text-sm text-gray-600 bg-slate-200 hover:bg-slate-300 ">
                Copy
              </p>
              <p className="py-2 px-3 text-sm text-gray-600 bg-slate-200 hover:bg-slate-300 ">
                {" "}
                Csv{" "}
              </p>
              <p className="py-2 px-3 text-sm text-gray-600 bg-slate-200 hover:bg-slate-300 ">
                Pdf
              </p>
              <p className="py-2 px-3 text-sm text-gray-600 bg-slate-200 hover:bg-slate-300 ">
                Excel
              </p>
            </div>
            <div className="my-2 mr-5">
              <input
                type="text"
                placeholder="Search User..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className=" p-2 border-rounded ring-1"
              />
            </div>
          </div>
          <div className="rounded-md border py-3 ">
            <Table>
              {/* =================================Table Header start============================================ */}
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              {/* =================================Table Header end============================================ */}
              {/* =================================Table bordy start============================================ */}
              {/* <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody> */}
              {/* =================================Table bordy end============================================ */}
            </Table>
          </div>
          {/* =================================Table pagination start============================================ */}
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                className="shadow-lg"
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                className="shadow-lg"
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
          {/* =================================Table pagination end============================================ */}
        </div>
      </div>
    </>
  );
};

export default TransportStatement;
