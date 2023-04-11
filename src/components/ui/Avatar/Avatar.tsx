import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";

type AvatarRootProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
>;

type AvatarImageProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
>;

export type AvatarProps = AvatarRootProps &
  Pick<AvatarImageProps, "src" | "alt">;

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  children,
  className,
  ...props
}) => {
  const classes = [
    "relative shrink-0 overflow-hidden inline-block h-16 w-16 rounded-full group-[]/avatar:-ml-4 group-[]/avatar:first:ml-0",
    "bg-primary-200 dark:bg-base-800 ring-4 ring-base-100 dark:ring-base-900",
  ];

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
