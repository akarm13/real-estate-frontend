type Props = {
  children: React.ReactNode;
};

export const ErrorMessage = ({ children }: Props) => {
  return <div className="text-red-600 text-sm">{children}</div>;
};
