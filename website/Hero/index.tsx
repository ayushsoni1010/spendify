// Basic Imports
import React from "react";

// Chakra UI Imports
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  LinkBox,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Components Imports
import BaseBox from "@/modules/components/BaseBox";
import BaseBackgroundGradientRadial from "@/modules/components/BaseGradientRadix";
import BaseMotionFallInPlace from "@/modules/components/BaseMotionFallInPlace";
import StargazerBanner from "@/website/StargazerBanner/StargazerBanner";
import MainHeroImage from "./MainHeroImage";

const Hero: React.FunctionComponent = (props: any) => {
  return (
    <React.Fragment>
      <BaseBox position="relative">
        <BaseBackgroundGradientRadial
          top="-1000px"
          height="500px"
          opacity="0.3"
          _dark={{ opacity: "0.7" }}
        />
        <StargazerBanner {...props} />
        <BaseMotionFallInPlace initialInView translateY="30px">
          <Grid
            display={{
              base: "grid",
              xl: "grid",
              lg: "grid",
              md: "block",
              sm: "block",
              xs: "block",
            }}
            templateColumns="1.5fr 1fr"
            rowGap="10"
            columnGap="10"
          >
            <Box>
              <Text
                bgColor={useColorModeValue("black", "white")}
                bgClip="text"
                fontSize={{
                  base: "6xl",
                  lg: "6xl",
                  md: "5xl",
                  sm: "4xl",
                  xs: "4xl",
                }}
                fontWeight="900"
                lineHeight={{
                  base: "72px",
                  lg: "72px",
                  md: "60px",
                  sm: "40px",
                  xs: "40px",
                }}
              >
                {props?.heroSection?.heading}
              </Text>
              <Text
                fontSize={{
                  base: "lg",
                  lg: "lg",
                  md: "lg",
                  sm: "md",
                  xs: "md",
                }}
                colorScheme="white"
                // px={{ base: 80, lg: 80, md: 80, sm: 10, xs: 10 }}
                my="5"
              >
                {props?.heroSection?.description}
              </Text>
              <Button
                my="2"
                mx="auto"
                size="lg"
                variant="solid"
                boxShadow="base"
                _active={{ boxShadow: "outline" }}
                _hover={{ boxShadow: "xl" }}
                colorScheme="blue"
              >
                Get started
              </Button>
            </Box>
            <GridItem>
              <MainHeroImage />
            </GridItem>
          </Grid>
        </BaseMotionFallInPlace>
      </BaseBox>
    </React.Fragment>
  );
};

export default Hero;
