import { type VariantProps, cva } from "class-variance-authority";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

const NavLinkVariants = cva(
  [
    "text-lg sm:text-xl leading-loose",
    "dark:text-base-400 dark:hover:text-white text-base-400 hover:text-white",
  ],
  {
    variants: {
      /**
       * @summary boolean indicating whether the NavLink is active
       */
      isActive: {
        true: "text-white dark:text-white border-b-2",
        false: "",
      },
    },
  }
);

type NavLinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof NavLinkVariants>;

export const NavLink: React.FC<NavLinkProps> = ({
  className,
  isActive,
  ...props
}) => {
  const classes = NavLinkVariants({ isActive });
  return <NextLink className={twMerge(classes, className)} {...props} />;
};
