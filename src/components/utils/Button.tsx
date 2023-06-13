import React from "react";

interface ButtonProps {
  label: string;
}
const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <a
      href="#"
      className="rounded-md bg-lime-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
    >
      {label}
    </a>
  );
};

export default Button;
