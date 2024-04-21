import { fetcher } from "@/libs/swr/fetcher";
import ProductView from "@/views/Product/main";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";



const ProductPage = () => {
  // kiri getter / unmount , kanan setter / mount
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((res) => setProducts(res.data));
  // }, []);

  return <ProductView products={isLoading ? [] : data.data} />;
};

export default ProductPage;
