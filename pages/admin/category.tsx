import { useEffect, useState } from "react";

export default function Category(category: any) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/category/${category._id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return <div></div>;
}
