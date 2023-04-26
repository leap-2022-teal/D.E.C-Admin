import MainLayout from "@/components/MainLayout";
import React, { useEffect, useState } from "react";
import Modal from "@/components/categoryModal";
import Search from "@/components/Search";
import { SingleCategory } from "../components/SingleCategory";
import axios from "axios";
import { useRouter } from "next/navigation";
import SubCategoryAdd from "@/components/SubCategoryAdd";

export interface Categories {
  name: string;
  _id: string;
  parentId?: string;
  handleReload: () => void;
}
export default function Categories() {
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const filteredCategories = categories.filter((category: any) => {
    if (!category.parentId) {
      return category;
    }
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/categories`).then((res) => setCategories(res.data));
  }, []);

  function handleReload() {
    router.refresh();
  }

  return (
    <MainLayout>
      <div className=" ">
        <div>
          <div className=" flex justify-between border-solid pb-4 border-b-2 ">
            <h1 className=" font-bold">Ангилал</h1>
            <Search />
            <div className="w-[20%] flex justify-between">
              <Modal handleReload={handleReload} />
              <SubCategoryAdd handleReload={handleReload} />
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-gray-50 rounded-lg border border-gray-50 shadow-md m-5 w-[95%] ">
          <div className="">
            {filteredCategories?.map((category: Categories) => {
              const subCategories = categories.filter((subCategory: Categories) => {
                if (subCategory.parentId === category._id) {
                  return subCategory;
                }
              });
              return (
                <SingleCategory
                  handleReload={handleReload}
                  subCategories={subCategories}
                  category={category}
                  key={category._id}
                  // onDelete={handleDelete}
                />
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
