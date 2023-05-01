import MainLayout from "@/components/MainLayout";
import React, { useEffect, useState } from "react";
import Modal from "@/components/categoryModal";
import { SingleCategory } from "../components/SingleCategory";
import { useRouter } from "next/navigation";
import SubCategoryAdd from "@/components/SubCategoryAdd";
import { useCategories } from "@/components/useCategories";
import { useDebounce } from "use-debounce";

export interface Categories {
  name: string;
  _id: string;
  parentId?: string;
  handleReload: () => void;
}
export default function Categories() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 300);

  const categories = useCategories(searchedQuery);

  const filteredCategories = categories.filter((category: any) => {
    if (!category.parentId) {
      return category;
    }
  });

  // useEffect(() => {
  //   axios.get(`http://localhost:8000/categories`).then((res) => setCategories(res.data));
  // }, []);

  function handleReload() {
    router.refresh();
  }

  return (
    <div className=" ">
      <div>
        <div className=" flex justify-between border-solid pb-4 border-b-2 ">
          <h1 className=" font-bold">Ангилал</h1>
          <input value={query} onChange={(e: any) => setQuery(e.target.value)} className="border-1 bg-gray-200 max-w-xs rounded-full px-4" placeholder="search.." />
          <div>
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
                searchedQuery={searchedQuery}
                // onDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
