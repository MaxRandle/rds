import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const sectionClasses = cva("my-20 sm:my-32", {
  variants: {
    /**
     * @summary specifies the background color
     */
    palette: {
      primary: ["my-0 sm:my-0 py-20 sm:py-32", "bg-primary-900"],
    },
  },
});

export type SectionProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof sectionClasses>;

export const Section: React.FC<SectionProps> = ({
  className,
  palette,
  ...props
}) => {
  const classes = sectionClasses({ palette });

  return <div className={twMerge(classes, className)} {...props} />;
};
