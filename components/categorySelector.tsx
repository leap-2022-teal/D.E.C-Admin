import React, { useEffect, useState } from "react";
import Select from "react-select";
interface Categories {
  name: string;
  parentId?: string;
  _id: string;
}
interface Props {
  handleSelected: (e: any) => void;
  value: any;
}

export default function CategorySelector({ handleSelected, value }: Props) {
  const [categories, setCategories] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories?q=`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        name="categories"
        options={categories
          .filter((category: Categories) => !category.parentId)
          .map((category: Categories) => ({
            value: category._id,
            label: category.name,
          }))}
        onChange={(selectedOption) => handleSelected(selectedOption?.value)}
      />
    </>
  );
}
