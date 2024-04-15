"use client";

interface CustomProps {
  className?: string
}

export function Loader({ className }: CustomProps) {

  return (
    <div className={`spinner-border ${className}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

