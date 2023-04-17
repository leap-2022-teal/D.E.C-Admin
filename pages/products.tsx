import MainLayout from "@/components/MainLayout";
import ProductAddModal from "@/components/modals/productAddModal";
import ProductEditModal from "@/components/modals/productEditModal";
import Search from "@/components/search";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
                  scope="col"
                >
                  Бүтээгдэхүүн
                </th>
                <th className="text-left font-medium text-gray-900" scope="col">
                  Үнэ
                </th>
                <th
                  className=" w-40 text-left font-medium text-gray-900"
                  scope="col"
                >
                  Нөөц
                </th>
                <th
                  className="text-left font-medium text-gray-900"
                  scope="col"
                ></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {products?.map((product: any) => (
                <>
                  <tr className="hover:bg-gray-50">
                    <td>
                      <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
                        alt=""
                        className=" w-32 py-3 rounded-[5px] object-cover object-center"
                      />
                    </td>
                    <td className=" text-left">{product.name}</td>
                    <td className="text-left">{product.price}</td>
                    <td className="text-left">{product.stock}</td>
                    <td className="text-left">
                      <div className=" pr-20 flex justify-end gap-4">
                        <ProductEditModal />
                        <DeleteIcon className=" text-red-600 hover:text-red-300" />
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
