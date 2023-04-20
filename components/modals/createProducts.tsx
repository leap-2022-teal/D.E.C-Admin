import axios from "axios";

export function useCreateProduct() {
  function createNewProduct(data: any) {
    console.log(data);
    axios.post(`http://localhost:8000/products`, { data }).then((res) => {
      const { status } = res;
      if (status === 200) {
        alert("Success");
      }
    });
  }
  return createNewProduct;
}
