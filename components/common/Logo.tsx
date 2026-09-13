"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
}

export function Logo({
  showText = true,
  size = "md",
  className = "",
  href = "/",
}: LogoProps) {
  const sizeMap = {
    sm: { img: 28, text: "text-xl", gap: "gap-2.5" },
    md: { img: 36, text: "text-2xl md:text-3xl", gap: "gap-3" },
    lg: { img: 44, text: "text-3xl md:text-4xl", gap: "gap-3.5" },
    xl: { img: 60, text: "text-4xl md:text-5xl", gap: "gap-4" },
  };

  const { img: imgSize, text: textSize, gap: gapSize } = sizeMap[size];

  const content = (
    <div className={`flex items-center ${gapSize} group ${className}`}>
      <div className="relative flex items-center justify-center shrink-0">
        <Image
          src="/logo-cnz.png"
          alt="CnZ Techno Logo"
          width={imgSize}
          height={imgSize}
          className="object-contain w-auto transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(200,243,0,0.15)]"
          style={{ height: `${imgSize}px` }}
          priority
        />
      </div>


    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
