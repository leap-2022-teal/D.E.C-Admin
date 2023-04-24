import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";

export default function SingleSubCategory({ categoryId, subCategory }: any) {
  function handleDeleteSubCategory(index: any) {
    if (categoryId) {
      console.log(categoryId);
    }
    console.log("id", categoryId, " subCat:", subCategory._id);
    axios
      .put(`http://localhost:8000/categories/${categoryId}`, {
        deletedSubCategory: subCategory._id,
      })
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          console.log("success");
          //   setShowModal(false);
        }
      });
  }

  return (
    <div className=" text-gray-600 bg-gray-100 rounded-[5px] border-solid border-1 hover:bg-gray-200 mb-2 p-2 flex justify-between">
      {subCategory.title}
      <div className=" hover:bg-gray-300 rounded-[5px] ml-3">
        <button onClick={handleDeleteSubCategory}>
          <ClearIcon className=" text-red-500 hover:text-red-400 " />
        </button>
      </div>
    </div>
  );
}
