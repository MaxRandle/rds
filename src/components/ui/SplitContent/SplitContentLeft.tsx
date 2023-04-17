import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const SplitContentLeftVariants = cva([""]);

export type SplitContentLeftProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof SplitContentLeftVariants>;

export const SplitContentLeft: React.FC<SplitContentLeftProps> = ({
  className,
  ...props
}) => {
  const classes = SplitContentLeftVariants();

  return <div className={twMerge(classes, className)} {...props} />;
};
