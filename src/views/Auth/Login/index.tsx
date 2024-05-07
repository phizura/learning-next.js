import FormLogin from "@/components/Fragments/FormLogin";
import AuthLayouts from "@/components/layouts/AuthLayouts";
import { signIn } from "next-auth/react";
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
    <>
      <AuthLayouts
        error={error}
        textsign="Don't Have An Account? Signup "
        href="/auth/register"
        title="Login"
      >
        <FormLogin
          onsubmit={handleSubmit}
          onclick={() =>
            signIn("google", {
              redirect: false,
              callbackUrl,
            })
          }
          disabled={isLoading}
        />
      </AuthLayouts>
    </>
  );
};

export default LoginView;
