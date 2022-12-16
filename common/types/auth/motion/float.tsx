// Chakra UI Imports
import { chakra, HTMLChakraProps } from "@chakra-ui/react";

// Library Imports
import { motion, HTMLMotionProps } from "framer-motion";

// export type Merge<P, T> = Omit<P, keyof T> & T;

export type MotionBoxProps = Omit<
  HTMLChakraProps<"div">,
  keyof HTMLMotionProps<"div">
> &
  HTMLChakraProps<"div">;

const MotionBox = motion(chakra.div);

export default MotionBox;
