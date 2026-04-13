"use client"

import { useEffect, useState } from "react";

const ExtraMargin = ({children}) => {
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
      <section className={isFixed ? "mt-[90px] 2xl:mt-[125px]":""}> 
      {children}
      </section>
   );
};

export default ExtraMargin;