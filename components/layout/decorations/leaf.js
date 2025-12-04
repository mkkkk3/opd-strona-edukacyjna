import React from "react";
import Image from "next/image";
import { useIsDesktop } from "../../../helpers/helpers";

export default function Leaf({
  count = 3,
  src = "/ornament_5.gif",
  height = 80,
  imgClass = "h-20 w-auto object-contain",
  containerClass = "relative w-full h-[3rem] my-2 bg-page-2 flex items-center justify-evenly px-8 overflow-hidden scale-[70%]",
}) {
  const isDesktop = useIsDesktop(768);

  const finalCount = isDesktop ? count : Math.max(count - 1, 1);

  const items = Array.from({ length: finalCount });

  return (
    <div className={containerClass}>
      {items.map((_, index) => (
        <Image
          key={index}
          src={src}
          alt={`Leaf ${index + 1}`}
          width={200}
          height={height}
          className={imgClass}
        />
      ))}
    </div>
  );
}
