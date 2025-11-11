import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "../components/ui/button";
import { ArrowUpDown, ExternalLink } from "lucide-react";
import type { Company } from "@/types/company";

export const columns: ColumnDef<Company>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold"
        >
          Company Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const company = row.original;
      return (
        <div className="flex items-center space-x-2">
          <div>
            <div className="font-medium">{company.name}</div>
            <div className="text-sm text-gray-500 truncate max-w-xs">
              {company.description}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "industry",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold"
        >
          Industry
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {row.getValue("industry")}
        </span>
      );
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold"
        >
          Location
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "employees",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold"
        >
          Employees
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const employees = row.getValue("employees") as number;
      return <span className="font-medium">{employees.toLocaleString()}</span>;
    },
  },
  {
    accessorKey: "founded",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold"
        >
          Founded
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "revenue",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold"
        >
          Revenue
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="font-medium text-green-600">
          {row.getValue("revenue")}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Website",
    cell: ({ row }) => {
      const company = row.original;
      return (
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(company.website, "_blank")}
          className="flex items-center space-x-1"
        >
          <ExternalLink className="h-3 w-3" />
          <span>Visit</span>
        </Button>
      );
    },
  },
];
