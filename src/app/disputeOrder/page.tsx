"use client"

import * as React from "react"
import { useState, useEffect } from "react";
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
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, Search,Plus,MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    Action: 316,
    status: "success",
    email: "ken99@yahoo.com",
    name:"Ashish",
    address:"ktm",
    number:"98176822555566",
  },
  {
    id: "3u1reuv4",
    Action: 242,
    status: "success",
    email: "Abe45@gmail.com",
    name:"Amit",
    address:"Malasiya",
    number:"98176086",
  },
  {
    id: "derv1ws0",
    Action: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    name:"Suman",
    address:"Mahuwa",
    number:"9817681466",
  },
  {
    id: "5kma53ae",
    Action: 874,
    status: "success",
    email: "Silas22@gmail.com",
    name:"Balram",
    address:"Jnk",
    number:"9817682255599",
  },
  {
    id: "bhqecj4p",
    Action: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    name:"Rakesh",
    address:"Malasiya",
    number:"98176",
  },
]

export type Payment = {
  id: string
  Action: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  name:string
  address:string
  number:string
}

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
        <Button className="font-bold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
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
      )
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
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("address")}</div>,
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
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("number")}</div>,
  },
  {
    accessorKey: "Action",
    header: () => <div className="text-right">Action</div>,
    cell: ({ row }) => {
      const Action = parseFloat(row.getValue("Action"))

      // Format the Action as a dollar Action
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Action)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

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
      )
    },
  },
]

const DisputeOrder = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const searchData =(searchQuery)=>{
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
    
      }
    
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
  })
  return (
    <>
      <div className="h-fit bg-white shadow-md p-5 ">
        <div className="w-full sm:overflow-hidden">
   
      <div className="flex justify-between items-center py-4">
      <h2 className=" text-blue-700 text-2xl "> Order Dispute Reason</h2>
      <Link href="/Form"> <Button variant="ghost" size="icon" className="w-full px-3 gap-2 bg-blue-600 shadow-lg  text-white">
<Plus className="h-4 w-4 " />
Add Order Dispute Reason
            </Button>
        
        </Link>
      </div>
      <hr />
      <div className="flex justify-between">
   <div className="flex my-3 gap-3 cursor-pointer">
    <p className="py-2 px-3 text-sm text-gray-600 bg-slate-200 hover:bg-slate-300">Copy</p>
     <p className="py-2 px-3 text-sm text-gray-600 bg-slate-200 hover:bg-slate-300"> Csv </p>
     <p className="py-2 px-3 text-sm text-gray-600 bg-slate-200 hover:bg-slate-300">Pdf</p>
      <p className="py-2 px-3 text-sm text-gray-600 bg-slate-200 hover:bg-slate-300">Excel</p>

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
              <TableRow  key={headerGroup.id}>
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
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
           {/* =================================Table Header end============================================ */}
          {/* =================================Table bordy start============================================ */}
          <TableBody>
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
          </TableBody>
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
  )
}

export default DisputeOrder