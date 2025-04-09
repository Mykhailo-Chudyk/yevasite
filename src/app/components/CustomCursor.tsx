'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import pero from '../images/pero.svg';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<{ x: number; y: number; alpha: number; width: number }[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const clearTrail = () => {
      // Instead of clearing immediately, start fading from the cursor position
      if (trailRef.current.length > 0) {
        const fadeInterval = setInterval(() => {
          if (trailRef.current.length > 0) {
            // Remove the first point (near cursor) instead of the last
            trailRef.current.shift();
          } else {
            clearInterval(fadeInterval);
          }
        }, 15); // Decreased from 50ms to 15ms for smoother animation
      }
    };

    const updatePosition = (e: MouseEvent) => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set cursor position without offset
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add new position to trail without offset
      trailRef.current.push({ 
        x: e.clientX,
        y: e.clientY,
        alpha: 1,
        width: 2
      });
      
      // Limit trail length
      if (trailRef.current.length > 50) { // Increased from 30 to 50 points
        trailRef.current.shift();
      }

      // Set new timeout to clear trail after 100ms of no movement
      timeoutRef.current = setTimeout(clearTrail, 100);
    };

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw trail
      if (trailRef.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(trailRef.current[0].x, trailRef.current[0].y);
        
        // Draw lines between points
        for (let i = 1; i < trailRef.current.length; i++) {
          const prevPoint = trailRef.current[i - 1];
          const currentPoint = trailRef.current[i];
          
          const alpha = currentPoint.alpha - 0.0003;
          const width = currentPoint.width - 0.001;
          
          if (alpha > 0) {
            // Create gradient for the line
            const gradient = ctx.createLinearGradient(
              prevPoint.x, prevPoint.y,
              currentPoint.x, currentPoint.y
            );
            
            gradient.addColorStop(0, `rgba(66, 54, 126, ${alpha})`);
            gradient.addColorStop(1, `rgba(66, 54, 126, ${alpha * 0.3})`);
            
            ctx.lineTo(currentPoint.x, currentPoint.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
            
            trailRef.current[i].alpha = alpha;
            trailRef.current[i].width = width;
          }
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updatePosition);
    animate();

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('resize', resizeCanvas);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100]"
      />
      <Image
        src={pero}
        width={40}
        height={40}
        alt="Custom cursor"
        className="fixed pointer-events-none z-[101]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%) rotate(15deg)',
          marginTop: '-16px',
          marginLeft: '12px',
        }}
      />
    </>
  );
};

export default CustomCursor; 