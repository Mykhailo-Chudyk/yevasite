'use client';

import { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

interface AnimatedOvalProps {
  width: number;
  height: number;
  color?: string;
  strokeWidth?: number;
}

const AnimatedOval = ({ width, height, color = "#42367e", strokeWidth = 3 }: AnimatedOvalProps) => {
  const [progress, setProgress] = useState(0);
  const [points, setPoints] = useState<number[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    // Generate points for an oval shape
    const centerX = width / 2;
    const centerY = height / 2;
    const radiusX = width * 0.6;
    const radiusY = height * 0.6;
    const numPoints = 100;
    const newPoints: number[] = [];

    for (let i = 0; i <= numPoints; i++) {
      const angle = (i / numPoints) * 2 * Math.PI;
      const x = centerX + radiusX * Math.cos(angle);
      const y = centerY + radiusY * Math.sin(angle);
      newPoints.push(x, y);
    }

    setPoints(newPoints);
  }, [width, height]);

  useEffect(() => {
    const animate = () => {
      setProgress((prev) => {
        const newProgress = prev + 0.005; // Slower animation
        if (newProgress >= 1) return 0; // Reset to 0 for continuous loop
        return newProgress;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const currentPoints = points.slice(0, Math.floor(points.length * progress));

  return (
    <Stage
      width={width}
      height={height}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}
    >
      <Layer>
        <Line
          points={currentPoints}
          stroke={color}
          strokeWidth={strokeWidth}
          tension={0.5}
          lineCap="round"
          lineJoin="round"
          globalCompositeOperation="source-over"
          closed={true}
        />
      </Layer>
    </Stage>
  );
};

export default AnimatedOval; 