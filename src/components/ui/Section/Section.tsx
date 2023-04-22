import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const sectionClasses = cva("my-20 sm:my-32", {
  variants: {
    /**
     * @summary specifies the background color
     */
    palette: {
      primary: [
        "my-0 sm:my-0 py-20 sm:py-32",
        "bg-primary-300 dark:bg-primary-800",
      ],
      accent: [
        "my-0 sm:my-0 py-20 sm:py-32",
        "bg-accent-300 dark:bg-accent-800",
      ],
      "primary-dark": [
        "my-0 sm:my-0 py-20 sm:py-32",
        "dark:bg-primary-950 bg-primary-800",
        "group/darkmode",
      ],
      "accent-dark": [
        "my-0 sm:my-0 py-20 sm:py-32",
        "bg-accent-800",
        "group/darkmode",
      ],
    },
  },
});

export type SectionProps = React.ComponentPropsWithoutRef<typeof motion.div> &
  VariantProps<typeof sectionClasses> & {
    animateIn?: "bounce";
  };

export const Section: React.FC<SectionProps> = ({
  className,
  palette,
  animateIn,
  ...props
}) => {
  const classes = sectionClasses({ palette });

  const animateBounce = {
    variants: {
      hidden: {
        y: 8,
      },
      visible: {
        y: 0,
      },
    },
    initial: "hidden",
    animate: "visible",
    transition: { delay: 0.1 },
  };

  return (
    <motion.div
      {...(animateIn ? animateBounce : {})}
      className={twMerge(classes, className)}
      {...props}
    />
  );
};
