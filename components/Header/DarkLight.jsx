"use client";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const DarkLight = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const Icon = isDark ? SunIcon : MoonIcon;

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variant="text"
      size="icon"
      aria-label="Toggle theme"
    >
      <Icon size={16} className="h-[1.2rem] w-[1.2rem] transition-opacity " />
    </Button>
  );
};

export default DarkLight;
