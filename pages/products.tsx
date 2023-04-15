import MainLayout from "@/components/MainLayout";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <MainLayout>
      <div>DEC project products</div>
    </MainLayout>
  );
}
