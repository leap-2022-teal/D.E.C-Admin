import axios from "axios";
import { useEffect, useState } from "react";

export function useCategories(searchedQuery: any) {
  const [list, setList] = useState([]);

  function loadCategories(query = "") {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories?q=${query}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setList(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadCategories(searchedQuery);
  }, [searchedQuery]);

  return list;
}
