import { useEffect, useState } from "react";

export const useWindowScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const getScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", getScroll);
    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  return scroll;
};
