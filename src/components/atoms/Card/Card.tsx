import { merge } from "@/utils/clsx";
import { PropsWithChildren } from "react";

export type CardProps = {
  className?: string;
} & PropsWithChildren;

const Card = ({ children, className }: Readonly<CardProps>) => {
  return (
    <div
      className={merge(
        "rounded-lg border bg-card text-card-foreground shadow-sm mb-5 h-min max-w-full pt-8 pb-6 px-6 dark:border-zinc-800",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
