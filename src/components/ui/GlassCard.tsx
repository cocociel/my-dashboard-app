import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = '',
}: GlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-blue-50/10 bg-gradient-to-br from-blue-50/10 to-blue-50/5 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md ${className} `}
    >
      {children}
    </div>
  );
}
