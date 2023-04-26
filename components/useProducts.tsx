import axios from "axios";
import { useEffect, useState } from "react";

export function useProducts(searchedQuery: any) {
  const [list, setList] = useState([]);

  function loadProducts(query = "") {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?q=${query}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setList(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadProducts(searchedQuery);
  }, [searchedQuery]);

  return list;
}
