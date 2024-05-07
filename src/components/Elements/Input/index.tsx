import Input from "./Input";
import Label from "./Label";

const InputElement = (props: any) => {
  const { name, type, placeholder, classnameinput,label } = props;
  return (
    <div className="flex flex-col m-[20px] mb-0">
      <Label htmlfor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={classnameinput}
      />
    </div>
  );
};

export default InputElement;
