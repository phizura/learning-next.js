import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        // kirim email dan password
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or password incorrect");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Email or password incorrect");
    }
  };
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center flex-col items-center">
      <h1 className="text-[32px] mb-[10px]">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-[35%] p-[20px] shadow-lg shadow-current mb-[20px]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col m-[20px] mb-0">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="p-[10px] bg-[#eee] mt-[5px]"
            />
          </div>
          <div className="flex flex-col m-[20px] mb-0">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="p-[10px] bg-[#eee] mt-[5px]"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-black flex hover:bg-[#23bebe] hover:text-black justify-center w-[100%] p-[10px] m-5 mb-0 mt-5"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
        <button
          onClick={() =>
            signIn("google", {
              redirect: false,
              callbackUrl,
            })
          }
          className="w-[100%] p-[10px] m-0 text-center"
        >
          Sign In With Google Account
        </button>
      </div>
      <p className="">
        Don{"'"}t have an account? signup{" "}
        <Link href="/auth/register" className="text-[#23bebe] ">
          here
        </Link>
      </p>
    </div>
  );
};

export default LoginView;
