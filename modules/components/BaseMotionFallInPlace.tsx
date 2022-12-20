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
  motion = false,
  scaling = false,
  onChange,
  ...rest
}: MotionBoxProps & {
  delay?: number;
  initialInView?: boolean;
  threshold?: number;
  translateY?: string;
  motion?: boolean;
  scaling?: boolean;
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
      initial={{
        scale: motion && scaling ? 1.1 : 1,
        opacity: motion && scaling ? 1 : 0,
        translateY,
      }}
      animate={inView && { scale: 1, opacity: 1, translateY: 0 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 2,
        delay: initialInView ? delay : 0,
        repeat: motion ? Infinity : "",
        repeatDelay: motion ? 0 : "",
        repeatType: motion ? "reverse" : "",
      }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default BaseMotionFallInPlace;
