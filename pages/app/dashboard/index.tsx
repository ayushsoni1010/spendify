// Basic Imports
import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

// Chakra UI Imports
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Components Imports
import Sidebar from "@/common/components/Sidebar";
import BaseBox from "@/modules/components/BaseBox";
import BaseMotionFloat from "@/modules/components/BaseMotionFloat";
import BaseSeo from "@/modules/components/BaseSeo";

// Icons Imports
import { TbFileDollar } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiExpense } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";

const Dashboard: NextPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <BaseSeo title={["Dashboard", "Home"]} />
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
            alignItems="flex-start"
          >
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
                Welcome to Spendify
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
                Get your mind blown up by how easy and quick is to create
                beautiful invoices and spendings with Spendify.
              </Text>
            </Box>
            <Stack spacing="1">
              <HStack>
                <IconButton
                  icon={<TbFileDollar />}
                  aria-label="Dollar"
                  bgColor={useColorModeValue("white", "black")}
                />
                <Button
                  rightIcon={<AiOutlineArrowRight />}
                  bgColor={useColorModeValue("white", "black")}
                >
                  Create your first invoice
                </Button>
              </HStack>
              <HStack>
                <IconButton
                  icon={<GiExpense />}
                  aria-label="Dollar"
                  bgColor={useColorModeValue("white", "black")}
                />
                <Button
                  rightIcon={<AiOutlineArrowRight />}
                  bgColor={useColorModeValue("white", "black")}
                >
                  Add your first expense
                </Button>
              </HStack>
              <HStack>
                <IconButton
                  icon={<FiSettings />}
                  aria-label="Dollar"
                  bgColor={useColorModeValue("white", "black")}
                />
                <Button
                  rightIcon={<AiOutlineArrowRight />}
                  bgColor={useColorModeValue("white", "black")}
                >
                  Complete your profile
                </Button>
              </HStack>
            </Stack>
          </Flex>
        </Box>
      </BaseBox>
    </React.Fragment>
  );
};

export default Dashboard;
