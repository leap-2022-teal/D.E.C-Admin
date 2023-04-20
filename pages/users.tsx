import MainLayout from "@/components/MainLayout";
import Search from "@/components/search";
import React from "react";

export default function Users() {
  return (
    <MainLayout>
      <div>
        <div className=" flex  justify-around border-solid pb-4 border-b-2">
          <h1 className=" font-bold">Users</h1>
          <Search />
        </div>
      </div>
    </MainLayout>
  );
}
