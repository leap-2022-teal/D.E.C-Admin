import { Category } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SubCategoryAdd from "@/components/SubCategoryAdd";
import SingleSubCategories from "@/components/singleSubCategories";

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
      </div>
      <div className="flex justify-end mt-6">
        <Link href={"/categories"}>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            <KeyboardReturnIcon className="mr-2" />
            Буцах
          </button>
        </Link>
      </div>
      <div className="overflow-hidden bg-gray-50 rounded-lg border border-gray-50 shadow-md m-5 w-[95%]">
        {categories.map((category) => (
          <div className=" p-10 my-2 w-[100%] hover:bg-gray-100  text-gray-700 flex items-center font-bold justify-between">
            {category.name}
            <div className=" flex items-center">
              {/* <CategoryEditModal handleReload={handleReload} subCategories={subCategories} category={category} key={category._id} /> */}
              <SingleSubCategories category={category} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
