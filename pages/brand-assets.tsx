// Basic Imports
import { NextPage } from "next";
import React from "react";

// Chakra UI Imports
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Components Imports
import BaseBox from "@/modules/components/BaseBox";
import BaseSeo from "@/modules/components/BaseSeo";
import BaseMotionFloat from "@/modules/components/BaseMotionFloat";
import Header from "@/website/Header";

const BrandAssets: NextPage = () => {
  return (
    <React.Fragment>
      <BaseSeo title="Brand Assets" />
      <Header />
      <Box
        position="relative"
        top="65px"
        borderRadius="0 0 100px 100px"
        bgColor={useColorModeValue("gray.700", "gray.100")}
      >
        <BaseBox>
          <Grid
            display={{
              base: "grid",
              xl: "grid",
              lg: "grid",
              md: "grid",
              sm: "block",
              xs: "block",
            }}
            gap="4"
            templateColumns="repeat(2, 1fr)"
            rowGap="10"
            columnGap="10"
          >
            <Box pr="14">
              <Text
                color="yellow.500"
                fontWeight="800"
                fontSize={{
                  base: "xl",
                  xl: "xl",
                  lg: "xl",
                  md: "xl",
                  sm: "sm",
                  xs: "sm",
                }}
              >
                {"Brand Assets And Guidelines".toUpperCase()}
              </Text>
              <Heading
                my="4"
                color={useColorModeValue("white", "black")}
                fontSize={{
                  base: "3xl",
                  xl: "4xl",
                  lg: "4xl",
                  md: "4xl",
                  sm: "2xl",
                  xs: "2xl",
                }}
              >
                Designed with love for the future usecases.
              </Heading>
              <Text my="4" color={useColorModeValue("white", "black")}>
                Thank you for your interest in Spendify! We have created some
                basic guidelines to help you use our brand and assets including
                our logo, colour palette, fonts and other brand resources.
                Please spare a moment to acquaint yourself with them for your
                ease of use.
              </Text>
              <Button
                colorScheme="blue"
                variant="solid"
                boxShadow="2xl"
                _focus={{ boxShadow: "outline" }}
                _hover={{ boxShadow: "outline" }}
                my={{ base: 10, lg: 10, md: 10, sm: 2, xs: 2 }}
                size="lg"
              >
                Get Started
              </Button>
            </Box>
            <BaseMotionFloat>
              <Box my={{ base: 4, lg: 4, md: 4, sm: 10, xs: 10 }}>
                <Image
                  pb={{ base: 4, lg: 4, md: 4, sm: 10, xs: 10 }}
                  src="/brand-background.svg"
                  alt="Brand Assets"
                />
              </Box>
            </BaseMotionFloat>
          </Grid>
        </BaseBox>
      </Box>
    </React.Fragment>
  );
};

export default BrandAssets;
