"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ApplicationDataType } from "@/schema";
import { Button } from "@/components/ui/button";
import { Check, Trash2, X } from "lucide-react";
import { toggleReadStatus, deleteApplication } from "@/actions/db";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
            onClick={async () => {
              const deletedId = await deleteApplication(application.id);
              alert(`Application id: ${deletedId} deleted`);
            }}
          >
            <Trash2 className="text-red-500" />
          </Button>
          <Button
            variant="ghost"
            className="px-1"
            onClick={async () => {
              console.log(`Toggled Read status for ${application.id}`);
              const updated = await toggleReadStatus(application.id);
              toast("Application marked as read");
            }}
          >
            {application.checked ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <X className="text-orange-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mark As Unread</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Check className="text-green-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mark As Read</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {
              // <Check className="text-green-500" />
            }
          </Button>
        </div>
      );
    },
  },
];
