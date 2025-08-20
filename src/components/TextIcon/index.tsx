import type { ReactNode } from "react";

interface TextIconsProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

function TextIcon({
  children,
  icon,
  title,
  className = "text-text/70",
}: Readonly<TextIconsProps>) {
  return (
    <div className={`flex items-center gap-2 ${className}`} title={title}>
      {icon}
      <span>{children}</span>
    </div>
  );
}

export default TextIcon;
