import "./index.css";

interface FallbackLoaderProps {
  className?: string;
}

function FallbackLoader({ className }: Readonly<FallbackLoaderProps>) {
  return (
    <section
      data-testid="fallback-loader"
      className={`flex justify-center items-center flex-grow ${className}`}
    >
      <div className="loader" />
    </section>
  );
}

export default FallbackLoader;
