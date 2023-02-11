import clsx from "clsx";

export type ButtonProps = {
  id?: string;
  type?: "button" | "submit" | "reset";
  children: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const Button = ({ id, type, children, variant = "primary", onClick }: ButtonProps) => {
  return (
    <button
      id={id}
      type={type}
      className={clsx(
        "text-center py-2 px-4 leading-1 rounded-md cursor-pointer border",
        variant === "primary" && "bg-sky-700 hover:bg-sky-700/75 border-sky-700 text-white",
        variant === "secondary" && "border-gray-600 text-gray-600"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
