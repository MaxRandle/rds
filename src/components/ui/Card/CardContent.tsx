import { twMerge } from "tailwind-merge";

export type CardContentProps = React.ComponentPropsWithoutRef<"div">;

export const CardContent: React.FC<CardContentProps> = ({
  className,
  ...props
}) => {
  const classes = "p-6 md:p-10";

  return <div className={twMerge(classes, className)} {...props} />;
};
