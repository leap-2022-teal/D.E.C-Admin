import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CategorySelector from "./categorySelector";
import { useCreateProduct } from "./createProducts";
import { useQuery } from "react-query";

export default function ProductAddModal() {
  // const createProduct = useCreateProduct({da});
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState();
  const { createNewProduct }: any = useCreateProduct();

  async function handleFileUpload(event: any) {
    setUploading(true);
    const imageFile = event.target.files[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    await fetch(`http://localhost:8000/upload-image`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
        setUploading(false);
      });
  }
  console.log({
    name,
    details,
    price,
    color,
    categoryId,
    size,
  });

  function handleSubmit() {
    createNewProduct({
      name,
      details,
      price,
      color,
      categoryId,
      size,
    });
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
        <AddCircleOutlineIcon className=" mr-2" />
        Бүтээгдэхүүн нэмэх
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Бүтээгдэхүүн нэмэх</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="mb-6">
                    <CategorySelector
                      value={""}
                      handleSelected={setCategoryId}
                    />
                    <label
                      htmlFor="default-input"
                      className=" mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Барааны нэр
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id="default-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label
                      htmlFor="default-input"
                      className=" mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                    <label
                      htmlFor="default-input"
                      className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Барааны үнэ
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id="default-input"
                      value={price}
                      onChange={(e) => Number(setPrice(e.target.value))}
                      className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />

                    <label
                      htmlFor="default-input"
                      className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Color
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id="default-input"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {/* <label
                      htmlFor="default-input"
                      className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Size
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id="default-input"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    /> */}
                    <div>
                      <input
                        type="file"
                        name="image"
                        onChange={handleFileUpload}
                      />

                      {uploading && (
                        <div className="spinner-border" role="status"></div>
                      )}

                      {image && <img src={image} width="100" alt="" />}
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    хаах
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded block  focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm  text-center "
                    type="button"
                    onClick={handleSubmit}>
                    хадгалах
                  </button>
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
