import React, { useEffect, useState } from "react";

export default function CategorySelector() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <select>
        <option value="">Ангилалаа сонгоно уу?</option>
        {categories.map((category: any) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
}
