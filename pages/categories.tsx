import MainLayout from "@/components/MainLayout";
import React, { useEffect, useState } from "react";
import Modal from "@/components/categoryModal";
import Search from "@/components/search";
import { SingleCategory } from "../components/singleCategory";
import axios from "axios";

export interface Categories {
  name: string;
  _id: string;
  parentId?: string;
}
export default function Categories() {
  const [categories, setCategories] = useState([]);
  const filteredCategories = categories.filter((category: any) => {
    if (!category.parentId) {
      return category;
    }
  });
  console.log(categories);
  console.log(filteredCategories);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/categories`)
      .then((res) => setCategories(res.data));
  }, []);

  // function handleDelete(e: any) {
  //   const newCat = categories.filter((category: any) => {
  //     if (category._id !== e._id) {
  //       return e;
  //     }
  //   });
  //   setCategories(newCat);
  // }

  return (
    <MainLayout>
      <div className=" ">
        <div>
          <div className=" flex justify-between border-solid pb-4 border-b-2 ">
            <h1 className=" font-bold">Ангилал</h1>
            <Search />
            <Modal />
          </div>
        </div>
        <div className="overflow-hidden bg-gray-50 rounded-lg border border-gray-50 shadow-md m-5 w-[95%] ">
          <div className="">
            {filteredCategories?.map((category: Categories) => {
              const subCategories = categories.filter(
                (subCategory: Categories) => {
                  if (subCategory.parentId === category._id) {
                    return subCategory;
                  }
                }
              );
              return (
                <SingleCategory
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
