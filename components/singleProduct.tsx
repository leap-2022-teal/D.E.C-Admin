import axios from "axios";
import ProductEditModal from "./modals/productEditModal";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductSizesAdd from "./modals/productSizesAdd";
import { Product } from "@/pages/products";

interface PropType {
  product: Product | undefined;
}

export function SingleProduct({ product }: PropType) {
  function handleDelete() {
    if (window.confirm(`${product?.name}-г  бүтээгдэхүүн устгах уу ?`)) {
      axios
        .delete(`http://localhost:8000/products/${product?._id}`)
        .then((res) => {
          const { status } = res;
          if (status === 200) {
          }
        });
    }
  }
  if (!product) return null;

  return (
    <>
      <tr className="hover:bg-gray-50">
        <td>
          <img
            src={product.image.path}
            alt=""
            className=" w-32 py-3 rounded-[5px] object-cover object-center"
          />
        </td>
        <td className=" text-left">{product.name}</td>
        <td className="text-left">${product.price}</td>
        <td className="text-left">{product.sizes[0].stock}</td>
        <td className="text-left">
          <div className=" pr-20 flex justify-end gap-4">
            <ProductSizesAdd />
            <ProductEditModal product={product} />
            <button
              onClick={handleDelete}
              className=" hover:bg-gray-300 rounded-[5px] w-9 h-9 "
            >
              <DeleteIcon className=" text-red-600" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
