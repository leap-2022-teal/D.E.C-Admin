import CategoryEditModal from "@/components/modals/categoryEditModal";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useState } from "react";

import { Categories } from "@/pages/categories";

interface PropType {
  category: Categories | undefined;
}

export function SingleCategory({ category }: PropType) {
  const [showModal, setShowModal] = useState(false);

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

  // function handleDeleteSubCategory() {
  //   if (category?._id) {
  //     console.log(category);
  //   }
  //   axios
  //     .put(
  //       `http://localhost:8000/categories/${category.subCategories[0]._id}`,
  //       {
  //         // subCategories: subCategories,
  //       }
  //     )
  //     .then((res) => {
  //       console.log(category?._id);
  //       const { status } = res;
  //       if (status === 200) {
  //         setShowModal(false);
  //       }
  //     });
  // }

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

        {/* <div className="">
          {category.subCategories?.map((subTitle: SubCategories) => (
            <div className=" text-gray-600 bg-gray-100 rounded-[5px] border-solid border-1 hover:bg-gray-200 mb-2 p-2 flex justify-between">
              {subTitle.title}
              <div className=" hover:bg-gray-300 rounded-[5px] ml-3">
                <button onClick={handleDeleteSubCategory}>
                  <ClearIcon className=" text-red-500 hover:text-red-400 " />
                </button>
              </div>
            </div>

          ))}
        </div> */}

        <div className=" flex items-center">
          <CategoryEditModal category={category} />

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
