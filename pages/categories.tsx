import MainLayout from "@/components/MainLayout";
import React, { useEffect, useState } from "react";
import Modal from "@/components/modals/categoryModal";
import Search from "@/components/search";
import { SingleCategory } from "../components/singleCategory";
import axios from "axios";
export default function Categories() {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/categories`)
      .then((res) => setCategories(res.data));
  }, []);
  console.log(categories);
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
        <div className="overflow-hidden bg-gray-50 rounded-lg border border-gray-50 shadow-md m-5 w-[95%] pt-[100px]">
          <div className="">
            {categories?.map((category: any) => (
              <SingleCategory category={category} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
