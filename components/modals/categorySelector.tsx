import React, { useEffect, useState } from "react";

export default function CategorySelector({ handleSelected }: any) {
  const [categories, setCategories] = useState([]);
  // const [selected, setSelected] = useState<any>();

  useEffect(() => {
    fetch(`http://localhost:8000/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  function handleChange(e: any) {
    handleSelected(e.target.value);
  }
  return (
    <>
      <select
        onChange={handleChange}
        className="mb-4 border-2 rounded-[5px] border-gray-300"
      >
        <option value="">Ангилалаа сонгоно уу?</option>
        {categories.map((category: any) => (
          <option key={category._id} value={category._id} label={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
}
