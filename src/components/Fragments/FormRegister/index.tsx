import Button from "@/components/Elements/Button/Index";
import InputElement from "@/components/Elements/Input";

interface IFormRegisterProps {
  onsubmit: (event: any) => void;
  disabled: boolean;
}

const FormRegister = ({ onsubmit, disabled }: IFormRegisterProps) => {
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
          name="fullname"
          type="text"
          placeholder="Enter your fullname"
          classnameinput="p-[20px] bg-[#eee] mt-[5px]"
          label="Fullname"
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
          {disabled ? "..." : "Register"}
        </Button>
      </form>
    </>
  );
};

export default FormRegister;
