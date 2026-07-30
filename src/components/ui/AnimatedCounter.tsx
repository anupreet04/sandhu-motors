"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedCounter({
  value,
  suffix = "",
  isYear = false,
  duration = 1.4,
}: {
  value: number;
  suffix?: string;
  isYear?: boolean;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(isYear ? value : 0);

  useEffect(() => {
    if (!inView || isYear) return;
    let start: number | null = null;
    const isFloat = !Number.isInteger(value);
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const current = progress * value;
      setDisplay(isFloat ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration, isYear]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="font-mono"
    >
      {isYear ? value : display}
      {suffix}
    </motion.span>
  );
}
