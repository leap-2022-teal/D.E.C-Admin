import axios from "axios";
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
export default function SingleSubCategories({ category }: any) {
  //   const [subCategories, setSubCategories] = useState([category]);

  //   useEffect(() => {
  //     setSubCategories(category);
  //   }, []);

  console.log(category);

  function handleDeleteSubCategory() {
    if (category.parentId) {
      if (window.confirm("Aнгилал устгах уу ?")) {
        axios
          .delete(`http://localhost:8000/categories/${category?._id} `)
          .then((res) => {
            const { status } = res;
            if (status === 200) {
              console.log("deleted");
            }
          });
      }
    }
  }

  if (!category) return null;
  return (
    <div className="">
      {/* {category?.map((subCategory: any) => ( */}
      <div className=" text-gray-600 bg-gray-100 rounded-[5px] border-solid border-1 hover:bg-gray-200 mb-2 p-2 flex justify-between">
        {category.parentId ? category.name : ""}
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
