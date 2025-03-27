'use client';

import { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

interface HandDrawnTextProps {
  text: string;
  className?: string;
}

const HandDrawnText = ({ text, className }: HandDrawnTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [progress, setProgress] = useState(0);
  const [points, setPoints] = useState<number[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height
      });
    }
  }, [text]);

  useEffect(() => {
    // Generate points for an oval shape
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const radiusX = dimensions.width * 0.6;
    const radiusY = dimensions.height * 0.6;
    const numPoints = 100;
    const newPoints: number[] = [];

    for (let i = 0; i <= numPoints; i++) {
      const angle = (i / numPoints) * 2 * Math.PI;
      const x = centerX + radiusX * Math.cos(angle);
      const y = centerY + radiusY * Math.sin(angle);
      newPoints.push(x, y);
    }

    setPoints(newPoints);
  }, [dimensions]);

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
    <div className="relative">
      <div ref={textRef} className={className} style={{ position: 'absolute', opacity: 0 }}>
        {text}
      </div>
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <Layer>
          <Line
            points={currentPoints}
            stroke="#42367e"
            strokeWidth={3}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
            globalCompositeOperation="source-over"
            dash={[5, 5]} // Add dashed effect for more hand-drawn feel
          />
        </Layer>
      </Stage>
      <div className={className}>{text}</div>
    </div>
  );
};

export default HandDrawnText; 