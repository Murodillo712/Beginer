// src/components/common/Logo.tsx
import React from "react";

type LogoProps = {
  icon?: string;
  size?: number;
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ size = 48, className, icon }) => {
  return (
    <img
      src={icon ?? "/favicon.png"}
      alt="App Logo"
      width={size}
      height={size}
      className={`mx-auto ${className || ""}`}
      draggable={false}
    />
  );
};
