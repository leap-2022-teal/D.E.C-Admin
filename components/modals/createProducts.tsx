import axios from "axios";
import { useEffect, useState } from "react";

type createNewProduct = () => ({ data }: any) => void;

export function useCreateProduct() {
  function createNewProduct(data: any): void {
    axios.post(`http://localhost:8000/products`, { data }).then((res) => {
      const { status } = res;
      if (status === 200) {
        alert("Success");
      }
    });
  }
  return createNewProduct;
}
