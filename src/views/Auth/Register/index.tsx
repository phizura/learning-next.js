import FormRegister from "@/components/Fragments/FormRegister";
import AuthLayouts from "@/components/layouts/AuthLayouts";
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
    <AuthLayouts
      error={error}
      title="Register"
      textsign="Have An Account? Signin "
      href="/auth/login"
    >
      <FormRegister onsubmit={handleSubmit} disabled={isLoading}/>
    </AuthLayouts>
  );
};

export default RegisterView;
