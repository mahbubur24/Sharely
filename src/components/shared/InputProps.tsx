import { InputProps } from "@/lib/types/types";

const Input = ({ type, placeholder, className = "" }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-white text-black placeholder:text-gray-500 py-4 text-lg ${className}`}
    />
  );
};

export default Input;
