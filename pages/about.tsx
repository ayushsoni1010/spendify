// Basic Imports
import React from "react";
import { NextPage } from "next";
import NextLink from "next/link";

// Chakra UI Imports
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";

// Components Imports
import BaseBox from "@/modules/components/BaseBox";
import BaseSeo from "@/modules/components/BaseSeo";

// Icon Imports
import { MdConstruction } from "react-icons/md";

const About: NextPage = () => {
  return (
    <React.Fragment>
      <BaseSeo title="About" />
      <BaseBox>
        <Container m="auto" mt="20">
          <Flex gap="4" my="4">
            <IconButton
              size="lg"
              icon={<MdConstruction />}
              aria-label="Construction"
            />
            <Heading as="h1">Construction</Heading>
          </Flex>
          <Text>The page you&apos;re looking for is in progress</Text>
          <Divider my="6" />
          <Box my="6">
            <NextLink href="/" passHref>
              <Button
                type="button"
                variant="solid"
                colorScheme="blue"
                bgGradient="linear(to-r, blue.400, purple.500)"
              >
                Return to home
              </Button>
            </NextLink>
          </Box>
        </Container>
      </BaseBox>
    </React.Fragment>
  );
};

export default About;
