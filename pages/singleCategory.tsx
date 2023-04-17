import CategoryEditModal from "@/components/modals/categoryEditModal";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useRouter } from "next/router";

export function SingleCategory({
  category,
  onDelete,
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

  return (
    <div
      key={category._id}
      className=" hover:bg-gray-100 flex justify-between p-2 my-2 w-[100%]"
    >
      {category.name}
      <div className="">
        <CategoryEditModal />

        <button onClick={handleDelete}>
          <DeleteIcon className="text-red-500 ml-4 hover:text-red-400" />
        </button>
      </div>
    </div>
  );
}
