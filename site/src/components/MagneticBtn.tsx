import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from 'react';

interface MagneticBtnProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  accent?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export const MagneticBtn = ({
  children,
  className = '',
  style,
  accent = false,
  onClick,
  type = 'button',
}: MagneticBtnProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const node = ref.current;
    if (!node) return;
    const r = node.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    node.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    node.style.setProperty('--x', `${e.clientX - r.left}px`);
    node.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <button
      ref={ref}
      type={type}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`btn lg magnetic cta-follow ${accent ? 'accent' : 'primary'} ${className}`}
      style={style}
    >
      <span className="blob" />
      {children}
    </button>
  );
};
