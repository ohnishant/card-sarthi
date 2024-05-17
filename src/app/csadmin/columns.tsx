"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ApplicationDataType } from "@/schema";
import { Button } from "@/components/ui/button";
import { Check, Trash2 } from "lucide-react";
import { markApplicationAsRead } from "@/actions/db";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<ApplicationDataType>[] = [
  {
    accessorKey: "id",
    header: "Application ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },
  {
    accessorKey: "checked",
    header: "Status",
    cell: ({ row }) => {
      return row.original.checked ? (
        <span className="bg-green-300 rounded-lg p-2">Checked</span>
      ) : (
        <span className="bg-yellow-200 rounded-lg p-2">Unhecked</span>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Submitted on",
    cell: ({ row }) => {
      return new Date(row.original.createdAt).toLocaleString(undefined, {
        timeZone: "Asia/Kolkata",
      });
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const application = row.original;

      return (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            className="px-1"
            onClick={() => {
              alert(`Delete pressed for  ${application.id}`);
            }}
          >
            <Trash2 className="text-red-500" />
          </Button>
          <Button
            variant="ghost"
            className="px-1"
            onClick={() => {
              console.log(`Mark as read pressed for ${application.id}`);
              markApplicationAsRead(application.id);
            }}
          >
            <Check className="text-green-500" />
          </Button>
        </div>
      );
    },
  },
];
