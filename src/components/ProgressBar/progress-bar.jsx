import { useProgress } from "./use-progress";

export function ProgressBar({ height = "3px", backgroundColor = "#8F7E4F" }) {
  const progress = useProgress();

  return (
    <div
      className="progress-bar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: progress,
        backgroundColor: backgroundColor,
        height: height,
      }}
    />
  );
}
