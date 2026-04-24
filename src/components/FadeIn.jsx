import { useInView } from '../hooks/useInView';

const EASE = 'cubic-bezier(0.16,1,0.3,1)';

const getInitialStyle = (direction, distance = 32) => {
  const map = {
    up:    { transform: `translateY(${distance}px) skewY(1.5deg) scale(0.96)`, filter: 'blur(6px)', opacity: 0 },
    down:  { transform: `translateY(-${distance}px) scale(0.97)`,              filter: 'blur(4px)', opacity: 0 },
    left:  { transform: `translateX(-${distance}px) skewX(1deg) scale(0.98)`,  filter: 'blur(4px)', opacity: 0 },
    right: { transform: `translateX(${distance}px) skewX(-1deg) scale(0.98)`,  filter: 'blur(4px)', opacity: 0 },
    none:  { transform: 'none',        filter: 'blur(0px)', opacity: 0 },
    scale: { transform: 'scale(0.88)', filter: 'blur(10px)', opacity: 0 },
  };
  return map[direction] ?? map.up;
};

export const FadeIn = ({ children, delay = 0, direction = 'up', distance, className = '' }) => {
  const [ref, inView] = useInView(0.08);
  const initial = getInitialStyle(direction, distance);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    inView ? 1 : initial.opacity,
        transform:  inView ? 'none' : initial.transform,
        filter:     inView ? 'blur(0px)' : initial.filter,
        transition: `opacity 700ms ${EASE} ${delay}ms, transform 900ms ${EASE} ${delay}ms, filter 700ms ${EASE} ${delay}ms`,
        willChange: 'transform, opacity, filter',
      }}
    >
      {children}
    </div>
  );
};
