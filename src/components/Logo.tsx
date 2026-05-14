'use client';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'default', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const textColor = variant === 'white' ? 'text-white' : 'text-slate-900';
  const accentColor = variant === 'white' ? 'text-emerald-400' : 'text-emerald-500';

  return (
    <span className={`font-bold ${sizeClasses[size]} tracking-tight`}>
      <span className={accentColor}>Cat</span>
      <span style={{ letterSpacing: '0.01em' }}>&thinsp;</span>
      <span className={textColor}>Insurance</span>
      <span className={accentColor}>.co.nz</span>
    </span>
  );
}
