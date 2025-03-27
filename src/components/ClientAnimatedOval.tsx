'use client';

import dynamic from 'next/dynamic';

const AnimatedOval = dynamic(() => import('./AnimatedOval'), { ssr: false });

interface ClientAnimatedOvalProps {
  width: number;
  height: number;
  color?: string;
  strokeWidth?: number;
}

export default function ClientAnimatedOval(props: ClientAnimatedOvalProps) {
  return <AnimatedOval {...props} />;
} 