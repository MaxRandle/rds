import { cva, type VariantProps } from "class-variance-authority";
import NextImage from "next/image";
import { twMerge } from "tailwind-merge";

const FigureVariants = cva(["relative overflow-hidden rounded-lg"], {
  variants: {},
});

export type FigureProps = React.ComponentPropsWithoutRef<"figure"> &
  VariantProps<typeof FigureVariants> &
  Pick<React.ComponentPropsWithoutRef<typeof NextImage>, "src" | "alt"> &
  Required<
    Pick<React.ComponentPropsWithoutRef<typeof NextImage>, "width" | "height">
  >;

export const Figure: React.FC<FigureProps> = ({
  className,
  src,
  alt,
  width,
  height,
  ...props
}) => {
  const classes = FigureVariants();

  return (
    <figure className={twMerge(classes, className)} {...props}>
      <NextImage
        className="absolute left-0 top-0 h-full w-full object-cover"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </figure>
  );
};
