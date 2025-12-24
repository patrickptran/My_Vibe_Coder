import { useState, useEffect } from "react";

export const useScroll = (threadhold = 10) => {
  const [isScrolled, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > threadhold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threadhold]);
  return isScrolled;
};
