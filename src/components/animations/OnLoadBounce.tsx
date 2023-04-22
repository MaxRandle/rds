import { motion } from "framer-motion";
import { type ComponentType, type ReactNode } from "react";
// import { type ElementType } from "react";

export type OnLoadBounceProps = {
  as:
    | string
    | ComponentType<{
        children?: ReactNode;
      }>;
};

export const OnLoadBounce: React.FC<OnLoadBounceProps> = ({ as, ...props }) => {
  const Component = motion(as);

  return (
    <Component
      variants={{
        hidden: {
          y: 8,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        default: {
          bounce: 0.25,
        },
      }}
      {...props}
    />
  );
};

type Component = ComponentType<{
  children?: ReactNode;
}>;

export const Bounce =
  (Component: Component) =>
  (props: React.ComponentPropsWithoutRef<Component>) => {
    const MotionComponent = motion(Component);
    return <MotionComponent {...props} />;
  };
