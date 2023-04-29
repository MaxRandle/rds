import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import React from "react";
import { SplitContentLeft } from "./SplitContentLeft";
import { SplitContentRight } from "./SplitContentRight";

const SplitContentVariants = cva(["flex w-full gap-4"], {
  variants: {
    breakpoint: {
      sm: "sm:gap-6",
      md: "md:gap-6",
    },
  },
  defaultVariants: {
    breakpoint: "md",
  },
});

const SingleContentVariants = cva(["flex w-full flex-col gap-4"], {
  variants: {
    breakpoint: {
      sm: "sm:hidden",
      md: "md:hidden",
    },
  },
  defaultVariants: {
    breakpoint: "md",
  },
});

const DoubleContentVariants = cva(["hidden w-full flex-col gap-6"], {
  variants: {
    breakpoint: {
      sm: "sm:flex sm:justify-center",
      md: "md:flex md:justify-center",
    },
  },
  defaultVariants: {
    breakpoint: "md",
  },
});

export type SplitContentProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof SplitContentVariants>;

export const SplitContent: React.FC<SplitContentProps> = ({
  className,
  children,
  breakpoint,
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
      className={twMerge(SplitContentVariants({ breakpoint }), className)}
      {...props}
    >
      <div className={SingleContentVariants({ breakpoint })}>{children}</div>
      <div className={DoubleContentVariants({ breakpoint })}>
        {leftChildren}
      </div>
      <div className={DoubleContentVariants({ breakpoint })}>
        {rightChildren}
      </div>
    </div>
  );
};
