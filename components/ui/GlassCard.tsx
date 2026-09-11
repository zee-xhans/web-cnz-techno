import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export function GlassCard({
  children,
  className = "",
  interactive = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`${
        interactive ? "glass-card-interactive" : "glass-card"
      } rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
