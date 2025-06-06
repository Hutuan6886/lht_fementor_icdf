import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const isWindowClient = typeof window === "object";
  const [windowWidth, setWindowWidth] = useState(
    isWindowClient ? window.innerWidth : undefined
  );

  useEffect(() => {
    function setWidth() {
      setWindowWidth(window.innerWidth);
    }

    if (isWindowClient) {
      window.addEventListener("resize", setWidth);

      return () => window.removeEventListener("resize", setWidth);
    }
  }, [isWindowClient, setWindowWidth]);

  return windowWidth;
};
