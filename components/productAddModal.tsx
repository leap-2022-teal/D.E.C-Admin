import React, { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CategorySelector from "./CategorySelector";
import { useCreateProduct } from "./CreateProducts";
import SubCategorySelector from "./SubCategorySelector";
import Color from "./ColorSelector";

interface Sizes {
  size: number;
  stock: number;
}
interface PropType {
  onEdit: () => void;
}

export default function ProductAddModal({ onEdit }: PropType) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState<number>();
  const [color, setColor] = useState<string>();
  const [sizes, setSizes] = useState<Sizes[]>([{ size: 0, stock: 0 }]);
  const [categoryId, setCategoryId] = useState();
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState();
  const [subCategoryId, setSubCategoryId] = useState();
  const createNewProduct = useCreateProduct();

  // const { refresh }: any = RefreshRouter();

  async function handleFileUpload(event: any) {
    setUploading(true);
    const imageFile = event.target.files[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload-image`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
        setUploading(false);
      });
  }

  function handleSubmit() {
    createNewProduct({
      name,
      details,
      price,
      color,
      categoryId,
      sizes,
      image,
      subCategoryId,
    });
    onEdit();
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
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
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="mb-6">
                    <CategorySelector value={""} handleSelected={setCategoryId} />
                    {/* {categoryId !== subCategoryId ? null : (
                      <SubCategorySelector
                        value={""}
                        handleSelected={setSubCategoryId}
                      />`
                    )} */}
                    <SubCategorySelector value={categoryId} handleSelected={setSubCategoryId} />

                    <label htmlFor="default-input" className=" mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                    <label htmlFor="default-input" className=" mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Color
                    </label>
                    <Color />
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <label htmlFor="default-input" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Size
                        </label>
                        <input
                          placeholder=""
                          type="number"
                          id="default-input"
                          value={sizes[0]?.size}
                          onChange={(e: any) => setSizes([{ size: e.target.value, stock: sizes[0].stock }])}
                          className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="default-input" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Stock
                        </label>
                        <input
                          placeholder=""
                          type="number"
                          id="default-input"
                          value={sizes[0]?.stock}
                          onChange={(e: any) => setSizes([{ size: sizes[0].size, stock: e.target.value }])}
                          className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <input type="file" name="image" onChange={handleFileUpload} />

                      {uploading && (
                        <div className="spinner-border" role="status">
                          <svg
                            aria-hidden="true"
                            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
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
                    onClick={() => setShowModal(false)}
                  >
                    хаах
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded block  focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm  text-center "
                    type="button"
                    onClick={handleSubmit}
                  >
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
