// Basic Imports
import React from "react";

// Chakra UI Imports
import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
  VStack,
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
            gap="0"
            templateColumns="1.2fr 0.8fr"
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
                pr={{ lg: 4, md: 0, sm: 0, xs: 0 }}
                textAlign={{
                  base: "left",
                  lg: "left",
                  md: "center",
                  sm: "center",
                  xs: "center",
                }}
              >
                {props?.heroSection?.heading}
              </Text>
              <VStack
                alignItems={{
                  base: "start",
                  lg: "start",
                  md: "center",
                  sm: "center",
                  xs: "center",
                }}
              >
                <Text
                  fontSize={{
                    base: "lg",
                    lg: "lg",
                    md: "lg",
                    sm: "md",
                    xs: "md",
                  }}
                  textAlign={{
                    base: "left",
                    lg: "left",
                    md: "center",
                    sm: "center",
                    xs: "center",
                  }}
                  colorScheme="white"
                  my="5"
                >
                  {props?.heroSection?.description}
                </Text>
                <Button
                  my="2"
                  size={{ base: "lg", lg: "lg", md: "lg" }}
                  variant="solid"
                  boxShadow="base"
                  cursor="pointer"
                  _active={{ boxShadow: "outline" }}
                  _hover={{ boxShadow: "xl" }}
                  colorScheme="blue"
                >
                  {props?.heroSection?.buttonText}
                </Button>
              </VStack>
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
