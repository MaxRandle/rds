import { type Variants } from "framer-motion";

export const fadeAndSlideInFromLeft: Variants = {
  hidden: {
    x: -40,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const fadeAndSlideInFromRight: Variants = {
  hidden: {
    x: 40,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
