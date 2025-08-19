interface ProgressBarProps {
  value: number;
}

function ProgressBar({ value }: Readonly<ProgressBarProps>) {
  return (
    <div className="w-full bg-text/20 rounded-full h-2">
      <div
        className="bg-primary h-2 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default ProgressBar;
