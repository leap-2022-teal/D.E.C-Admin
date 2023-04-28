import React, { useState } from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import axios from "axios";
interface PropType {
  reload: () => void;
}
export default function AdminAddModal({ reload }: PropType) {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [role, setRole] = useState<any>("");

  function createUsers() {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        userName: userName,
        email: email,
        role: role,
        password: password,
      })
      .then((res) => {
        const { status } = res;

        if (status === 200) {
          setShowModal(false);
          setUserName("");
          setEmail("");
          setPassword("");
          setRole("");
          reload();
        }
      });
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
        <GroupAddIcon className="mr-2" />
        Админ нэмэх
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Админ нэмэх</h3>
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
                    <label className=" font-bold" htmlFor="">
                      Админ нэр
                    </label>
                    <input
                      placeholder="Админ нэрээ оруулна уу?"
                      type="text"
                      id="default-input"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className=" mt-4 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label className=" font-bold" htmlFor="">
                      E-mail
                    </label>
                    <input
                      placeholder="Мэйлээ оруулна уу?"
                      type="text"
                      id="default-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className=" mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />

                    <select onChange={(e) => setRole(e.target.value)} className="mt-4 mb-4 border-2 rounded-[5px] border-gray-300" id="">
                      <option value="">Role</option>
                      <option>Admin</option>
                      <option>Moderator</option>
                    </select>
                    <br></br>
                    <label className=" font-bold" htmlFor="">
                      Нууц үг
                    </label>
                    <input
                      placeholder="Нууц үг ээ оруулна уу?"
                      type="password"
                      id="default-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    onClick={createUsers}
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
