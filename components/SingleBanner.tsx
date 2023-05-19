import Highlighter from "react-highlight-words";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import BannerEdit from "./BannerEdit";
import { useEffect, useState } from "react";
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
  position: string;
}
export interface Categories {
  name: string;
  _id: string;
  parentId?: string;
}
interface PropType {
  banner: Banner;
  reload: () => void;
  categories: Categories[];
}
export function SingleBanner({ banner, reload, categories }: PropType) {
  function handleDelete() {
    if (window.confirm(`${banner?.name}-г  устгах уу ?`)) {
      axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/banner/${banner?._id}`).then((res) => {
        const { status } = res;
        if (status === 200) {
          reload();
        }
      });
    }
  }
  if (!banner) return null;
  return (
    <>
      <tr className="hover:bg-gray-50">
        <td>
          <img src={banner.image.path} alt="" className=" w-32 py-3 rounded-[5px] object-cover object-center" />
        </td>
        <td className=" text-left font-bold">{banner.name}</td>

        <td className="text-left">{banner.details}</td>

        <td className="text-left">{banner.link}</td>
        <td className="text-left">
          {categories.map((category: any) => {
            if (category._id === banner.categoryId) {
              return <div key={category._id}>{category.name}</div>;
            }
          })}
        </td>
        <td className="text-left">{banner.position}</td>
        <td className="text-left">
          <div className=" pr-20 flex justify-end gap-4">
            <BannerEdit banner={banner} key={banner._id} reload={reload} />

            <button onClick={handleDelete} className=" hover:bg-gray-300 rounded-[5px] w-9 h-9 ">
              <DeleteIcon className=" text-red-600" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
