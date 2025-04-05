import React, { useEffect, useState } from 'react';

const Loader = ({
  radius = 125,
  onLoaded,
}: {
  radius?: number;
  onLoaded?: () => void;
}) => {
  const [progress, setProgress] = useState(0);

  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const duration = 5000;
    const intervalTime = 50;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev + increment >= 100) {
          clearInterval(interval);
          onLoaded?.();
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={'flex items-center justify-center relative'}
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#fff"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#E4229C"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${radius} ${radius})`}
          style={{ transition: 'stroke-dashoffset 50ms linear' }}
        />
      </svg>
      <div className="absolute font-bold text-[52px]">
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default Loader;
