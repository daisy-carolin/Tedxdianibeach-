import { useEffect, useState } from "react";

export function useCountdown(startIso, endIso) {
  const calc = () => {
    const now = new Date(), start = new Date(startIso), end = new Date(endIso);
    if (now > end) return "Thank you for joining us";
    if (now >= start) return "Happening now";
    const ms = start - now;
    const d = Math.floor(ms / 864e5);
    const h = Math.floor((ms % 864e5) / 36e5);
    const m = Math.floor((ms % 36e5) / 6e4);
    const days = d > 0 ? `${d} day${d === 1 ? "" : "s"}, ` : "";
    return `${days}${h} hour${h === 1 ? "" : "s"}, ${m} minute${m === 1 ? "" : "s"} to go`;
  };
  const [label, setLabel] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setLabel(calc()), 1e4);
    return () => clearInterval(id);
  }, [startIso, endIso]);
  return label;
}
