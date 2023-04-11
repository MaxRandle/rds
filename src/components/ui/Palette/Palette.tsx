import { twMerge } from "tailwind-merge";

type PaletteProps = React.ComponentPropsWithoutRef<"div">;
export const Palette: React.FC<PaletteProps> = ({ className, ...props }) => {
  const colors = [
    [
      "bg-base-50",
      "bg-base-100",
      "bg-base-200",
      "bg-base-300",
      "bg-base-400",
      "bg-base-500",
      "bg-base-600",
      "bg-base-700",
      "bg-base-800",
      "bg-base-900",
      "bg-base-950",
    ],
    [
      "bg-accent-50",
      "bg-accent-100",
      "bg-accent-200",
      "bg-accent-300",
      "bg-accent-400",
      "bg-accent-500",
      "bg-accent-600",
      "bg-accent-700",
      "bg-accent-800",
      "bg-accent-900",
      "bg-accent-950",
    ],
    [
      "bg-primary-50",
      "bg-primary-100",
      "bg-primary-200",
      "bg-primary-300",
      "bg-primary-400",
      "bg-primary-500",
      "bg-primary-600",
      "bg-primary-700",
      "bg-primary-800",
      "bg-primary-900",
      "bg-primary-950",
    ],
    [
      "bg-success-50",
      "bg-success-100",
      "bg-success-200",
      "bg-success-300",
      "bg-success-400",
      "bg-success-500",
      "bg-success-600",
      "bg-success-700",
      "bg-success-800",
      "bg-success-900",
      "bg-success-950",
    ],
    [
      "bg-info-50",
      "bg-info-100",
      "bg-info-200",
      "bg-info-300",
      "bg-info-400",
      "bg-info-500",
      "bg-info-600",
      "bg-info-700",
      "bg-info-800",
      "bg-info-900",
      "bg-info-950",
    ],
    [
      "bg-warning-50",
      "bg-warning-100",
      "bg-warning-200",
      "bg-warning-300",
      "bg-warning-400",
      "bg-warning-500",
      "bg-warning-600",
      "bg-warning-700",
      "bg-warning-800",
      "bg-warning-900",
      "bg-warning-950",
    ],
    [
      "bg-danger-50",
      "bg-danger-100",
      "bg-danger-200",
      "bg-danger-300",
      "bg-danger-400",
      "bg-danger-500",
      "bg-danger-600",
      "bg-danger-700",
      "bg-danger-800",
      "bg-danger-900",
      "bg-danger-950",
    ],
  ];

  const classes = "flex gap-2 justify-center max-w-md mx-auto";

  return (
    <div className={twMerge(classes, className)} {...props}>
      {colors.map((shades, idx) => (
        <div key={idx} className="flex grow flex-col gap-2">
          {shades.map((shade) => (
            <div key={shade} className={`aspect-square rounded-md ${shade}`} />
          ))}
        </div>
      ))}
    </div>
  );
};
