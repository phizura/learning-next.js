import { ProductType } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

const ProductView = ({ products }: { products: ProductType[] }) => {
  console.log(products);
  return (
    <div className="w-[100%] pt-0 p-[5%]">
      <h1 className="text-center text-[32px] font-bold">Product</h1>
      <div className="flex">
        {products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <Link href={`/product/${product.id}`} key={product.id} className="w-[25%] p-[10px]">
                <div className="">
                  <Image src={product.image} alt={product.name} width={300} height={300}/>
                </div>
                <h4 className="text-[20px] font-bold">{product.name}</h4>
                <p className="text-[grey] mt-[5px]">{product.category}</p>
                <p className="font-bold mt-[10px]">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <div className="w-[25%] p-[10px] animate-pulse">
            <div className="w-[100%] aspect-square bg-gray-400" />
            <div className="w-[100%] h-5 mt-[5px] bg-gray-400" />
            <div className="w-[100%] h-4 mt-[5px] bg-gray-400" />
            <div className="w-[100%] h-4 mt-[10px] bg-gray-400" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
