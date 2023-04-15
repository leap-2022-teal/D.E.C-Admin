import MainLayout from "@/components/MainLayout";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@/components/categoryModal";
import SubModal from "@/components/categorySubModal";
import CategoryEditModal from "@/components/categoryEditModal";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <MainLayout>
      <div className=" flex justify-between">
        <div className="w-[50%]">
          {categories?.map((category: any) => (
            <div
              key={category._id}
              className="  rounded-[5px] bg-gray-200 flex justify-between p-4 my-8 w-[100%]"
            >
              {category.name}
              <div className="">
                <CategoryEditModal />
                <button>
                  <DeleteIcon className="text-red-500 ml-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-around w-[40%]">
          <Modal />
          <SubModal />
        </div>
      </div>
    </MainLayout>
  );
}
