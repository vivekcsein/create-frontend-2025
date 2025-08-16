"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface WaveLoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  speed?: number;
  className?: string;
}

const sizeClasses = {
  sm: { width: "w-1", height: "h-4" },
  md: { width: "w-1.5", height: "h-6" },
  lg: { width: "w-2", height: "h-8" },
};

export function WaveLoader({
  size = "md",
  color = "bg-primary",
  speed = 1,
  className,
}: WaveLoaderProps) {
  const { width, height } = sizeClasses[size];

  return (
    <div className={clsx("flex items-end gap-1", className)}>
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className={clsx("rounded-full", width, height, color)}
          animate={{
            scaleY: [0.4, 1, 0.4],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.2 / speed,
            repeat: Number.POSITIVE_INFINITY,
            delay: (index * 0.1) / speed,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
