import { twMerge } from "tailwind-merge";

export type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export const Container: React.FC<ContainerProps> = ({
  className,
  ...props
}) => {
  const classes = "container";

  return <div className={twMerge(classes, className)} {...props} />;
};
