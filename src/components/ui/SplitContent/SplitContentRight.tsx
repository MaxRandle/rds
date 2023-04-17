import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const SplitContentRightVariants = cva([""]);

export type SplitContentRightProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof SplitContentRightVariants>;

export const SplitContentRight: React.FC<SplitContentRightProps> = ({
  className,
  ...props
}) => {
  const classes = SplitContentRightVariants();

  return <div className={twMerge(classes, className)} {...props} />;
};
