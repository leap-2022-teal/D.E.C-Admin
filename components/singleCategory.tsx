import CategoryEditModal from "@/components/categoryEditModal";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

import { Categories } from "@/pages/categories";
import SingleSubCategories from "./singleSubCategories";

interface PropType {
  category: Categories | undefined;
  subCategories: any;
  handleReload: () => void;
}

export function SingleCategory({
  category,
  subCategories,
  handleReload,
}: PropType) {
  function handleDelete() {
    if (window.confirm("Aнгилал устгах уу ?")) {
<<<<<<< HEAD
      axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${category?._id} `).then((res) => {
        const { status } = res;
        if (status === 200) {
        }
      });
=======
      axios
        .delete(`http://localhost:8000/categories/${category?._id} `)
        .then((res) => {
          const { status } = res;
          if (status === 200) {
            handleReload();
          }
        });
>>>>>>> 6174e1d (sub category create)
    }
  }

  if (!category) return null;
  return (
    <>
      <div key={category._id} className=" hover:bg-gray-100 flex justify-between p-10 my-2 w-[100%] ">
        <div className=" text-gray-700 flex items-center font-bold ">{category.name}</div>

        <div>
          {subCategories.map((subCategory: any) => (
<<<<<<< HEAD
            <SingleSubCategories category={category} subCategory={subCategory} key={category._id} />
=======
            <SingleSubCategories
              handleReload={handleReload}
              category={category}
              subCategory={subCategory}
              key={category._id}
            />
>>>>>>> 6174e1d (sub category create)
          ))}
        </div>

        <div className=" flex items-center">
<<<<<<< HEAD
          <CategoryEditModal subCategories={subCategories} category={category} key={category._id} />
=======
          <CategoryEditModal
            handleReload={handleReload}
            subCategories={subCategories}
            category={category}
            key={category._id}
          />
>>>>>>> 6174e1d (sub category create)

          <button onClick={handleDelete} className=" hover:bg-gray-200 rounded-[5px] w-9 h-9 ">
            <DeleteIcon className="text-red-500 " />
          </button>
        </div>
      </div>
    </>
  );
}
