import { ProductType } from "@/types/product.type";
import ProductView from "@/views/Product/main";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <>
      <ProductView products={products} />
    </>
  );
};

export default ProductPage;

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/product");
    const respon = await res.json();

    return {
        props: {
            products: respon.data
        }
    }
}