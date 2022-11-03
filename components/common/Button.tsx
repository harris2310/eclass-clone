import React, { ReactHTML, ReactNode, forwardRef } from "react";

export enum Variant {
  Primary,
  Secondary,
  Danger,
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
    [Variant.Primary]: "bg-blue-500 hover:bg-blue-100",
    [Variant.Secondary]: "bg-gray-500 hover:bg-gray-400",
    [Variant.Danger]: "bg-red-500",
  };
  return (
    <>
      <button
        className={`${colors[variant]} px-4 py-2  text-white rounded`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
Button.displayName = "Button";

export default Button;
