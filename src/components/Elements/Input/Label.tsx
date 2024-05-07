const Label = (props: any) => {
  const { htmlfor, classname, children } = props;
  return (
    <label htmlFor={htmlfor} className="mb-1">
      {children}
    </label>
  );
};

export default Label;
