import React, { useEffect, useState } from "react";

interface Categories {
  name: string;
  parentId?: string;
  _id: string;
}
interface Props {
  handleSelected: (e: any) => void;
  value: any;
}

export default function SubCategorySelector({ handleSelected, value }: Props) {
  const [subCategories, setSubCategories] = useState([]);
  console.log(value);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories?q=`)
      .then((res) => res.json())
      .then((data) => {
        const filteredSub = data.filter((sub: any) => {
          if (sub.parentId === value) {
            return sub;
          }
        });
        setSubCategories(filteredSub);
      });
  }, [value]);

  function handleChange(e: any) {
    handleSelected(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <select onChange={handleChange} className="mb-4 border-2 rounded-[5px] border-gray-300">
        <option value="">Дэд aнгилалаа сонгоно уу?</option>
        {subCategories.map((subCategory: Categories) => {
          if (subCategory.parentId) {
            return (
              <option key={subCategory._id} value={subCategory._id} label={subCategory.name}>
                {subCategory.name}
              </option>
            );
          }
        })}
      </select>
    </>
  );
}
