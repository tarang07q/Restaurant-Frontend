import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  style = {},
  ...props
}) => (
  <button
    type={type}
    onClick={onClick}
    style={{
      padding: "0.75rem 2rem",
      borderRadius: "2rem",
      border: "none",
      background: "#ffb703",
      color: "#22223b",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background 0.2s",
      ...style,
    }}
    {...props}
  >
    {children}
  </button>
);

export default Button;