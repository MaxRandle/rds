import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const InputVariants = cva(
  ["appearance-none px-4 py-3", "text-base-300 bg-base-50 border-base-300"],
  { variants: {} }
);

const InputWrapperVariants = cva(["relative"], { variants: {} });

const InputInputVariants = cva([
  "peer absolute inset-0 cursor-pointer appearance-none rounded-lg px-4 py-3 text-base-500 bg-base-50 dark:bg-base-900 focus:outline-none",
]);

const InputContainerVariants = cva([
  "pointer-events-none relative h-12 w-full rounded-lg border-2",
  "border-2 border-base-300 dark:border-base-500 transition-colors",
  "peer-focus:ring-4 peer-focus:ring-primary-600 peer-focus:dark:border-base-400",
]);

export type InputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "className"
> &
  Pick<React.ComponentPropsWithoutRef<"div">, "className"> &
  VariantProps<typeof InputWrapperVariants>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const classes = InputWrapperVariants({});

  return (
    <div className={twMerge(classes, className)}>
      <input className={InputInputVariants()} {...props} />
      <div className={InputContainerVariants({})} />
    </div>
  );
};

/*
  width: 100%;
  height: 3.25rem;
  transition: 200ms ease background-color, border-color;
  border-radius: var(--radio-border-radius);
  background-color: var(--radio-bg);
  color: var(--radio-color);
  border: 1px solid var(--radio-border-color);
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  & > * + * {
    margin-left: 1rem;
  }

  & ~ * {
    background: red;
  }

*/
