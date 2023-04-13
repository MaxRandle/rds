import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";
import { type VariantProps, cva } from "class-variance-authority";

const AvatarVariants = cva(
  [
    "relative shrink-0 overflow-hidden inline-block rounded-full",
    "group-[]/avatar-group:-ml-4 group-[]/avatar-group:first:ml-0",
    "group-[]/avatar-container:mr-3",
    "bg-primary-200 dark:bg-base-800 ring-4 ring-base-100 dark:ring-base-900",
  ],
  {
    variants: {
      size: { md: "w-12 h-12", lg: "w-16 h-16", xl: "w-24 h-24" },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type AvatarRootProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
>;

type AvatarImageProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
>;

export type AvatarProps = AvatarRootProps &
  Pick<AvatarImageProps, "src" | "alt"> &
  VariantProps<typeof AvatarVariants>;

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  children,
  className,
  size,
  ...props
}) => {
  const classes = AvatarVariants({ size });

  return (
    <AvatarPrimitive.Root className={twMerge(classes, className)} {...props}>
      <AvatarPrimitive.Image
        className="aspect-square h-full w-full"
        src={src}
        alt={alt}
      />
      <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center rounded-full text-xl text-primary-600 dark:text-primary-300">
        {children}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};
