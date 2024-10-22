import { merge } from "@/utils/clsx";
import React from "react";

export type TextFieldProps = {
  label?: string;
  value: string;
  type?: string;
  name?: string;
  error?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({
  label,
  value,
  onChange,
  error,
  className,
  required,
  ...props
}: Readonly<TextFieldProps>) => {
  return (
    <div className={merge(`w-full`, className)}>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
          {required && "*"}
        </label>
      )}
      <input
        value={value}
        onChange={onChange}
        className={merge(
          "block w-full px-3 py-1 ",
          "border border-gray-300 rounded-lg shadow-sm",
          "focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
          { "border-red-500": error, "border-gray-300": !error }
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextField;
