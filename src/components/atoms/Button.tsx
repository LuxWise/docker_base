import React from "react";

type bgColors = "blue" | "red" | "green" | "white";
type colors = "blue" | "red" | "green" | "white" | "black";

interface buttonProps {
  bgColor: bgColors;
  color: colors;
  text: string;
  className?: string;
}

const bgColors: Record<bgColors, string> = {
  blue: "bg-sky-500",
  green: "bg-green-600",
  red: "bg-red-500",
  white: "bg-white",
};

const colors: Record<colors, string> = {
  blue: "text-sky-500",
  green: "text-green-600",
  red: "text-red-500",
  white: "text-white",
  black: "text-black",
};

const Button = ({ bgColor, color, text, className }: buttonProps) => {
  return (
    <button
      className={`${bgColors[bgColor]} ${colors[color]} ${className} min-w-12 p-2 rounded-lg`}
    >
      {text}
    </button>
  );
};

export default Button;
