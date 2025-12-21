import React, { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 30;
    const totalIncrements = duration / incrementTime;
    const increment = end / totalIncrements;

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <span className="text-text-700 text-h2 font-poppins">{count.toLocaleString()}+</span>;
};

export default Counter;
