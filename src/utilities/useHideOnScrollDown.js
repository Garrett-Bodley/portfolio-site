import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useHideOnScrollDown = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const dbScrollY = useDebounce(scrollY, 250);

  const handleScroll = useCallback(() => {
    const cur = window.scrollY;
    setIsVisible(dbScrollY > cur || cur < 10);
    setScrollY(cur);
  }, [dbScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dbScrollY, handleScroll]);

  return isVisible
};
