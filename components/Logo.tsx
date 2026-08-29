"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number | string;
  color?: string;
  showText?: boolean;
  textClass?: string;
  animated?: boolean;
  onClick?: () => void;
}

export default function Logo({
  className = "w-8 h-8",
  color = "#FF5500",
  showText = false,
  textClass = "text-white",
  animated = true,
  onClick,
}: LogoProps) {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 select-none ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${
          animated
            ? "transition-transform duration-500 hover:rotate-90"
            : ""
        } shrink-0`}
        style={{ color: color }}
      >
        {/* Central Sun Circle */}
        <circle cx="50" cy="50" r="20" fill="currentColor" />

        {/* 8 Radial Sun Capsule Rays */}
        <g stroke="currentColor" strokeLinecap="round" strokeWidth="7">
          {/* 0 deg (Top) */}
          <line x1="50" y1="8" x2="50" y2="21" />
          {/* 45 deg (Top-Right) */}
          <line x1="50" y1="8" x2="50" y2="21" transform="rotate(45 50 50)" />
          {/* 90 deg (Right) */}
          <line x1="50" y1="8" x2="50" y2="21" transform="rotate(90 50 50)" />
          {/* 135 deg (Bottom-Right) */}
          <line x1="50" y1="8" x2="50" y2="21" transform="rotate(135 50 50)" />
          {/* 180 deg (Bottom) */}
          <line x1="50" y1="8" x2="50" y2="21" transform="rotate(180 50 50)" />
          {/* 225 deg (Bottom-Left) */}
          <line x1="50" y1="8" x2="50" y2="21" transform="rotate(225 50 50)" />
          {/* 270 deg (Left) */}
          <line x1="50" y1="8" x2="50" y2="21" transform="rotate(270 50 50)" />
          {/* 315 deg (Top-Left) */}
          <line x1="50" y1="8" x2="50" y2="21" transform="rotate(315 50 50)" />
        </g>
      </svg>

      {showText && (
        <span
          className={`font-sans font-black tracking-tighter leading-none ${textClass}`}
        >
          sgr<span className="text-[#FF5500]">.</span>
        </span>
      )}
    </div>
  );
}
