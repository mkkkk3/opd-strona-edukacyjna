import React, { useState } from "react";

export default function CodeExplain({ image, dividingArray, testing = false }) {
  const totalHeight = Array.isArray(dividingArray)
    ? dividingArray.reduce(
        (sum, part) =>
          sum + (typeof part.height === "number" ? part.height : 0),
        0
      )
    : 0;

  const isValid =
    Array.isArray(dividingArray) &&
    dividingArray.length > 0 &&
    totalHeight === 100;

  if (!isValid) {
    return <span className="text-red-500">Wrong dividing</span>;
  }

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="w-full min-h-[5rem] flex justify-center items-center overflow-visible px-5">
      <div className="relative overflow-visible">
        <div className="relative z-10 font-mono text-sm">{image}</div>

        <div className="absolute w-full h-full inset-0 flex flex-col z-20">
          {dividingArray.map((part, index) => (
            <div
              key={index}
              style={{ height: `${part.height}%` }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`relative w-full transition-colors cursor-pointer rounded-lg ${
                hoverIndex === index ? "bg-page4/40" : "bg-transparent"
              } ${testing ? "border border-page4" : ""}`}
            >
              {hoverIndex === index && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full z-30">
                  <div className="w-[20rem] md:w-[30rem] bg-page4 p-3 rounded-lg duration-150 shadow-[0_2.4px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] font-typewriter">
                    <div className="w-full h-full bg-page1 rounded-md p-3">
                      {part.tooltip}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
