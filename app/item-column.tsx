import { ReactNode } from "react";
import Commands from "./commands";

interface ItemColumnProps {
  children: ReactNode;
}

export default function ItemColumn({ children }: ItemColumnProps) {
  return <div className="w-[25vw] flex flex-col gap-4">{children}</div>;
}
