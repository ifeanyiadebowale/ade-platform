import { cn } from "@/lib/utils";
import * as React from "react";

export function Panel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-paper p-6 md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
