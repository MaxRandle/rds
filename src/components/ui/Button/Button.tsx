import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";

const buttonClasses = cva(
  [
    "font-semibold tracking-wider border rounded-full shadow-sm",

    "group-[]/button-group:px-4",
    "group-[]/button-group:rounded-none",
    "group-[]/button-group:shadow-none",
    "group-[]/button-group:first:rounded-l-full",
    "group-[]/button-group:last:rounded-r-full",
    "group-[]/button-group:first:pl-5",
    "group-[]/button-group:last:pr-5",
    "group-[]/button-group:hover:relative",
    "group-[]/button-group:focus-visible:relative",
  ],
  {
    variants: {
      /**
       * @summary specifies the background and text colors
       */
      intent: {
        primary: [
          "text-base-50",
          "bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600",
          "border-primary-600 hover:border-primary-700 dark:border-primary-700 dark:hover:border-primary-600",
        ],
        secondary: [
          "text-base-900 dark:text-base-50",
          "bg-base-50 hover:bg-base-100 dark:bg-base-900 dark:hover:bg-base-800",
          "border-base-300 hover:border-base-400 dark:border-base-600 hover:dark:border-base-500",
        ],
        destructive: [
          "text-base-50",
          "bg-danger-600 hover:bg-danger-700 dark:bg-danger-700 dark:hover:bg-danger-600",
          "border-danger-700 hover:border-danger-800",
        ],
      },
      /**
       * @summary specifies size of the button
       */
      size: {
        md: "px-5 py-2 text-md",
        lg: "px-8 py-3 text-lg",
      },
      disabled: {
        true: [
          "opacity-60 pointer-events-none",
          "text-base-900 dark:text-base-50",
          "bg-base-300 dark:bg-base-600 hover:bg-base-300 dark:hover:bg-base-600",
          "border-base-300 dark:border-base-600 hover:border-base-300 dark:hover:border-base-600",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonClasses>;

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  disabled,
  ...props
}) => {
  const classes = buttonClasses({ intent, size, disabled });

  return (
    <button
      className={twMerge(classes, className)}
      disabled={disabled}
      {...props}
    />
  );
};

export type ButtonLinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof buttonClasses>;

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  intent,
  size,
  disabled,
  ...props
}) => {
  const classes = buttonClasses({ intent, size, disabled });

  return <NextLink className={twMerge(classes, className)} {...props} />;
};
