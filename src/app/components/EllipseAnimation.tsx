'use client';

import { useEffect, useRef } from 'react';

const EllipseAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Get the path length for animation
    const path = svg.querySelector('.ellipse-path') as SVGPathElement;
    if (!path) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;
  }, []);

  return (
    <div className="absolute top-[-75%] left-[-75%] w-[250%] h-[250%] pointer-events-none">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        className="transform -rotate-12"
      >
        <path
          className="ellipse-path"
          d="M500,250 
             a300,150 0 1,1 0,500 
             a300,150 0 1,1 20,-500"
          fill="none"
          stroke="#42367e"
          strokeWidth="4"
          style={{
            animation: 'drawAndUndrawEllipse 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          }}
        />
      </svg>
    </div>
  );
};

export default EllipseAnimation; 