"use client";
import { getAllUnreadApplications } from "@/actions/db";
import { useState, useEffect } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { ApplicationDataType } from "@/schema";

const UnreadApplicationsTable = () => {
  const [applications, setApplications] = useState<ApplicationDataType[]>();
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchApplications() {
    setLoading(true);
    const data = await getAllUnreadApplications();
    if (!data) {
      return;
    }
    setApplications(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <>
      {loading ? (
        <div className="mx-auto w-fit text-2xl">Loading...</div>
      ) : (
        <DataTable columns={columns} data={applications || []} />
      )}
    </>
  );
};

export default UnreadApplicationsTable;
