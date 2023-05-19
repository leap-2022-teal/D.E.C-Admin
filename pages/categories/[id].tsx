import { Category } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SubCategoryAdd from "@/components/SubCategoryAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import SubCategoryEditModal from "@/components/subCategoryEditModal";
import { error } from "console";

interface Category {
  _id: string;
  parentId: string;
  name: string;
}

export default function CategoriesDetails() {
  const [categories, setCategories] = useState<Category[]>([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/categories?q=""&parentId=${id}`)
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <>
      <div className="flex justify-between border-solid pb-4 border-b-2 ">
        <h1 className=" font-bold">Дэд ангилал</h1>

        <SubCategoryAdd />
        <Link href={"/categories"}>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            <KeyboardReturnIcon className="mr-2" />
            Буцах
          </button>
        </Link>
      </div>

      <div className="overflow-hidden bg-gray-50 rounded-lg border border-gray-50 shadow-md m-5 w-[95%]">
        {categories.map((category) => (
          <div className=" p-4 my-2 w-[100%] hover:bg-gray-100  text-gray-700 flex items-center font-bold justify-between" key={category._id}>
            {category.name}
            <div>
              <SubCategoryEditModal category={category} />
              <button onClick={() => handleDeleteSubCategory({ category })} className="bg-gray-50 hover:bg-gray-200 rounded-[5px] w-9 h-9">
                <DeleteIcon className="text-red-500 " />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  function handleDeleteSubCategory({ category }: any) {
    if (category.parentId) {
      if (window.confirm("Aнгилал устгах уу ?")) {
        axios
          .delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${category._id} `)
          .then((res) => {
            const { status } = res;
            if (status === 200) {
              window.location.reload();
            }
          })
          .catch((error) => {
            console.error(error.message);
          });
      }
    }
  }
}
