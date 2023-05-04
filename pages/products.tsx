import MainLayout from "@/components/MainLayout";
import ProductAddModal from "@/components/ProductAddModal";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { SingleProduct } from "@/components/SingleProduct";
import { useRouter } from "next/navigation";
import { useProducts } from "@/components/useProducts";
import CategorySelector from "@/components/CategorySelector";
import axios from "axios";

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
  brand: string;
  image: {
    path: string;
    width: number;
    height: number;
  };
  _id: string;
}
interface Category {
  _id: string;
  parentId: string;
  name: string;
}

export default function Products() {
  // const [products, setProducts] = useState<Product[]>();s
  const [query, setQuery] = useState<string>();
  const [searchedQuery]: any = useDebounce(query, 300);
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState<string>("");
  const products = useProducts({ searchedQuery, categoryId });

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories?q=`).then((res) => {
      setCategories(res.data);
    });
  }, []);
  function handleReload() {
    router.refresh();
  }

  return (
    <div>
      <div className=" flex justify-between border-solid pb-4 border-b-2">
        <div>
          <div className="flex">
            {" "}
            <h2 className=" font-bold mr-48 ">Бараа бүтээгдэхүүн</h2>
            <CategorySelector handleSelected={setCategoryId} value={""} />
          </div>
        </div>
        <div>
          <input value={query} onChange={(e: any) => setQuery(e.target.value)} className="border-1 bg-gray-200 max-w-xs rounded-full p-2 mr-48" placeholder="search.." />
          <ProductAddModal reload={handleReload} />
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-50 shadow-md m-5 w-[95%]">
        <table className="w-[100%] table-auto">
          <thead className="bg-gray-50 h-[50px]">
            <tr>
              <th className=" w-40 text-gray-900" scope="col">
                image
              </th>
              <th className=" text-left font-medium text-gray-900" scope="col">
                Бүтээгдэхүүн
              </th>
              <th className="text-left font-medium text-gray-900" scope="col">
                Category
              </th>
              <th className="text-left font-medium text-gray-900" scope="col">
                Үнэ
              </th>
              <th className="text-left font-medium text-gray-900" scope="col">
                size
              </th>
              <th className="text-left font-medium text-gray-900" scope="col">
                Нөөц
              </th>

              <th className="text-left font-medium text-gray-900" scope="col"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {products?.map((product: Product) => (
              <SingleProduct product={product} key={product._id} reload={handleReload} searchedQuery={searchedQuery} categories={categories} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
