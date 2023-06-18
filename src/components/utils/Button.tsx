import React from "react";

interface ButtonProps {
  label: string;
  style?: string;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  label,
  style = "lime",
  className,
}) => {
  return (
    <a
      href="#"
      className={`
      ${className}
        rounded-md 
        px-3.5 
        py-2.5 
        text-sm 
        font-semibold 
        shadow-sm 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        ${
          style === "lime" &&
          "bg-lime-500 hover:bg-lime-400 focus-visible:outline-lime-500 text-white"
        }
        ${
          style === "white" &&
          "bg-gray-50 hover:bg-gray-100 focus-visible:outline-white text-slate-900"
        }
      `}
    >
      {label}
    </a>
  );
};

export default Button;
