import React, { useState } from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

function MathText({ text }) {
  const str = String(text ?? "");
  const parts = str.split(/(\$(?:[^$]+)\$)/g);

  return (
    <>
      {parts.map((part, idx) => {
        const match = part.match(/^\$(.*)\$/);

        if (match) {
          return <InlineMath key={idx} math={match[1]} />;
        }
        return (
          <span key={idx} style={{ whiteSpace: "pre-wrap" }}>
            {part}
          </span>
        );
      })}
    </>
  );
}

export default function Equation({
  equation,
  dividingArray,
  testing = false,
}) {
  const totalWidth = Array.isArray(dividingArray)
    ? dividingArray.reduce(
        (sum, part) => sum + (typeof part.width === "number" ? part.width : 0),
        0
      )
    : 0;

  const isValid =
    Array.isArray(dividingArray) &&
    dividingArray.length > 0 &&
    totalWidth === 100;

  if (!isValid) {
    return <span className="text-red-500">Wrong dividing</span>;
  }

  const [hoverIndex, setHoverIndex] = useState(null);
  const hoveredPart = hoverIndex !== null ? dividingArray[hoverIndex] : null;

  return (
    <div className="w-full min-h-[5rem] flex justify-center items-center overflow-visible">
      <div className="relative px-4 py-6 overflow-visible">
        {hoveredPart && (
          <div className="w-[20rem] md:w-[30rem] absolute -top-3 left-1/2 -translate-x-1/2 bg-page4 -translate-y-full p-3 rounded-lg duration-150 shadow-[0_2.4px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] z-30 font-typewriter">
            <div className="w-full h-full bg-page1 rounded-md p-3">
              {hoveredPart.tooltip}
            </div>
          </div>
        )}

        <div className="relative z-10 text-2xl font-typewriter text-black text-center">
          <MathText text={equation} />
        </div>

        <div className="absolute w-full h-[75%] top-[12%] inset-x-0 bottom-0 flex z-20">
          {dividingArray.map((part, index) => (
            <div
              key={index}
              style={{ width: `${part.width}%` }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={
                `h-full transition-colors cursor-pointer rounded-lg ${
                  hoverIndex === index ? "bg-page4/40" : "bg-transparent"
                }` + (testing ? " border border-page4" : "")
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
