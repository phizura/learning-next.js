import Input from "./Input";
import Label from "./Label";

interface InputElementProps {
  name: string;
  type: string;
  placeholder: string;
  classnameinput: string;
  label: string;
}

const InputElement = ({name, type, placeholder, classnameinput,label}: InputElementProps) => {
  // const { name, type, placeholder, classnameinput,label } = props;
  return (
    <div className="flex flex-col m-[20px] mb-0">
      <Label htmlfor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        classname={classnameinput}
      />
    </div>
  );
};

export default InputElement;
