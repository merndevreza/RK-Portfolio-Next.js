"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-3 w-full rounded-full bg-primary/20", className)}
    {...props}
  >
    <div className="overflow-x-hidden h-full w-full flex-1 rounded-full">
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all  "
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
    <span
      style={{ left: `${(value -1) || 0}%` }}
      className={`w-[20px] h-[20px] inline-block rounded-full border-2 border-primary bg-offwhite absolute z-40 top-1/2 -translate-y-1/2`}
    ></span>
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
