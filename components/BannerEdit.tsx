import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";
import CategorySelector from "./CategorySelector";
interface PropType {
  reload: () => void;
  banner: Banner;
}
interface Banner {
  _id: string;
  name: string;
  image: {
    path: string;
    width: number;
    height: number;
  };
  details: string;
  link: string;
  categoryId: string;
}

export default function BannerEdit({ banner, reload }: PropType) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState<any>("");
  const [details, setDetails] = useState<any>("");
  const [link, setLink] = useState<any>("");
  const [categoryId, setCategoryId] = useState<string>();

  useEffect(() => {
    if (banner) {
      setName(banner.name);
      setDetails(banner.details);
      setLink(banner.link);
      setCategoryId(banner.categoryId);
    }
  }, [banner]);
  function editBanner() {
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/banner/${banner._id}`, {
        name: name,
        details: details,
        link: link,
        categoryId: categoryId,
      })
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          reload();
        }
      });
  }

  return (
    <>
      <div>
        <button onClick={() => setShowModal(true)} className=" hover:bg-gray-300 rounded-[5px] w-9 h-9 ">
          <CreateIcon className=" text-gray-600 " />
        </button>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Banner add</h3>
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
                    <label className=" mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <CategorySelector value={""} handleSelected={setCategoryId} />

                    <label className=" font-bold" htmlFor="">
                      banner name{" "}
                    </label>
                    <input
                      placeholder="name"
                      type="text"
                      id="default-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className=" mt-4 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label className=" font-bold" htmlFor="">
                      details
                    </label>
                    <input
                      placeholder="details"
                      type="text"
                      id="default-input"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className=" mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />

                    <label className=" font-bold" htmlFor="">
                      link
                    </label>
                    <input
                      placeholder="link"
                      type="text"
                      id="default-input"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      className=" mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    onClick={editBanner}
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
