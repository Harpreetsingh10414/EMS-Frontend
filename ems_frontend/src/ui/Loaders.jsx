import React from "react";

export default function BouncingDotsLoader() {
  return (
    <div className="flex justify-center items-center mt-10 space-x-2">
      {[...Array(3)].map((_, i) => (
        <span
          key={i}
          className="inline-block w-4 h-4 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        ></span>
      ))}
    </div>
  );
}
