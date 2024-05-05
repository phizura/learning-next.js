import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
    };
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email sudah terdaftar" : "");
    }
  };
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center flex-col items-center">
      <h1 className="text-[32px] mb-[10px]">Register</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-[50%] p-[20px] shadow-lg shadow-current mb-[20px]">
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
            <label htmlFor="fullname" className="">
              Fullname
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="fullname"
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
      </div>
      <p className="">
        Have An Acount? Sign In{" "}
        <Link href="/auth/login" className="text-[#23bebe] ">
          here
        </Link>
      </p>
    </div>
  );
};

export default RegisterView;
