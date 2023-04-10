import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

export const Link: React.FC<LinkProps> = ({ className, ...props }) => {
  return <NextLink className={twMerge("", className)} {...props} />;
};
