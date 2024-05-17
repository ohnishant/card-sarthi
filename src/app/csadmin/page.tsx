import { File, ListFilter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UnreadApplicationsTable from "./UnreadApplicationsTable";
import { Suspense } from "react";
import ReadApplicationsTable from "./ReadApplicationsTable";
import { Toaster } from "@/components/ui/toaster";
import LogoutButton from "@/components/LogoutButton";

export default async function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="unread">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="read">Read</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <LogoutButton />
              </div>
            </div>
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Applications</CardTitle>
                <CardDescription>
                  Manage the applications all in one place
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TabsContent value="unread">
                  <Suspense fallback={<div>Loading...</div>}>
                    <UnreadApplicationsTable />
                  </Suspense>
                </TabsContent>
                <TabsContent value="read">
                  <Suspense fallback={<div>Loading...</div>}>
                    <ReadApplicationsTable />
                  </Suspense>
                </TabsContent>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </Tabs>
          <Toaster />
        </main>
      </div>
    </div>
  );
}
