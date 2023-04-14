import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const CardVariants = cva(
  ["bg-base-50 dark:bg-base-800 rounded-lg overflow-hidden"],
  {
    variants: {
      background: {
        base: "bg-base-50 dark:bg-base-900",
        raised: "bg-base-200 dark:bg-base-800",
        accent: "bg-accent-50 dark:bg-accent-900",
        "accent-raised": "bg-accent-200 dark:bg-accent-800",
      },
      elevation: {
        flat: "",
        low: "shadow-sm dark:shadow-glow-md",
        high: "shadow-lg dark:shadow-glow-lg",
      },
    },
    defaultVariants: {
      background: "raised",
      elevation: "low",
    },
  }
);

export type CardProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof CardVariants>;

export const Card: React.FC<CardProps> = ({
  className,
  background,
  elevation,
  ...props
}) => {
  const classes = CardVariants({ background, elevation });

  return <div className={twMerge(classes, className)} {...props} />;
};
