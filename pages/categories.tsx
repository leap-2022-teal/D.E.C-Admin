import MainLayout from "@/components/MainLayout";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <MainLayout>
      {categories?.map((category: any) => (
        <div
          key={category._id}
          className=" border-slate-500 rounded-[10px] border-solid border-2  flex justify-between p-4 my-8 w-[50%]"
        >
          {category.name}
          <div className="">
            <button className="bg-amber-300 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded">
              <EditIcon />
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
    </MainLayout>
  );
}
