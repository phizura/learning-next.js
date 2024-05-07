interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  classname: string;
  id: string;
}

const Input = ({ type, name, placeholder, classname }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={classname}
    />
  );
};

export default Input;
