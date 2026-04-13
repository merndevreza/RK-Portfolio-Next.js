"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ButtonPrimary = ({ className, children, ...props }) => {
  return (
    <Button
      className={cn(
        `text-lg xl:text-[21px] text-white rounded-[5px] px-8 h-[40px] lg:h-[52px] ${className} `
      )}
      {...props}
    > 
      {children}
    </Button>
  );
};

export default ButtonPrimary;
