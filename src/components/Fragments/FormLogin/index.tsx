import Button from "@/components/Elements/Button/Index";
import InputElement from "@/components/Elements/Input";

interface IFormLoginProps {
  onsubmit: (event: any) => void;
  disabled: boolean;
  onclick: () => void;
}

const FormLogin = ({ onsubmit, disabled, onclick }: IFormLoginProps) => {
  return (
    <>
      <form onSubmit={onsubmit}>
        <InputElement
          name="email"
          type="email"
          placeholder="Example@gmail.com"
          classnameinput="p-[20px] bg-[#eee] mt-[5px]"
          label="Email"
        />
        <InputElement
          name="password"
          type="password"
          placeholder="********"
          classnameinput="p-[20px] bg-[#eee] mt-[5px]"
          label="Password"
        />
        <Button
          disabled={disabled}
          classname="text-white bg-black flex hover:bg-[#23bebe] hover:text-black justify-center w-full p-[10px] m-5 mb-0 mt-5"
        >
          {disabled ? "..." : "Login"}
        </Button>
      </form>
      <Button onclick={onclick} className="w-[100%] p-[10px] m-0 text-center">
        Sign In With Google Account
      </Button>
    </>
  );
};

export default FormLogin;
