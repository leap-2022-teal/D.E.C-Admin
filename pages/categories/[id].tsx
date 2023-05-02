import { Category } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Category {
  _id: string;
  parentId: string;
  name: string;
}

export default function CategoriesDetails() {
  const [categories, setCategories] = useState<Category[]>([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/categories?q=""&parentId=${id}`)
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div>
      {categories.map((category) => {
        return <h1 key={category._id}>{category.name}</h1>;
      })}
    </div>
  );
}
