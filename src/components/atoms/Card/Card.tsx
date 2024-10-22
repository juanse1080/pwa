import { HTMLElementKeys, IntrinsicElementsProps } from "@/types";
import { merge } from "@/utils/clsx";

export type CardProps<TComponent extends HTMLElementKeys> =
  {} & IntrinsicElementsProps<TComponent>;

const Card = <TComponent extends HTMLElementKeys>({
  component: Component = "div",
  className,
  ...props
}: Readonly<CardProps<TComponent>>) => {
  return (
    <Component
      className={merge(
        "rounded-lg border bg-card text-card-foreground shadow-sm mb-5 h-min max-w-full pt-8 pb-6 px-6 dark:border-zinc-800",
        className
      )}
      {...(props as any)}
    />
  );
};

export default Card;
