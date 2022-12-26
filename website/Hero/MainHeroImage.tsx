// Basic Imports
import React from "react";

// Chakra UI Imports
import { Box, Image, HStack, Flex } from "@chakra-ui/react";

// Components Imports
import BaseMotionFallInPlace from "@/modules/components/BaseMotionFallInPlace";

const MainHeroImage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Flex
        position="relative"
        justify={{
          base: "end",
          lg: "end",
          md: "center",
          sm: "center",
          xs: "center",
        }}
        my={{ base: 0, lg: 0, md: 20, sm: 20, xs: 20 }}
        mb={{ base: 0, lg: 0, md: 96, sm: 96, xs: 96 }}
      >
        <Box position="absolute">
          <BaseMotionFallInPlace initialInView motion>
            <Image
              src="/assets/hero-payment.png"
              alt="Hero"
              position="relative"
              right={{ base: 72, lg: 72, md: 28, sm: 28, xs: 24 }}
              w={{ base: 32, lg: 32, md: 24, sm: 20, xs: 20 }}
            />
          </BaseMotionFallInPlace>
        </Box>
        <Box position="absolute">
          <Image
            src="/assets/hero-payment.png"
            alt="Hero"
            position="relative"
            right={{ base: 72, lg: 72, md: 28, sm: 28, xs: 24 }}
            w={{ base: 32, lg: 32, md: 24, sm: 20, xs: 20 }}
          />
        </Box>

        {/* <Image
          src="/assets/hero-business.svg"
          alt="Hero"
          position="absolute"
          left={{ base: 36 }}
          w={{ base: 64, lg: 64, md: 64, sm: 20, xs: 20 }}
        /> */}

        <Box position="absolute">
          <Image
            src="/assets/hero-plate.png"
            alt="Hero"
            position="relative"
            top={{ base: 14, lg: 14, md: 10, sm: 10, xs: 10 }}
            left={{ base: 0, lg: 0, md: 4, sm: 0, xs: 0 }}
            zIndex="-1"
            w={{ base: 80, lg: 80, md: 72, sm: 52, xs: 52 }}
          />
        </Box>
        <Box position="absolute">
          <BaseMotionFallInPlace motion scaling>
            <Image
              src="/assets/hero-brick.png"
              alt="Hero"
              position="relative"
              top={{ base: 0, lg: 0, md: 0, sm: 0, xs: 2 }}
              left={{ base: 0, lg: 0, md: 20, sm: 10, xs: 14 }}
              zIndex="1"
              w={{ base: 44, lg: 44, md: 36, sm: 28, xs: 28 }}
            />
          </BaseMotionFallInPlace>
        </Box>

        <Box position="absolute">
          <BaseMotionFallInPlace initialInView motion>
            <Image
              src="/assets/hero-meter.png"
              alt="Hero"
              position="relative"
              top={{ base: 60, lg: 60, md: 52, sm: 36, xs: 36 }}
              left={{ base: 0, lg: 0, md: 24, sm: 24, xs: 24 }}
              w={{ base: 36, lg: 32, md: 24, sm: 20, xs: 20 }}
            />
          </BaseMotionFallInPlace>
        </Box>

        <Box position="absolute">
          <Image
            src="/assets/hero-meter.png"
            alt="Hero"
            position="relative"
            top={{ base: 60, lg: 60, md: 52, sm: 36, xs: 36 }}
            left={{ base: 0, lg: 0, md: 24, sm: 24, xs: 24 }}
            w={{ base: 36, lg: 32, md: 24, sm: 20, xs: 20 }}
          />
        </Box>

        <Box position="absolute">
          <BaseMotionFallInPlace initialInView motion>
            <Image
              src="/assets/hero-star.png"
              alt="Hero"
              position="relative"
              top={{ base: 56, lg: 56, md: 52, sm: 40, xs: 40 }}
              right={{ base: 80, lg: 80, md: 40, sm: 32, xs: 28 }}
              w={{ base: 32, lg: 32, md: 24, sm: 20, xs: 20 }}
            />
          </BaseMotionFallInPlace>
        </Box>
        <Box position="absolute">
          <Image
            src="/assets/hero-star.png"
            alt="Hero"
            position="relative"
            top={{ base: 56, lg: 56, md: 52, sm: 40, xs: 40 }}
            right={{ base: 80, lg: 80, md: 40, sm: 32, xs: 28 }}
            w={{ base: 32, lg: 32, md: 24, sm: 20, xs: 20 }}
          />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default MainHeroImage;
