const Input = (props: any) => {
  const { type, name, placeholder, classname } = props;
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
