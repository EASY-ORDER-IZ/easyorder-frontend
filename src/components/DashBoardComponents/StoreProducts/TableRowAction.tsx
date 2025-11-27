'use client';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

const TableRowAction = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-200">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="end"
        sideOffset={6}
        className="z-[9999] rounded-md border bg-white p-1 shadow-md"
      >
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>View</DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
// if you forgot the roblem that the table do not take a component that's why it didn't appeare -- also search for tanstack tables

export default TableRowAction;
