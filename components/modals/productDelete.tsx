import axios from "axios";

export function useDeleteProducts() {
  function handleDelete({ products }: any) {
    if (window.confirm("бүтээгдэхүүн устгах уу ?")) {
      axios
        .delete(`http://localhost:8000/products/${products._id}`)
        .then((res) => {
          const { status } = res;
          if (status === 200) {
          }
        });
    }
  }
  return handleDelete;
}
