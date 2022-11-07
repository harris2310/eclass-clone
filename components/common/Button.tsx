import React, { ReactHTML, ReactNode, forwardRef } from "react";

export enum Variant {
  Primary,
  Secondary,
  Danger,
  Google,
}

const Button = ({
  children,
  variant,
  className,
  ...rest
}: {
  children: ReactNode;
  variant: Variant;
  className?: string;
  [key: string]: any;
}) => {
  const colors = {
    [Variant.Primary]: "bg-blue-500 text-white hover:bg-blue-100",
    [Variant.Secondary]: "bg-gray-500 text-white hover:bg-gray-400",
    [Variant.Danger]: "bg-red-500 text-white",
    [Variant.Google]: "bg-white text-black border border hover:bg-gray-100",
  };
  return (
    <>
      <button
        className={`${colors[variant]} ${className} px-4 py-2 rounded`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
Button.displayName = "Button";

export default Button;
