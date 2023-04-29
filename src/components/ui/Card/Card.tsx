import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const CardVariants = cva(
  ["rounded-lg overflow-hidden border border-base-400 dark:border-base-1300"],
  {
    variants: {
      palette: {
        base: "bg-base-100 dark:bg-base-1600",
        surface: "bg-base-200 dark:bg-base-1500",
      },
      elevation: {
        flat: "",
        low: "shadow-sm dark:shadow-glow-md",
        high: "shadow-lg dark:shadow-glow-lg",
      },
    },
    defaultVariants: {
      palette: "surface",
      elevation: "low",
    },
  }
);

export type CardProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof CardVariants>;

export const Card: React.FC<CardProps> = ({
  className,
  palette,
  elevation,
  ...props
}) => {
  const classes = CardVariants({ palette, elevation });

  return <div className={twMerge(classes, className)} {...props} />;
};
