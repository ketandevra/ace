'use client'
import { useEffect, useRef, useState } from 'react';

export default function Announcement() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="bg-blue-900 text-white py-2 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex overflow-x-hidden">
        <div 
          className={`animate-marquee whitespace-nowrap ${
            isPaused ? 'animation-play-state-paused' : ''
          }`}
        >
          <span className="mx-4">
            🎓 Admission Open for Academic Year 2024-25 | 
            📢 Last Date for B.Ed Application: July 30, 2024 | 
            🏆 NAAC Accredited Institution | 
            📚 New Course: M.Ed Program Starting from August 2024 | 
            🌟 100% Placement Record for Previous Batch
          </span>
        </div>
        <div 
          className={`absolute top-0 animate-marquee2 whitespace-nowrap ${
            isPaused ? 'animation-play-state-paused' : ''
          }`}
        >
          <span className="mx-4">
            🎓 Admission Open for Academic Year 2024-25 | 
            📢 Last Date for B.Ed Application: July 30, 2024 | 
            🏆 NAAC Accredited Institution | 
            📚 New Course: M.Ed Program Starting from August 2024 | 
            🌟 100% Placement Record for Previous Batch
          </span>
        </div>
      </div>
    </div>
  );
} 