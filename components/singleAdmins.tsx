import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import AdminEditModal from "./AdminEditModal";
interface PropType {
  admin: any;
  reload: () => void;
}
export default function SingleAdmins({ admin, reload }: PropType) {
  function handleDelete() {
    if (window.confirm("Хэрэглэгч устгах уу ?")) {
      axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/users/${admin?._id} `).then((res) => {
        const { status } = res;
        if (status === 200) {
          reload();
        }
      });
    }
  }

  return (
    <tr className="hover:bg-gray-50">
      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div className="relative h-10 w-10">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
        </div>
        <div className="text-sm">
          <div className="font-medium text-gray-700">{admin.userName}</div>
          <div className="text-gray-400">{admin.email}</div>
        </div>
      </th>
      <td className="px-6 py-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
          <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
          Active
        </span>
      </td>
      <td className="px-6 py-4">{admin.role}</td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">{admin.email}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-end gap-4">
          <AdminEditModal admin={admin} reload={reload} />
          <button onClick={handleDelete} className=" hover:bg-gray-200 rounded-[5px] w-9 h-9 ">
            <DeleteIcon className="text-red-500 " />
          </button>
        </div>
      </td>
    </tr>
  );
}
