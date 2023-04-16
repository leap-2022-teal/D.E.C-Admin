import MainLayout from "@/components/MainLayout";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@/components/modals/categoryModal";
import SubModal from "@/components/modals/categorySubModal";
import CategoryEditModal from "@/components/modals/categoryEditModal";
import Search from "@/components/search";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <MainLayout>
      <div className=" ">
        <div className=" flex  justify-around border-solid pb-4 border-b-2">
          <h1 className=" font-bold">Ангилал</h1>
          <Search />
          <Modal />
          <SubModal />
        </div>
        <div className="overflow-hidden bg-gray-50 rounded-lg border border-gray-50 shadow-md m-5 w-[90%]">
          <div className="">
            {categories?.map((category: any) => (
              <div
                key={category._id}
                className=" hover:bg-gray-100 flex justify-between p-2 my-2 w-[100%]"
              >
                {category.name}
                <div className="">
                  <CategoryEditModal />
                  <button>
                    <DeleteIcon className="text-red-500 ml-4 hover:text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
