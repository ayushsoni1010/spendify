// Basic Imports
import React from "react";

// Chakra UI Imports
import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Components Imports
import BaseBox from "@/modules/components/BaseBox";

const Hero: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <BaseBox position="relative">
        <HStack m="auto" my="12">
          <Button
            m="auto"
            as="a"
            href="https://github.com/ayushsoni1010/spendify"
            target="_blank"
            textDecoration="none"
            style={{ textDecoration: "none" }}
            borderRadius="full"
            border={"2px"}
            borderColor="blue.600"
            h="35px"
          >
            <HStack gap="1">
              <Text
                size="sm"
                fontWeight="semibold"
                fontSize={{
                  base: "md",
                  lg: "md",
                  md: "md",
                  sm: "xs",
                  xs: "xs",
                }}
              >
                Support us by becoming a stargazer🚀
              </Text>
              <Image
                src="https://img.shields.io/github/stars/ayushsoni1010/spendify.svg?style=social&label=Star"
                alt="Repository Star"
              />
            </HStack>
          </Button>
        </HStack>
        <Text
          bgGradient={useColorModeValue(
            "linear(to-r, blue.400, purple.800, blue.300)",
            "linear(to-r, cyan.400,white, cyan.400)"
          )}
          bgClip="text"
          fontSize={{ base: "7xl", md: "7xl", sm: "3xl", xs: "4xl" }}
          fontWeight="700"
          textAlign="center"
        >
          Get your spending money under control and manage
        </Text>
        <Text
          fontSize={{ base: "xl", md: "xl", sm: "md", xs: "md" }}
          colorScheme="white"
          textAlign="center"
          px={{ base: 60, md: 60, sm: 10, xs: 10 }}
          my="5"
        >
          Control your budgets, spending and personal finances
        </Text>
      </BaseBox>
    </React.Fragment>
  );
};

export default Hero;
