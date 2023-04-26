import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";
import { Product } from "@/pages/products";
import SubCategorySelector from "./subCategorySelector";
import CategorySelector from "./categorySelector";
import DeleteIcon from "@mui/icons-material/Delete";

interface Sizes {
  size: number;
  stock: number;
}
interface PropType {
  product: Product | undefined;
  onEdit: () => void;
}

export default function ProductEditModal({ product, onEdit }: PropType) {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState<number>();
  const [color, setColor] = useState<string>();
  const [sizes, setSizes] = useState<Sizes[]>([{ size: 0, stock: 0 }]);
  const [showModal, setShowModal] = React.useState(false);
  const [subCategoryId, setSubCategoryId] = useState<string>();
  const [categoryId, setCategoryId] = useState<string>();
  const removeSecond = (e: any) => {
    setSizes((current) => current.filter((size) => size.size !== e));
  };

  useEffect(() => {
    if (product) {
      setName(product.name);
      setColor(product.color);
      setDetails(product.details);
      setSizes(product.sizes);
      setPrice(product.price);
      setCategoryId(product.categoryId);
      setSubCategoryId(product.subCategoryId);
    }
  }, [product]);

  function handleUpdate() {
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/products/${product?._id}`, {
        name: name,
        sizes: sizes,
        color: color,
        price: price,
        details: details,
        categoryId: categoryId,
        subCategoryId: subCategoryId,
      })
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          setShowModal(false);
          onEdit();
        }
      });
  }
  function handleAddSizes(e: any, index: number) {
    console.log(index);
    const newState = [...sizes];
    newState[index] = { size: e, stock: sizes[index].stock };
    setSizes(newState);
  }
  function handleAddStock(e: any, index: number) {
    console.log(index);
    const newState = [...sizes];
    newState[index] = { size: sizes[index].size, stock: e };
    setSizes(newState);
  }
  if (!product) return null;
  return (
    <>
      <div>
        <button onClick={() => setShowModal(true)} className=" hover:bg-gray-300 rounded-[5px] w-9 h-9 ">
          <CreateIcon className=" text-gray-600 " />
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Бүтээгдэхүүн засах</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <CategorySelector value={""} handleSelected={setCategoryId} />
                  {/* {categoryId !== subCategoryId ? null : (
                      <SubCategorySelector
                        value={""}
                        handleSelected={setSubCategoryId}
                      />
                    )} */}
                  <SubCategorySelector value={categoryId} handleSelected={setSubCategoryId} />
                  <label htmlFor="default-input" className=" mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Барааны нэр
                  </label>
                  <input
                    placeholder=""
                    type="text"
                    id=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label htmlFor="default-input" className=" mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Details
                  </label>
                  <input
                    placeholder=""
                    type="text"
                    id="default-input"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label htmlFor="default-input" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Барааны үнэ
                  </label>
                  <input
                    placeholder=""
                    type="text"
                    id="default-input"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  <label htmlFor="default-input" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Color
                  </label>
                  <input
                    placeholder=""
                    type="text"
                    id="default-input"
                    value={color}
                    onChange={(e: any) => setColor(e.target.value)}
                    className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  {sizes.map((sizes: Sizes, index: number) => {
                    return (
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div>
                          <label htmlFor="default-input" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Size
                          </label>
                          <input
                            placeholder=""
                            type="number"
                            id="default-input"
                            value={sizes.size}
                            onChange={(e: any) => handleAddSizes(e.target.value, index)}
                            className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>
                        <div className="">
                          <label htmlFor="default-input" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Stock
                          </label>
                          <input
                            placeholder=""
                            type="number"
                            id="default-input"
                            value={sizes.stock}
                            onChange={(e: any) => handleAddStock(e.target.value, index)}
                            className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>
                        <div className="mt-10">
                          <button className=" hover:bg-gray-300 rounded-[5px] w-9 h-9 " onClick={() => removeSecond(sizes.size)}>
                            <DeleteIcon className=" text-red-600" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  <button
                    onClick={() => setSizes([...sizes, { size: 0, stock: 0 }])}
                    className="bg-green-500 h-[40px] hover:bg-green-400 text-white font-bold py-2 px-4 rounded block text-sm  text-center  focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    size nemeh
                  </button>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      хаах
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded block  focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm  text-center "
                      type="button"
                      onClick={handleUpdate}
                    >
                      хадгалах
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
