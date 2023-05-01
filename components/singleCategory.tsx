import CategoryEditModal from "@/components/categoryEditModal";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

import { Categories } from "@/pages/categories";
import SingleSubCategories from "./singleSubCategories";
import Highlighter from "react-highlight-words";
import Link from "next/link";

interface PropType {
  category: Categories | undefined;
  subCategories: any;
  handleReload: () => void;
  searchedQuery: string;
}

export function SingleCategory({ category, subCategories, handleReload, searchedQuery }: PropType) {
  function handleDelete() {
    if (window.confirm("Aнгилал устгах уу ?")) {
      axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${category?._id} `).then((res) => {
        const { status } = res;
        if (status === 200) {
          handleReload();
        }
      });
    }
  }

  if (!category) return null;
  return (
    <>
      <div key={category._id} className=" hover:bg-gray-100 flex justify-between p-10 my-2 w-[100%] ">
        <Link href={`/categories/${category._id}`}>
          <div className=" text-gray-700 flex items-center font-bold ">
            <Highlighter highlightClassName="p-0 bg-red" searchWords={[searchedQuery]} autoEscape={true} textToHighlight={category.name} />
          </div>
        </Link>

        <div>
          {subCategories.map((subCategory: any) => (
            <SingleSubCategories handleReload={handleReload} category={category} subCategory={subCategory} key={category._id} />
          ))}
        </div>

        <div className=" flex items-center">
          <CategoryEditModal handleReload={handleReload} subCategories={subCategories} category={category} key={category._id} />

          <button onClick={handleDelete} className=" hover:bg-gray-200 rounded-[5px] w-9 h-9 ">
            <DeleteIcon className="text-red-500 " />
          </button>
        </div>
      </div>
    </>
  );
}
