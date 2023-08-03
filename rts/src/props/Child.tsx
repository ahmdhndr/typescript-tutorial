import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
