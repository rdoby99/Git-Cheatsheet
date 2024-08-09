import { ReactNode } from "react";

interface CommandsProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Commands({
  title,
  description,
  children,
}: CommandsProps) {
  return (
    <div className="bg-gray-700 p-4 text-white rounded-md">
      <h2 className="mb-4">{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
}
