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
  Heading,
  Text,
} from "@chakra-ui/react";

// Components Imports
import BaseBox from "@/modules/components/BaseBox";
import BaseSeo from "@/modules/components/BaseSeo";

const Custom500: NextPage = () => {
  return (
    <React.Fragment>
      <BaseSeo title="Internal Server Error" />
      <BaseBox>
        <Container m="auto" mt="20">
          <Heading as="h1">Internal server error</Heading>
          <Text mt="2">Oops, looks like we broke something...</Text>
          <Text>An unexpected error occured</Text>
          <Heading fontSize="4xl" my="4">
            ❌ 500
          </Heading>
          <Divider my="6" />
          <Box my="6">
            <NextLink href="/" passHref>
              <Button
                type="button"
                variant="solid"
                colorScheme="blue"
                bgGradient="linear(to-r, blue.400, purple.500)"
              >
                This way back to safety, please ❤️
              </Button>
            </NextLink>
          </Box>
        </Container>
      </BaseBox>
    </React.Fragment>
  );
};

export default Custom500;
