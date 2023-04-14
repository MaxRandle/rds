import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const InputVariants = cva(
  [
    "border appearance-none px-4 py-3 rounded-lg focus:outline-none focus:ring-4 w-full",

    // base classes
    "text-base-600 bg-base-50 border-base-300 focus:border-primary-400 ring-primary-200",
    "dark:text-base-300 dark:bg-base-900 dark:border-base-500 dark:focus:border-primary-400 dark:ring-primary-700",

    // invalid classes
    "invalid:text-danger-600 invalid:bg-danger-50 invalid:border-danger-300 invalid:focus:border-danger-400 invalid:ring-danger-200",
    "invalid:dark:text-danger-300 invalid:dark:bg-danger-900 invalid:dark:border-danger-500 invalid:dark:focus:border-danger-400 invalid:dark:ring-danger-700",

    // disabled classes
    "disabled:bg-base-200 dark:disabled:bg-base-800 disabled:opacity-60",

    // group classes
    "group-[]/input-group:focus:relative",
    "group-[]/input-group:rounded-none",
    "group-[]/input-group:first:ml-0",
    "group-[]/input-group:-ml-[1px]",
    "group-[]/input-group:first:rounded-l-lg",
    "group-[]/input-group:last:rounded-r-lg",

    //
  ],
  { variants: {} }
);

export type InputProps = React.ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof InputVariants>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const classes = InputVariants({});

  return <input className={twMerge(classes, className)} {...props} />;
};
