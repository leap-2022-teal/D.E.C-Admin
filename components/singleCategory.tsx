import CategoryEditModal from "@/components/modals/categoryEditModal";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import ClearIcon from "@mui/icons-material/Clear";

export function SingleCategory({ category }: any) {
  function handleDelete(selection: any, index: number) {
    console.log(category.subCategories);
    console.log(selection, index);

    if (window.confirm("Aнгилал устгах уу ?")) {
      axios
        .delete(`http://localhost:8000/categories/${category._id} `)
        .then((res) => {
          const { status } = res;
          if (status === 200) {
          }
        });
    }
  }

  function deleteSubCategory() {}
  return (
    <>
      <div
        key={category._id}
        className=" hover:bg-gray-100 flex justify-between p-10 my-2 w-[100%] "
      >
        <div className=" text-gray-700 flex items-center font-bold ">
          {category.name}
        </div>

        <div className="">
          {category.subCategories?.map((subTitle: any, index: number) => (
            <div className=" text-gray-600 bg-gray-100 rounded-[5px] border-solid border-1 hover:bg-gray-200 mb-2 p-2 flex justify-between">
              {subTitle.title}
              <div className=" hover:bg-gray-300 rounded-[5px] ml-3">
                <button onClick={() => handleDelete("subCategory", index)}>
                  <ClearIcon className=" text-red-500 hover:text-red-400 " />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex items-center">
          <CategoryEditModal category={category} />

          <button
            onClick={() => handleDelete("category", 0)}
            className=" hover:bg-gray-200 rounded-[5px] w-9 h-9 "
          >
            <DeleteIcon className="text-red-500 " />
          </button>
        </div>
      </div>
    </>
  );
}
