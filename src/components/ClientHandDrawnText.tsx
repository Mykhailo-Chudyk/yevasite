'use client';

import dynamic from 'next/dynamic';

const HandDrawnText = dynamic(() => import('./HandDrawnText'), { ssr: false });

interface ClientHandDrawnTextProps {
  text: string;
  className?: string;
}

export default function ClientHandDrawnText({ text, className }: ClientHandDrawnTextProps) {
  return <HandDrawnText text={text} className={className} />;
} 