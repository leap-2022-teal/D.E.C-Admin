import MainLayout from "@/components/MainLayout";
import AdminAddModal from "@/components/modals/adminAddModal";
import SingleAdmins from "@/components/modals/singleAdmins";
import Search from "@/components/search";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Admins() {
  const [admins, setAdmins] = useState<any>("");

  useEffect(() => {
    axios.get(`http://localhost:8000/users`).then((res) => setAdmins(res.data));
  }, []);

  if (!admins) return null;

  return (
    <MainLayout>
      <div className=" overflow-visible flex  justify-between border-solid pb-4 border-b-2">
        <h1 className=" font-bold">Админ</h1>
        <Search />
        <AdminAddModal />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className=" font-bold px-6 py-4  text-gray-900">
                Админ нэр
              </th>
              <th scope="col" className="font-bold px-6 py-4  text-gray-900">
                нөхцөл
              </th>
              <th scope="col" className="px-6 py-4 font-bold text-gray-900">
                Role
              </th>
              <th scope="col" className="px-6 py-4 font-bold text-gray-900">
                E-mail
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {admins?.map((admin: any) => (
              <SingleAdmins admin={admin} />
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
