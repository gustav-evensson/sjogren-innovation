"use client";

import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
  className?: string;
  aos?: boolean;
  duration?: number;
  delay?: number;
  margin?: string;
};

export default function FadeDiv({ children, className, aos = false, duration, delay, margin: m }: Props) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      {...(aos ? { whileInView: "visible" } : { animate: "visible" })}
      viewport={{ once: true, margin: m || "0px" }}
      variants={variants}
      transition={{ duration: duration || 0.3, delay: delay || 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
