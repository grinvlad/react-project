import { useEffect, useState } from "react";

export function useProgress() {
  const [progress, setProgress] = useState("0%");

  useEffect(() => {
    function handleScroll() {
      setProgress(getNewPercent());
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return progress;
}

function getNewPercent() {
  const scrolled = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percentageOfScrolled = ((scrolled / scrollable) * 100).toFixed(2);
  return `${percentageOfScrolled}%`;
}
