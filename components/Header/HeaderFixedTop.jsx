"use client";

import { useEffect, useState } from "react";

const HeaderFixedTop = ({ children }) => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
   const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
   window.addEventListener("scroll", handleScroll);
   return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        isFixed ? "fixed left-0 top-0 z-50 w-full py-5 bg-background shadow" : "mt-[40px] 2xl:mt-[60px]"
      }
    >
      {children}
    </header>
  );
};

export default HeaderFixedTop;
