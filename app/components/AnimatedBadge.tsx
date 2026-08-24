"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  beamScale?: number;
};

export default function AnimatedBadge({
  children,
  className = "",
  beamScale = 0.11,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const update = () => {
      setSize({
        width: ref.current!.offsetWidth,
        height: ref.current!.offsetHeight,
      });
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const radius = size.height / 2;
  const beamHeight = 3;
const beamWidth = 46;
const beamBlur = 3.5;

  const w = size.width - 1;
const h = size.height - 1;
const r = radius;

const path = `
M ${r} 0.5
H ${w - r}
A ${r} ${r} 0 0 1 ${w} ${r}
V ${h - r}
A ${r} ${r} 0 0 1 ${w - r} ${h}
H ${r}
A ${r} ${r} 0 0 1 0.5 ${h - r}
V ${r}
A ${r} ${r} 0 0 1 ${r} 0.5
`;

  return (
    <div
      ref={ref}
className={`relative inline-flex overflow-hidden rounded-full shadow-sm shadow-black/20 ${className}`}>      {children}

      {size.width > 0 && (
  <>
    <svg
      className="absolute inset-0 pointer-events-none"
      width={size.width}
      height={size.height}
    >
      <path
  ref={pathRef}
  d={path}
  fill="none"
  stroke="#52525b"
  strokeWidth="1"
/>

<defs>
  <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="transparent" />

    <stop offset="18%" stopColor="#60a5fa" stopOpacity="0" />
<stop offset="42%" stopColor="#93c5fd" stopOpacity="0.9" />
<stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
<stop offset="58%" stopColor="#93c5fd" stopOpacity="0.9" />
<stop offset="82%" stopColor="#60a5fa" stopOpacity="0" />

    <stop offset="100%" stopColor="transparent" />
  </linearGradient>

  <filter id="beamGlow">
  <feGaussianBlur stdDeviation={beamBlur} />
</filter>
</defs>

<rect
  x={-beamWidth / 2}
  y={-beamHeight / 2}
  width={beamWidth}
  height={beamHeight}
  rx={beamHeight / 2}
  fill="url(#beamGradient)"
  filter="url(#beamGlow)"
  opacity="1"
>
  <animateMotion
    dur="7s"
    repeatCount="indefinite"
    rotate="auto"
    path={path}
  />
</rect>

    </svg>
  </>
)}
    </div>
  );
}