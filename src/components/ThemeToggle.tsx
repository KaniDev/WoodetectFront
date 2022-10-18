import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="mt-8"></div>;
  return (
    <div>
      <DarkModeSwitch
        checked={theme !== "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        sunColor="white"
        moonColor="black"
        size={32}
      />
    </div>
  );
}
