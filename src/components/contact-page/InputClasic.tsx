"use client";

import React, { ReactElement } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import InputMask from "react-input-mask";

interface InputProps {
  label: string;
  id: string;
  type: string;
  className?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
  required?: boolean;
}
const InputClasic: React.FC<InputProps> = ({
  label,
  id,
  type,
  className = "",
  required,
  register,
  errors,
  placeholder,
}) => {
  let bodyInput: ReactElement;

  if (type === "textarea") {
    bodyInput = (
      <textarea
        id={id}
        {...register(id, { required })}
        rows={4}
        className={`
        block w-full outline-0 rounded-md border-0 px-3.5 py-2
       text-gray-900 shadow-sm ring-1 ring-inset 
       placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
         sm:text-sm sm:leading-6
       ${errors[id] ? "ring-rose-500" : "ring-gray-300"}
       ${errors[id] ? "focus:ring-rose-500" : "focus:ring-lime-500"}
        `}
        placeholder={placeholder}
      />
    );
  } else if (type === "number") {
    bodyInput = (
      <InputMask
        id={id}
        mask="+7 (999) 999-99-99"
        maskChar={null}
        {...register(id, { required })}
        placeholder=" "
        className={`
            block w-full outline-0 rounded-md border-0 px-3.5 py-2
            text-gray-900 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset
            ${errors[id] ? "ring-rose-500" : "ring-gray-300"}
            ${errors[id] ? "focus:ring-rose-500" : "focus:ring-lime-500"}
            `}
      />
    );
  } else {
    bodyInput = (
      <input
        type={type}
        id={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className={`
            block w-full outline-0 rounded-md border-0 px-3.5 py-2
            text-gray-900 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset
            ${errors[id] ? "ring-rose-500" : "ring-gray-300"}
            ${errors[id] ? "focus:ring-rose-500" : "focus:ring-lime-500"}
            `}
      />
    );
  }

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-gray-900 text-left"
      >
        {label}
      </label>
      <div className="mt-2.5">{bodyInput}</div>
    </div>
  );
};

export default InputClasic;
