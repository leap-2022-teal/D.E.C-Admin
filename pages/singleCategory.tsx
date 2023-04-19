import CategoryEditModal from "@/components/modals/categoryEditModal";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { spawn } from "child_process";
import { useRouter } from "next/router";

export function SingleCategory({
  category,

  isUpdated,
  setIsUpdated,
}: any) {
  const router = useRouter();

  function handleDelete() {
    if (window.confirm("Delete?")) {
      axios
        .delete(`http://localhost:8000/categories/${category._id}`)
        .then((res) => {
          const { status } = res;
          if (status === 200) {
          }
        });
      console.log("deleted");
      setIsUpdated(!isUpdated);
    }
  }
  console.log(category);
  return (
    <>
      <div
        key={category._id}
        className=" hover:bg-gray-100 flex justify-between p-2 my-2 w-[100%]"
      >
        {category.name}

        <div className="flex">
          {category.subCategories?.map(
            (subTitle: any) => `${subTitle.title}--`
          )}
        </div>
        <div className="">
          <CategoryEditModal category={category} />

          <button onClick={handleDelete}>
            <DeleteIcon className="text-red-500 ml-4 hover:text-red-400" />
          </button>
        </div>
      </div>
    </>
  );
}
