"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const events = [
  {
    year: "2013–2017",
    text: "🇺🇸 Grew independent during my school years in the United States",
    position: "top",
  },
  {
    year: "2017–2019, 2021–2023",
    text: "🇯🇵 Discovered my passion while completing my bachelor's degree in Tokyo",
    position: "top",
  },
  {
    year: "2019–2021",
    text: "🎖 Served in the Military Police, gaining leadership and discipline",
    position: "right",
  },
  {
    year: "2023–present",
    text: "🇩🇪 Now building my career as an Android Developer in Hamburg",
    position: "bottom",
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    const newPoints = events.map((_, i) => {
      const p = path.getPointAtLength((length / (events.length - 1)) * i);
      return { x: p.x, y: p.y };
    });

    setPoints(newPoints);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-40 min-h-[800px] bg-black text-white"
    >
      {/* SVG */}
      <svg
        className="absolute left-0 top-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
      >
        {/* base line */}
        <path
          d="M100 150 C 400 100, 700 200, 900 150 S 1100 350, 1000 450 500 500 200 450"
          stroke="#444"
          strokeWidth="2"
        />

        {/* glowing animated line */}
        <motion.path
          ref={pathRef}
          d="M100 150 C 400 100, 700 200, 900 150 S 1100 350, 1000 450 500 500 200 450"
          stroke="white"
          strokeWidth="2"
          style={{ pathLength }}
          className="drop-shadow-[0_0_8px_white]"
        />

        {/* dots */}
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="6"
            fill="white"
            initial={{ scale: 0.5, opacity: 0.4 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          />
        ))}
      </svg>

      {/* labels */}
      {points.map((p, i) => {
        const event = events[i];

        let style: React.CSSProperties = {
          left: p.x,
          top: p.y,
        };

        if (event.position === "top")
          style.transform = "translate(-50%, -120%)";

        if (event.position === "bottom")
          style.transform = "translate(-50%, 40px)";

        if (event.position === "left")
          style.transform = "translate(-120%, -50%)";

        if (event.position === "right")
          style.transform = "translate(40px, -50%)";

        return (
          <motion.div
            key={i}
            className="absolute w-[240px] text-sm text-zinc-400"
            style={style}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <p>
              <span className="font-semibold text-white">{event.year}</span>
              <br />
              {event.text}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
}
