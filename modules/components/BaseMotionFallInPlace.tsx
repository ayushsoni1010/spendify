// Basic Imports
import React from "react";

// Chakra UI Imports
import { chakra } from "@chakra-ui/react";

// Library Imports
import { useInView, IntersectionOptions } from "react-intersection-observer";
import { motion } from "framer-motion";

// Types Imports
import { MotionBoxProps } from "@/common/types/components/base-motion-float";

export const MotionBox = motion(chakra.div);

const BaseMotionFallInPlace = ({
  children,
  delay = 0.2,
  translateY = "20px",
  initialInView,
  threshold,
  isMotion = false,
  scaling = false,
  onChange,
  ...rest
}: MotionBoxProps & {
  delay?: number;
  initialInView?: boolean;
  threshold?: number;
  translateY?: string;
  isMotion?: boolean;
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
        scale: 1,
        opacity: isMotion && scaling ? 1 : 0,
        translateY,
      }}
      animate={inView && { scale: 1, opacity: 1, translateY: 0 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 2,
        delay: initialInView ? delay : 0,
        repeat: isMotion ? Infinity : "",
        repeatDelay: isMotion ? 0 : "",
        repeatType: isMotion ? "reverse" : "",
      }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default BaseMotionFallInPlace;
