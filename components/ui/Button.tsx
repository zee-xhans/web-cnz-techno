import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "glass" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-12 py-5 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-[#c8f300] text-[#171e00] hover:shadow-[0_0_35px_rgba(200,243,0,0.45)] hover:scale-105 active:scale-95",
    glass:
      "glass-card text-white hover:bg-white/10 border border-white/20 hover:border-white/40",
    dark:
      "bg-[#171e00] text-[#c8f300] hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-xl",
    outline:
      "border border-[#c8f300]/40 text-[#c8f300] hover:bg-[#c8f300]/10",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
