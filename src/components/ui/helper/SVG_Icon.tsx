import React from "react";
import { heartIcon, starIcon } from "@/libs/configs/config.images";

// Type Definitions
export type IconAccessType = "readonly" | "readwrite";
export type IconVariant = "rating" | "popup" | "default";

// Constants
const DEFAULT_PRIMARY_COLOR = "#DD00FF";
const DEFAULT_BG_COLOR = "transparent";

// Props Interfaces
interface IconProps {
  variant?: IconVariant;
  color?: string;
  backgroundColor?: string;
  percentage?: number; // 0–100
  path?: string;
  size?: number;
  access?: IconAccessType;
}

interface IconRenderProps {
  gradientOffset: number;
  fillColor: string;
  sideColor: string;
  svgPath: string;
  svgSize: number;
  accessType: IconAccessType;
}

// Main Component
const SVGIcon: React.FC<IconProps> = ({
  variant = "default",
  color = DEFAULT_PRIMARY_COLOR,
  backgroundColor = DEFAULT_BG_COLOR,
  percentage = 0,
  path,
  size = 256,
  access = "readonly",
}) => {
  const gradientOffset =
    percentage <= 0 ? 0 : percentage >= 100 ? 511 : (percentage * 512) / 100;

  const renderData: IconRenderProps = {
    gradientOffset,
    fillColor: color,
    sideColor: backgroundColor,
    svgPath: path ?? (variant === "popup" ? heartIcon : starIcon),
    svgSize: size,
    accessType: access,
  };

  switch (variant) {
    case "rating":
      return <RatingIcon {...renderData} />;
    case "popup":
      return <PopupIcon {...renderData} />;
    case "default":
    default:
      return <RatingIcon {...renderData} />;
  }
};

// Rating Variant
const RatingIcon: React.FC<IconRenderProps> = ({
  gradientOffset,
  fillColor,
  sideColor,
  svgPath,
  svgSize,
}) => {
  const gradientId = `gradient-${gradientOffset}-${fillColor}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={svgSize}
      height={svgSize}
      fill="none"
    >
      <path
        d={svgPath}
        fill={`url(#${gradientId})`}
        stroke={fillColor}
        strokeWidth={10}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1={gradientOffset}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fillColor} />
          <stop stopColor={sideColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Popup Variant
const PopupIcon: React.FC<IconRenderProps> = ({
  gradientOffset,
  fillColor,
  svgPath,
  svgSize,
}) => {
  const symbolId = `symbol-${gradientOffset}-${fillColor}`;

  const handleToggle = (target: EventTarget) => {
    const container = target as SVGElement;
    const [outline, fill] = Array.from(container.children) as HTMLElement[];

    const isActive = fill.style.opacity === "1";

    outline.style.stroke = isActive ? fillColor : "transparent";
    fill.style.opacity = isActive ? "0" : "1";
    fill.style.transform = isActive ? "scale(0.33)" : "none";
    fill.style.transition = isActive
      ? "all 0.33s ease"
      : "all 0.5s cubic-bezier(0.19, 2.41, 0.45, 0.94)";
  };

  return (
    <>
      <svg
        viewBox="0 0 512 512"
        width={svgSize}
        height={svgSize}
        onClick={(e) => {
          e.preventDefault();
          handleToggle(e.currentTarget);
        }}
        style={{ overflow: "visible" }}
      >
        <use
          xlinkHref={`#${symbolId}`}
          style={{
            fill: "transparent",
            stroke: fillColor,
            strokeWidth: 10,
            transition: "all 0.33s ease",
          }}
        />
        <use
          xlinkHref={`#${symbolId}`}
          style={{
            fill: fillColor,
            stroke: fillColor,
            opacity: 0,
            transform: "scale(0.33)",
            transformOrigin: "center",
          }}
        />
      </svg>

      <svg
        viewBox="0 0 512 512"
        width={svgSize}
        height={svgSize}
        style={{ display: "none" }}
      >
        <defs>
          <path id={symbolId} d={svgPath} />
        </defs>
      </svg>
    </>
  );
};

export default SVGIcon;
