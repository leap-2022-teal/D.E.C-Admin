import axios from "axios";
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

export default function SingleSubCategories({
  category,
  subCategory,
  handleReload,
}: any) {
  function handleDeleteSubCategory() {
    if (subCategory.parentId) {
      if (window.confirm("Aнгилал устгах уу ?")) {
        axios
          .delete(`http://localhost:8000/categories/${subCategory?._id} `)
          .then((res) => {
            const { status } = res;
            if (status === 200) {
              handleReload();
            }
          });
      }
    }
  }

  if (!subCategory) return null;

  return (
    <div itemType="button" className="">
      {/* {category?.map((subCategory: any) => ( */}
      <div className=" text-gray-600 bg-gray-100 rounded-[5px] border-solid border-1 hover:bg-gray-200 mb-2 p-2 flex justify-between">
        {subCategory.name}
        <div className=" hover:bg-gray-300 rounded-[5px] ml-3">
          <button onClick={handleDeleteSubCategory}>
            <ClearIcon className=" text-red-500 hover:text-red-400 " />
          </button>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}
