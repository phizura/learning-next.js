import { ProductType } from "@/types/product.type";
import Image from "next/image";

const DetailProductView = ({ product }: { product: ProductType }) => {
  return (
    <>
      <h1 className="text-center text-[24px]">Detail Product</h1>
      <div key={product.id} className="w-[25%] p-[10px] mt-0 m-auto">
        <div className="">
          <Image src={product.image} alt={product.name} width={300} height={300}/>
        </div>
        <h4 className="text-[20px] font-bold">{product.name}</h4>
        <p className="text-[grey] mt-[5px]">{product.category}</p>
        <p className="font-bold mt-[10px]">
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </>
  );
};

export default DetailProductView;
