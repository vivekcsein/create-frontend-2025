"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface PulseLoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  speed?: number;
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

export function PulseLoader({
  size = "md",
  color = "bg-primary",
  speed = 1,
  className,
}: PulseLoaderProps) {
  return (
    <div className={clsx("relative", sizeClasses[size], className)}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={clsx("absolute inset-0 rounded-full opacity-75", color)}
          animate={{
            scale: [0, 1],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2 / speed,
            repeat: Number.POSITIVE_INFINITY,
            delay: (index * 0.6) / speed,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
