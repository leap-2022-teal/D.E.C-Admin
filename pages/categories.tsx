import MainLayout from "@/components/MainLayout";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@/components/modals/categoryModal";
import SubModal from "@/components/modals/categorySubModal";
import CategoryEditModal from "@/components/modals/categoryEditModal";
import Search from "@/components/search";
import axios from "axios";
import { SingleCategory } from "./singleCategory";
export default function Categories() {
  const [categories, setCategories] = useState<any>([]);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  // function loadList() {

  // }
  console.log(categories);

  useEffect(() => {
    fetch(`http://localhost:8000/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [isUpdated]);

  function handleDelete() {
    console.log("sfdssf");
  }

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
              <SingleCategory
                category={category}
                // onDelete={loadList}
                isUpdated={isUpdated}
                setIsUpdated={setIsUpdated}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
