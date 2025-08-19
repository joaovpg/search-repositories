import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
}

function Card({ children, className = "" }: Readonly<CardProps>) {
  return (
    <div className={`border border-text/10 rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export default Card;
