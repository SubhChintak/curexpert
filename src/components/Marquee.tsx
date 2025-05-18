
import React from "react";

interface MarqueeProps {
  messages: string[];
}

export default function Marquee({ messages }: MarqueeProps) {
  return (
    // <div className="bg-blue-950/95 dark:bg-blue-950/95 text-white py-2 overflow-hidden">
    
     <div className="bg-blue-500 dark:bg-blue-500 text-white dark:text-white py-2 overflow-hidden text-2xl">
      <div className="relative flex whitespace-nowrap animate-marquee  min-w-max">
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            <span className="mx-4 font-bold">{message}</span>
            <span className="mx-4">•</span>
          </React.Fragment>
        ))}
        {/* Duplicate for seamless infinite scroll */}
        {messages.map((message, index) => (
          <React.Fragment key={`duplicate-${index}`}>
            <span className="mx-4 font-bold">{message}</span>
            <span className="mx-4">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
