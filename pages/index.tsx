import React, { useEffect, useState } from "react";

export default function Home() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  console.log(category);
  return (
    <div className="max-w-4xl mx-auto border-2">
      {category?.map((categories: any) => (
        <h2 key={categories._id}>{categories.name}</h2>
      ))}
    </div>
  );
}
