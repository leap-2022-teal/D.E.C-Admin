import BannerAddModal from "@/components/BannerAddModal";
import { SingleBanner } from "@/components/SingleBanner";
import axios from "axios";
import { useRouter } from "next/navigation";
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
}
export default function Banner() {
  const [banner, setBanner] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get(`http://localhost:8000/banner`).then((res) => setBanner(res.data));
  }, []);
  function handleReload() {
    router.refresh();
  }
  if (!banner) return null;
  return (
    <div>
      <div className=" flex justify-between border-solid pb-4 border-b-2">
        <div>
          <div className="flex">
            {" "}
            <h2 className=" font-bold mr-48 ">Banner </h2>
            <BannerAddModal reload={handleReload} />
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-50 shadow-md m-5 w-[95%]">
        <table className="w-[100%] table-auto">
          <thead className="bg-gray-50 h-[50px]">
            <tr>
              <th className="text-left text-gray-900" scope="col">
                image
              </th>
              <th className=" text-left font-medium text-gray-900" scope="col">
                Name
              </th>
              <th className="text-left font-medium text-gray-900" scope="col">
                Details
              </th>
              <th className="text-left font-medium text-gray-900" scope="col">
                Link
              </th>

              <th className="text-left font-medium text-gray-900" scope="col"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {banner.map((banner: Banner) => (
              <SingleBanner key={banner._id} banner={banner} reload={handleReload} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
