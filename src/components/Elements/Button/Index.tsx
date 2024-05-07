const Button = (props: any) => {
    const { children, disabled, onclick, classname } = props;
  return (
    <div className="flex justify-center mb-2">
      <button
        type="submit"
        className={classname}
        disabled={disabled}
        onClick={onclick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
