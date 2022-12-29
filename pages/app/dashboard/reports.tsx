// Basic Imports
import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Image from "next/image";

// Chakra UI Imports
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

// Components Imports
import Sidebar from "@/common/components/Sidebar";
import BaseBox from "@/modules/components/BaseBox";
import BaseSeo from "@/modules/components/BaseSeo";

const Analtics: NextPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <BaseSeo title={["Dashboard", "Reports"]} />
      <Sidebar />
      <BaseBox>
        <Box
          p={{ base: 14, xl: 14, lg: 10, md: 10, sm: 10, xs: 10 }}
          bgGradient="linear(to-r, blue.400, purple.500)"
          borderRadius="3xl"
          boxShadow="2xl"
        >
          <Flex
            flexDir={{
              base: "row",
              xl: "row",
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            }}
            gap={{ base: 36, xl: 36, lg: 14, md: 10, sm: 10, xs: 10 }}
            alignItems="center"
          >
            <Box>
              <Image
                src="/assets/reports.png"
                width="700"
                height="700"
                alt="Invoices"
                aria-label="Invoices"
              />
            </Box>
            <Box pr="10">
              <Heading
                color="white"
                fontWeight="800"
                fontSize={{
                  base: "3xl",
                  xl: "3xl",
                  lg: "3xl",
                  md: "3xl",
                  sm: "xl",
                  xs: "xl",
                }}
              >
                Expense & Income Tracking
              </Heading>
              <Text
                mt="2"
                color="white"
                fontSize={{
                  base: "md",
                  xl: "md",
                  lg: "md",
                  md: "md",
                  sm: "sm",
                  xs: "sm",
                }}
              >
                Track expenses and income from any source, even from offline
                sources. An overview of your financial situation can be found in
                the Dashboard.
              </Text>
              <Button bgColor={useColorModeValue("white", "black")} my="10">
                New expenses
              </Button>
            </Box>
          </Flex>
        </Box>
      </BaseBox>
    </React.Fragment>
  );
};

export default Analtics;
