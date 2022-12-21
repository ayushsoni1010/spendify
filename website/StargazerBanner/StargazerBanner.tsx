// Basic Imports
import React from "react";

// Chakra UI Imports
import {
  HStack,
  Text,
  Image,
  LinkBox,
  useColorModeValue,
} from "@chakra-ui/react";

// Components Imports
import BaseMotionFallInPlace from "@/modules/components/BaseMotionFallInPlace";

const StargazerBanner: React.FunctionComponent = (props: any) => {
  return (
    <React.Fragment>
      <BaseMotionFallInPlace initialInView delay={1.4} translateY="-10px">
        <HStack
          m="auto"
          my="14"
          as={LinkBox}
          bg={useColorModeValue("white", "gray.900")}
          borderRadius="full"
          maxW="400px"
          cursor="pointer"
          transition="all .2s ease-out"
          _before={{
            content: `""`,
            position: "absolute",
            zIndex: -1,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderRadius: "inherit",
            margin: "-2px",
            bgGradient: "linear(to-r, blue.500, purple.500)",
            transition: "background .2s ease-out",
          }}
          _hover={{
            boxShadow: "lg",
          }}
        >
          <HStack
            gap="1"
            as="a"
            m="auto"
            href={props?.announcement?.href}
            target="_blank"
            h="35px"
          >
            <Text
              size="sm"
              fontWeight="medium"
              fontSize={{
                base: "sm",
                lg: "sm",
                md: "sm",
                sm: "xs",
                xs: "xs",
              }}
            >
              {props?.announcement?.description}
            </Text>
            <Image
              src={props?.announcement?.stargazerLink}
              alt={props?.announcement?.stargazerTitle}
            />
          </HStack>
        </HStack>
      </BaseMotionFallInPlace>
    </React.Fragment>
  );
};

export default StargazerBanner;
