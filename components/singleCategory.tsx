import CategoryEditModal from "@/components/modals/categoryEditModal";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useState } from "react";

import { Categories } from "@/pages/categories";
import SingleSubCategories from "./singleSubCategories";

interface PropType {
  category: Categories | undefined;
  subCategories: any;
}

export function SingleCategory({ category, subCategories }: PropType) {
  console.log(category);
  function handleDelete() {
    if (window.confirm("Aнгилал устгах уу ?")) {
      axios
        .delete(`http://localhost:8000/categories/${category?._id} `)
        .then((res) => {
          const { status } = res;
          if (status === 200) {
          }
        });
    }
  }

  if (!category) return null;
  return (
    <>
      <div
        key={category._id}
        className=" hover:bg-gray-100 flex justify-between p-10 my-2 w-[100%] "
      >
        <div className=" text-gray-700 flex items-center font-bold ">
          {category.name}
        </div>

        <div>
          {subCategories.map((subCategory: any) => (
            <SingleSubCategories
              category={category}
              subCategory={subCategory}
              key={category._id}
            />
          ))}
        </div>

        <div className=" flex items-center">
          <CategoryEditModal category={category} key={category._id} />

          <button
            onClick={handleDelete}
            className=" hover:bg-gray-200 rounded-[5px] w-9 h-9 "
          >
            <DeleteIcon className="text-red-500 " />
          </button>
        </div>
      </div>
    </>
  );
}
