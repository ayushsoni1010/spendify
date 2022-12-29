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

const NotFound: NextPage = () => {
  return (
    <React.Fragment>
      <BaseSeo title="Not Found" />
      <BaseBox>
        <Container m="auto" mt="20">
          <Heading as="h1">Not Found</Heading>
          <Text>The page you&apos;re looking for was not found</Text>
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

export default NotFound;
