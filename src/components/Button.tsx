import clsx from "clsx";
import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center font-semibold rounded-full transition",

        // 🔹 Variants
        variant === "primary" &&
          "bg-red-500 text-white hover:bg-red-600",

        variant === "secondary" &&
          "bg-gray-200 text-gray-800 hover:bg-gray-300",

        variant === "danger" &&
          "bg-red-600 text-white hover:bg-red-700",

        variant === "ghost" &&
          "bg-transparent text-red-500 hover:bg-red-50",

        // 🔹 Sizes
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",

        // 🔹 States
        (disabled || loading) &&
          "opacity-60 cursor-not-allowed",

        className
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
