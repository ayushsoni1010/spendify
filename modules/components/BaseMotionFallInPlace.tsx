// Basic Imports
import React from "react";

// Library Imports
import { useInView, IntersectionOptions } from "react-intersection-observer";

// Types Imports
import MotionBox, { MotionBoxProps } from "@/common/types/auth/motion/float";

const BaseMotionFallInPlace = ({
  children,
  delay = 0.2,
  translateY = "20px",
  initialInView,
  threshold,
  onChange,
  ...rest
}: MotionBoxProps & {
  delay?: number;
  initialInView?: boolean;
  threshold?: number;
  translateY?: string;
  onChange?: IntersectionOptions["onChange"];
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    initialInView,
    threshold,
    onChange,
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ scale: 1, opacity: 0, translateY }}
      animate={inView && { scale: 1, opacity: 1, translateY: 0 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 2,
        delay: initialInView ? delay : 0,
      }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default BaseMotionFallInPlace;
