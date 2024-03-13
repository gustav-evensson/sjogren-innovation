"use client";

import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
  className?: string;
  direction: "left" | "right" | "up" | "down";
  aos?: boolean;
  duration?: number;
  delay?: number;
  margin?: string;
  easing?: string;
  distance?: number;
};

export default function SlideDiv({ children, className, direction, aos = false, duration, delay, margin: m, easing, distance = 20 }: Props) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -distance : direction === "right" ? distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      {...(aos ? { whileInView: "visible" } : { animate: "visible" })}
      viewport={{ once: true, margin: m || "0px" }}
      variants={variants}
      transition={{ duration: duration || 0.5, delay: delay || 0, ease: easing || "easeInOut"}}
      className={className}
    >
      {children}
    </motion.div>
  );
}
