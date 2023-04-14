import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type AnimatedBrandLogoProps = React.ComponentPropsWithoutRef<
  typeof motion.svg
> & {
  className?: string;
};

export const AnimatedBrandLogo: React.FC<AnimatedBrandLogoProps> = ({
  className,
  ...props
}) => {
  return (
    <motion.svg
      className={twMerge("drop aspect-[2/1] max-h-80", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      variants={{
        dropStart: {
          filter:
            "drop-shadow(0px 0px 96px rgba(255, 255, 255, 0.7)) drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
          y: 8,
        },
        dropEnd: {
          filter:
            "drop-shadow(0px 0px 48px rgba(255, 255, 255, 0.4)) drop-shadow(0 25px 25px rgb(0 0 0 / 0.25)) drop-shadow(0 25px 25px rgb(0 0 0 / 0.25))",
          y: 0,
        },
      }}
      initial="dropStart"
      animate="dropEnd"
      transition={{
        default: { delay: 2, duration: 2, ease: "easeOut" },
      }}
      {...props}
    >
      <motion.path
        className="fill-primary-300 stroke-primary-300 dark:fill-primary-400 dark:stroke-primary-400"
        variants={{
          hidden: {
            pathLength: 0,
            fillOpacity: 0,
            x: -24,
          },
          visible: {
            pathLength: 1,
            fillOpacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: [0.72, 0.01, 0.98, 0.79] },
          opacity: { duration: 2, ease: "circIn" },
          pathLength: { ease: "linear", duration: 2 },
        }}
        d="M9.182 64H0l20.316-33.353L1.847 0h20.035l10.439 19.689L42.439 0h11.282c-4.708 15.109-10.182 22.624-22.944 33.859C19.125 44.117 14.05 50.647 9.182 64Z"
      />
      <motion.path
        className="fill-primary-700 stroke-primary-700 dark:fill-white dark:stroke-white"
        variants={{
          hidden: {
            pathLength: 0,
            fillOpacity: 0,
            x: 24,
          },
          visible: {
            pathLength: 1,
            fillOpacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: [0.72, 0.01, 0.98, 0.79] },
          opacity: { duration: 2, ease: "circIn" },
          pathLength: { ease: "linear", duration: 2 },
        }}
        d="M53.721 0h8.553L43.965 30.996 64 64H43.563L31.96 43.438 20.316 64H9.182c4.868-13.353 9.943-19.883 21.595-30.141C43.539 22.624 49.013 15.109 53.721 0Z"
      />
    </motion.svg>
  );
};
