import Image from "next/image";

const Page404 = () => {
  return (
    <div className="w-[100vw] h-[100vh] text-[#6C63FF] text-4xl flex flex-col justify-center items-center">
      <Image src="/not_found.png" alt="404" width={300} height={300} className="w-[50%]" />
      <div>404 | Halaman tidak ditemukan</div>
    </div>
  );
};

export default Page404;
