import { useEffect, useState } from "react";

export function useIsDesktop(minWidth = 640) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth > minWidth);

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, [minWidth]);

  return isDesktop;
}
