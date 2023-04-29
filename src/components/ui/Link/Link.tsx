import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";

const LinkVariants = cva([
  "text-primary-900 dark:text-primary-400 group-[]/darkmode:text-primary-400",
  " font-bold tracking-wider",
]);

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof LinkVariants>;

export const Link: React.FC<LinkProps> = ({ className, ...props }) => {
  const classes = LinkVariants({});

  return <NextLink className={twMerge(classes, className)} {...props} />;
};
