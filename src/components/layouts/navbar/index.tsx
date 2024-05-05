import { signIn, signOut, useSession } from "next-auth/react";
import style from "./Navbar.module.css";
import Image from "next/image";
import Script from "next/script";
const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={style.navbar}>
      <div className="text-2xl">Navbar</div>
      <div>
        <div className="flex gap-2.5 items-center">
          {data && data.user.fullname}
          {data && (
            <Image
              src={data.user.image}
              alt={data.user.fullname}
              width={100}
              height={100}
              className="w-[30px] h-[30px] rounded-[50%]"
            />
          )}
          {data ? (
            <button className={style.button} onClick={() => signOut()}>
              Sign out
            </button>
          ) : (
            <button className={style.button} onClick={() => signIn()}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
