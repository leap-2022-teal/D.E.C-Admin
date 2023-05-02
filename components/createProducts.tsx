import axios from "axios";

export function useCreateProduct() {
  function createNewProduct(data: any) {
    console.log(data);
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, { data }).then((res) => {
      const { status } = res;
      if (status === 200) {
        alert("Success");
      }
    });
  }
  return createNewProduct;
}
