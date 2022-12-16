// Basic Imports
import React from "react";

// Types Imports
import MotionBox, { MotionBoxProps } from "@/common/types/auth/motion/float";

const BaseMotionFloat: React.FunctionComponent<MotionBoxProps> = ({
  children,
  delay = 0.2,
  steps = [10, -10, 10],
  ...rest
}: MotionBoxProps & { delay?: number; steps?: number[] }) => {
  return (
    <React.Fragment>
      <MotionBox
        animate={{ translateY: steps }}
        transition={{
          delay,
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0,
          repeatType: "reverse",
        }}
        {...rest}
      >
        {children}
      </MotionBox>
    </React.Fragment>
  );
};

export default BaseMotionFloat;
