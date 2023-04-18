import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import CategorySelector from "./categorySelector";
import { Value } from "sass";

export default function SubModal() {
  const [showModal, setShowModal] = React.useState(false);
  const [categoryId, setCategoryId] = useState<any>([]);

  function handleSelected(e: any) {
    setCategoryId(e);
  }
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-500 h-[40px] hover:bg-green-400 text-white font-bold py-2 px-4 rounded block text-sm  text-center  focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        <ShareIcon className="mr-2" />
        Дэд Ангилал нэмэх
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Дэд ангилал нэмэх</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <CategorySelector handleSelected={handleSelected} />
                  <div className="mb-6">
                    <label
                      htmlFor="default-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    ></label>
                    <input
                      placeholder="Дэд ангилалаа оруулана уу?"
                      type="text"
                      id="default-input"
                      className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
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
                    onClick={() => setShowModal(false)}
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
