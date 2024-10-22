import { SpinIcon } from "@/components/icons";
import { HTMLElementKeys, IntrinsicElementsProps } from "@/types";
import { merge } from "@/utils/clsx";

export type ButtonProps<TComponent extends HTMLElementKeys> = {
  loading?: boolean;
} & IntrinsicElementsProps<TComponent>;

const Button = <TComponent extends HTMLElementKeys>({
  component: Component = "button",
  className,
  loading,
  children,
  ...props
}: Readonly<ButtonProps<TComponent>>) => {
  return (
    <Component
      className={merge(
        "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm text-center",
        "px-5 py-2.5 me-2 mb-2",
        "focus:outline-none focus:ring-4 focus:ring-blue-300",
        "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        className
      )}
      {...(props as any)}
    >
      {loading && <SpinIcon className="-ml-1 mr-3 h-5 w-5 animate-spin" />}
      {children}
    </Component>
  );
};

export default Button;
