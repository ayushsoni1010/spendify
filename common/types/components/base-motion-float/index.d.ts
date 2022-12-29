// Chakra UI Imports
import { HTMLChakraProps } from "@chakra-ui/react";

// Library Imports
import { HTMLMotionProps } from "framer-motion";

// export type Merge<P, T> = Omit<P, keyof T> & T;

export type MotionBoxProps = Omit<
  HTMLChakraProps<"div">,
  keyof HTMLMotionProps<"div">
> &
  HTMLChakraProps<"div">;
