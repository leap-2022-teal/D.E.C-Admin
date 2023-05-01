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

export default function SubCategorySelector({ handleSelected, value }: Props) {
  const [subCategories, setSubCategories] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        name="subCategories"
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        hideSelectedOptions={false}
        options={subCategories
          .filter((category: Categories) => category.parentId)
          .map((category: Categories) => ({
            value: category._id,
            label: category.name,
          }))}
        onChange={(selectedOption) => handleSelected(selectedOption?.value)}
      />
    </>
  );
}
