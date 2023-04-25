import MainLayout from "@/components/MainLayout";
import ProductAddModal from "@/components/modals/productAddModal";

import Search from "@/components/search";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SingleProduct } from "@/components/singleProduct";

export interface Stock {
  size: number;
  stock: number;
}
export interface Product {
  name: string;
  details: string;
  price: number;
  color: string;
  categoryId: string;
  subCategoryId: string;
  sizes: Stock[];
  image: {
    path: string;
    width: number;
    height: number;
  };
  _id: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products`)
      .then((res) => setProducts(res.data));
  }, []);
  console.log(products);

  return (
    <MainLayout>
      <div>
        <div className=" flex justify-between border-solid pb-4 border-b-2">
          <h2 className=" font-bold ">Бараа бүтээгдэхүүн</h2>
          <Search />
          <ProductAddModal />
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-50 shadow-md m-5 w-[95%]">
          <table className="w-[100%] table-auto">
            <thead className="bg-gray-50 h-[50px]">
              <tr>
                <th className=" w-40 text-gray-900" scope="col"></th>
                <th
                  className=" text-left font-medium text-gray-900"
                  scope="col">
                  Бүтээгдэхүүн
                </th>
                <th className="text-left font-medium text-gray-900" scope="col">
                  Үнэ
                </th>
                <th
                  className=" w-40 text-left font-medium text-gray-900"
                  scope="col">
                  size
                </th>
                <th
                  className="  text-left font-medium text-gray-900"
                  scope="col">
                  Нөөц
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {products?.map((product: Product) => (
                <SingleProduct product={product} key={product._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
