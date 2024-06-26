import Link from "next/link";

interface IAuthLayoutsProps {
  children: React.ReactNode;
  textsign: React.ReactNode;
  href: string;
  title: React.ReactNode;
  error: React.ReactNode | string;
}

const AuthLayouts = ({
  children,
  error,
  textsign,
  href,
  title,
}: IAuthLayoutsProps) => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center flex-col items-center">
        <h1 className="text-[32px] mb-[10px]">{title}</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="w-[70%] p-[20px] md:w-[35%] shadow-lg shadow-current mb-[20px]">
          {children}
        </div>
        <p className="">
          {textsign}
          <Link href={href} className="text-[#23bebe] ">
            here
          </Link>
        </p>
      </div>
    </>
  );
};

export default AuthLayouts;
