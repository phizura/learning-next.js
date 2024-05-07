interface LabelProps {
  htmlfor: string;
  children: React.ReactNode;
}

const Label = ({ htmlfor, children }: any) => {
  return (
    <label htmlFor={htmlfor} className="mb-1">
      {children}
    </label>
  );
};

export default Label;
