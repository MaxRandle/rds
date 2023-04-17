import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import React from "react";
import { SplitContentLeft } from "./SplitContentLeft";
import { SplitContentRight } from "./SplitContentRight";

const SplitContentVariants = cva(["flex gap-4 w-full"]);

export type SplitContentProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof SplitContentVariants>;

export const SplitContent: React.FC<SplitContentProps> = ({
  className,
  children,
  ...props
}) => {
  const classes = SplitContentVariants();

  const leftChildren: React.ReactElement[] = [];
  const rightChildren: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      console.log(child.type);
      console.log("after valid");
      if (child.type === SplitContentLeft) {
        console.log("left");
        leftChildren.push(child);
        return;
      }
      if (child.type === SplitContentRight) {
        console.log("right");
        rightChildren.push(child);
        return;
      }
    }
  });

  console.log(leftChildren);

  return (
    <div className={twMerge(classes, className)} {...props}>
      <div className="flex w-full flex-col gap-4 md:hidden">{children}</div>
      <div className="hidden w-full flex-col gap-4 md:flex md:justify-center">
        {leftChildren}
      </div>
      <div className="hidden w-full flex-col gap-4 md:flex md:justify-center">
        {rightChildren}
      </div>
    </div>
  );
};
