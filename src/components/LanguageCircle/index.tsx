interface LanguageCircleProps {
  color: string;
}
export function LanguageCircle({ color }: Readonly<LanguageCircleProps>) {
  return (
    <div
      className="size-5 rounded-full"
      style={{
        backgroundColor: color,
      }}
    />
  );
}

export default LanguageCircle;
