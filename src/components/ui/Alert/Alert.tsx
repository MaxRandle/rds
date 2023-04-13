import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import {
  BsXOctagon,
  BsExclamationTriangle,
  BsInfoCircle,
  BsCheckSquare,
} from "react-icons/bs";

const AlertVariants = cva(["rounded-xl border-2 p-6 flex flex-col gap-3"], {
  variants: {
    status: {
      success: [
        "text-success-700 border-success-500 bg-success-50",
        "dark:text-success-100 dark:border-success-600 dark:bg-success-900",
      ],
      info: [
        "text-info-700 border-info-500 bg-info-50",
        "dark:text-info-100 dark:border-info-600 dark:bg-info-900",
      ],
      warning: [
        "text-warning-700 border-warning-500 bg-warning-50",
        "dark:text-warning-100 dark:border-warning-600 dark:bg-warning-900",
      ],
      danger: [
        "text-danger-700 border-danger-500 bg-danger-50",
        "dark:text-danger-100 dark:border-danger-600 dark:bg-danger-900",
      ],
    },
  },
});

export type AlertProps = React.ComponentPropsWithoutRef<"div"> &
  Omit<VariantProps<typeof AlertVariants>, "status"> &
  Required<Pick<VariantProps<typeof AlertVariants>, "status">> & {
    title: React.ReactNode;
  };

export const Alert: React.FC<AlertProps> = ({
  className,
  children,
  title,
  status,
  ...props
}) => {
  const classes = AlertVariants({ status });

  const Icon =
    status === "danger"
      ? BsXOctagon
      : status === "warning"
      ? BsExclamationTriangle
      : status === "info"
      ? BsInfoCircle
      : BsCheckSquare;

  return (
    <div className={twMerge(classes, className)} {...props}>
      <div className="flex items-center gap-4">
        <p>
          <Icon size={24} />
        </p>
        <p className="text-lg">{title}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};
