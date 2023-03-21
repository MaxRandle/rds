import { twMerge } from "tailwind-merge";

export type AvatarProps = React.ComponentPropsWithoutRef<"div">;

export const Avatar: React.FC<AvatarProps> = ({ className, ...props }) => {
  const classes = twMerge(
    "h-16 w-16 rounded-full bg-slate-600 group-[]/avatar:-ml-4",
    className
  );
  return <div className={classes} {...props}></div>;
};
