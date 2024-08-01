import { useState, useEffect } from "react";

const numCircles = 50000;

export default function Canvas() {
  // useDance();

  const renderSVG = () => {
    let circles = [];
    for (let i = 0; i < numCircles; i++) {
      const cx = Math.random() * 200;
      const cy = Math.random() * 200;
      const r = Math.random() * 4;
      const fill = `hsl(${Math.random() * 360}, 100%, 50%)`;
      circles.push(<circle key={i} cx={cx} cy={cy} r={r} fill={fill} />);
    }
    return circles;
  };

  return (
    <svg width="200" height="200">
      {renderSVG()}
    </svg>
  );
}

const speed = 2000;

export function useDance() {
  const [, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, speed);

    return () => clearInterval(interval);
  }, []);
}
