import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";

const buttonClasses = cva(
  "tracking-wider rounded-md transition inline-flex items-center",
  {
    variants: {
      /**
       * @summary specifies the background and text colors
       */
      palette: {
        base: ["bg-base-100 text-base-700 hover:bg-base-300"],
        primary: ["bg-primary-600 text-white hover:bg-primary-700"],
        unstyled: ["text-black dark:text-white"],
      },
      /**
       * @summary specifies size of the button
       */
      size: {
        md: "h-10 px-6 text-lg",
        lg: "h-16 px-6 text-lg",
      },
    },
    defaultVariants: {
      palette: "base",
      size: "md",
    },
  }
);

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonClasses>;

export const Button: React.FC<ButtonProps> = ({
  className,
  palette,
  size,
  ...props
}) => {
  const classes = buttonClasses({ palette, size });

  return <button className={twMerge(classes, className)} {...props} />;
};

export type ButtonLinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof buttonClasses>;

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  palette,
  size,
  ...props
}) => {
  const classes = buttonClasses({ palette, size });

  return <NextLink className={twMerge(classes, className)} {...props} />;
};
