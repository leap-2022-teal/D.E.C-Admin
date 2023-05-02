import axios from "axios";
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";

export default function SingleSubCategories({ category }: any) {
  console.log(category);
  function handleDeleteSubCategory() {
    if (category.parentId) {
      if (window.confirm("Aнгилал устгах уу ?")) {
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${category._id} `).then((res) => {
          const { status } = res;
          if (status === 200) {
            window.location.reload();
          }
        });
      }
    }
  }

  return (
    <div className=" text-gray-600 bg-gray-100 rounded-[5px] border-solid border-1 hover:bg-gray-200 mb-2 p-2 flex justify-between">
      <div className=" hover:bg-gray-300 rounded-[5px] ml-3">
        <button onClick={handleDeleteSubCategory} className=" hover:bg-gray-200 rounded-[5px] w-9 h-9 ">
          <DeleteIcon className="text-red-500 " />
        </button>
      </div>
    </div>
  );
}
