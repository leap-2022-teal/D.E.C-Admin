import React, { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      {categories?.map((category: any) => (
        <div key={category._id}>{category.name}</div>
      ))}
    </>
  );
}
