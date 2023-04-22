import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import React from "react";
import { SplitContentLeft } from "./SplitContentLeft";
import { SplitContentRight } from "./SplitContentRight";

const SplitContentVariants = cva([""]);

export type SplitContentProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof SplitContentVariants>;

export const SplitContent: React.FC<SplitContentProps> = ({
  className,
  children,
  ...props
}) => {
  const leftChildren: React.ReactElement[] = [];
  const rightChildren: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === SplitContentLeft) {
        leftChildren.push(child);
        return;
      }
      if (child.type === SplitContentRight) {
        rightChildren.push(child);
        return;
      }
    }
  });

  return (
    <div
      className={twMerge("flex w-full gap-6 sm:gap-10", className)}
      {...props}
    >
      <div className="flex w-full flex-col gap-6 sm:gap-10 md:hidden">
        {children}
      </div>
      <div className="hidden w-full flex-col gap-10 md:flex md:justify-center">
        {leftChildren}
      </div>
      <div className="hidden w-full flex-col gap-10 md:flex md:justify-center">
        {rightChildren}
      </div>
    </div>
  );
};
