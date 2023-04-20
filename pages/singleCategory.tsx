import CategoryEditModal from "@/components/modals/categoryEditModal";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useRouter } from "next/router";
import ClearIcon from "@mui/icons-material/Clear";

export function SingleCategory({
  category,
}: // isUpdated,
// setIsUpdated,
any) {
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
      // console.log("deleted");
      // setIsUpdated(!isUpdated);
    }
  }

  return (
    <>
      <div
        key={category._id}
        className=" hover:bg-gray-100 flex justify-between p-2 my-2 w-[100%]"
      >
        <div className=" flex items-center ">{category.name}</div>

        <div className="">
          {category.subCategories?.map((subTitle: any) => (
            <div className=" bg-gray-100 rounded-[5px] border-solid border-1 hover:bg-gray-200 mb-2 p-2 flex justify-between">
              {subTitle.title}
              <div>
                <button>
                  <ClearIcon className=" text-red-500 hover:text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex items-center">
          <CategoryEditModal category={category} />

          <button onClick={handleDelete}>
            <DeleteIcon className="text-red-500 ml-4 hover:text-red-400" />
          </button>
        </div>
      </div>
    </>
  );
}
