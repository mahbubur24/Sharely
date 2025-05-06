import { ButtonProps } from "@/lib/types/types";

const Button = ({ type, className = "", children, width="w-full" }:ButtonProps) => {
  return (
    <button
      type={type}
      className={`${width} bg-black hover:bg-black/80 py-4 rounded-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
