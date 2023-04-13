import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const CardVariants = cva(
  ["bg-base-50 dark:bg-base-800 rounded-lg overflow-hidden"],
  {
    variants: {
      palette: {
        base: "bg-base-50 dark:bg-base-900",
        surface: "bg-base-200 dark:bg-base-800",
      },
      elevation: {
        flat: "",
        low: "shadow-md dark:shadow-glow-md",
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
