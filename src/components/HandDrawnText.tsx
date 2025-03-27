'use client';

import { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Text, Line } from 'react-konva';

interface HandDrawnTextProps {
  text: string;
  className?: string;
}

const HandDrawnText = ({ text, className }: HandDrawnTextProps) => {
  const [lines, setLines] = useState<Array<{ points: number[] }>>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height
      });
    }
  }, [text]);

  const handleMouseDown = (e: any) => {
    setIsDrawing(true);
    const pos = e.target.getStage()?.getPointerPosition();
    if (pos) {
      setLines([...lines, { points: [pos.x, pos.y] }]);
    }
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    setLines([...lines.slice(0, -1), lastLine]);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div className="relative">
      <div ref={textRef} className={className} style={{ position: 'absolute', opacity: 0 }}>
        {text}
      </div>
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#42367e"
              strokeWidth={2}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation="source-over"
            />
          ))}
        </Layer>
      </Stage>
      <div className={className}>{text}</div>
    </div>
  );
};

export default HandDrawnText; 