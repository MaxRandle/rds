import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const TypographyClasses = cva("text-base", {
  variants: {
    /**
     * @summary specifies the color of the text. Defaults to `weak`
     */
    color: {
      base: "text-black dark:text-white group-[]/darkmode:text-white",
      weak: "text-base-1100 dark:text-base-400 group-[]/darkmode:text-base-400",
      weaker:
        "text-base-900 dark:text-base-600 group-[]/darkmode:text-base-600",
      primary:
        "text-primary-900 dark:text-primary-600 group-[]/darkmode:text-primary-600",
    },
    /**
     * @summary specifies the size of the text. Defaults to `body`
     */
    level: {
      heading1: "text-5xl sm:text-6xl font-light tracking-tight",
      heading2: "text-3xl sm:text-4xl font-light tracking-tight",
      heading3: "text-xl sm:text-2xl font-light",
      subheading: "text-lg sm:text-xl",
      body: "text-base sm:text-lg",
      caption: "text-sm sm:text-base",
    },
  },
  defaultVariants: {
    color: "weak",
    level: "body",
  },
});

export type TypographyProps = React.ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof TypographyClasses> & {
    /**
     * @summary informs the dom type. Defaults to `p`
     */
    as?: "p" | "h3" | "h2" | "h1";
  };

export const Typography: React.FC<TypographyProps> = ({
  color,
  level,
  as: Component = "p",
  className,
  ...props
}) => {
  const classes = TypographyClasses({ color, level });

  return <Component className={twMerge(classes, className)} {...props} />;
};
