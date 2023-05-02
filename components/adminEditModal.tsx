import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

interface PropType {
  admin: any;
  reload: () => void;
}
export default function AdminEditModal({ admin, reload }: PropType) {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [role, setRole] = useState<any>("");

  useEffect(() => {
    setUserName(admin.userName);
    setEmail(admin.email);
    setPassword(admin.password);
    setRole(admin.role);
  }, []);
  console.log(userName, email, password, role);
  function handleUpdate() {
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/users/${admin._id}`, {
        userName: userName,
        email: email,
        password: password,
        role: role,
      })
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          setEmail("");
          setShowModal(false);
          setPassword("");
          setRole("");
          setUserName("");
          reload();
        }
      });
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className=" hover:bg-gray-200 rounded-[5px] w-9 h-9 ">
        <EditIcon />
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Ангилал засах</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                {/*body*/}

                <div className="relative p-6 flex-auto">
                  <span className=" font-bold p">Админ нэр</span>
                  <div className="mb-6 mt-4">
                    <input
                      placeholder=""
                      type="text"
                      id=""
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                      className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <select value={role} onChange={(e) => setRole(e.target.value)} className="mt-4 mb-4 border-2 rounded-[5px] border-gray-300" id="">
                    <option></option>
                    <option>Admin</option>
                    <option>Moderator</option>
                  </select>
                  <span className=" font-bold ">E-mail</span>
                  <div className="mb-6 mt-4">
                    <input
                      placeholder=""
                      type="text"
                      id=""
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <span className=" font-bold ">Password</span>
                  <div className="mb-6 mt-4">
                    <input
                      placeholder=""
                      type="text"
                      id=""
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
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
                    onClick={handleUpdate}
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
