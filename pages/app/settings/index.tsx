// Basic Imports
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next";

// Chakra UI Imports
import {
  Avatar,
  Box,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useBreakpoint,
  useBreakpointValue,
  Flex,
  Button,
  IconButton,
  HStack,
} from "@chakra-ui/react";

// Components Imports
import Sidebar from "@/common/components/Sidebar";
import BaseSeo from "@/modules/components/BaseSeo";
import BaseBox from "@/modules/components/BaseBox";
import { useAuth } from "@/context/auth/AuthContext";

// Icons Imports
import { VscAccount } from "react-icons/vsc";
import { FaAngleRight } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { CiBadgeDollar, CiDollar } from "react-icons/ci";
import { GiExpense } from "react-icons/gi";

const Settings: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <React.Fragment>
      <BaseSeo title="Settings" />
      <Sidebar />
      <BaseBox>
        <Stack>
          <Text fontWeight="600" fontSize={{ base: "2xl" }}>
            Profile
          </Text>
          <Flex
            p="4"
            gap={{ base: 10, xl: 10, lg: 10, md: 10, sm: 1, xs: 1 }}
            flexDir={{
              base: "row",
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            }}
            alignItems="flex-start"
            justify="flex-start"
            bgColor={useColorModeValue("gray.50", "gray.700")}
            borderRadius="base"
            boxShadow="base"
          >
            <Box
              w={{
                base: "fit-content",
                xl: "fit-content",
                lg: "fit-content",
                md: "fit-content",
                sm: "full",
                xs: "full",
              }}
              textAlign="center"
            >
              <Avatar
                aria-label="User Account"
                size="2xl"
                cursor="pointer"
                name={user?.displayName}
                src={user?.photoURL}
              />
            </Box>
            <Box>
              <Text
                fontWeight="600"
                fontSize={{
                  base: "2xl",
                  xl: "2xl",
                  lg: "2xl",
                  md: "2xl",
                  sm: "xl",
                  xs: "xl",
                }}
              >
                {user?.displayName}
              </Text>
              <Text fontWeight="600" fontSize="md" my="1">
                {user?.email}
              </Text>
              <NextLink href="/app/settings/profile" passHref>
                <Button mt="3" variant="solid" colorScheme="blue">
                  View more profile settings
                </Button>
              </NextLink>
            </Box>
          </Flex>
          <NextLink href="/app/settings/profile" passHref>
            <HStack
              w={{
                base: 96,
                lg: 96,
                md: 96,
                sm: "container.xs",
                xs: "container.xs",
              }}
              justify="space-between"
              mt="2"
              cursor="pointer"
              borderRadius="base"
              boxShadow="base"
              bgColor={useColorModeValue("gray.50", "gray.700")}
            >
              <Button
                leftIcon={<VscAccount />}
                bgColor={useColorModeValue("gray.50", "gray.700")}
                _hover={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                _focus={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                _active={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                size="lg"
              >
                Account
              </Button>
              <IconButton
                size="lg"
                icon={<FaAngleRight />}
                aria-label="Angle Icon"
                variant="unstyled"
                fontWeight="bold"
              />
            </HStack>
          </NextLink>
          <NextLink href="/app/settings/preferences" passHref>
            <HStack
              w={{
                base: 96,
                lg: 96,
                md: 96,
                sm: "container.xs",
                xs: "container.xs",
              }}
              justify="space-between"
              cursor="pointer"
              borderRadius="base"
              boxShadow="base"
              bgColor={useColorModeValue("gray.50", "gray.700")}
            >
              <Button
                leftIcon={<MdSettingsSuggest />}
                bgColor={useColorModeValue("gray.50", "gray.700")}
                _hover={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                _focus={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                _active={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                size="lg"
              >
                Preferences
              </Button>
              <IconButton
                size="lg"
                icon={<FaAngleRight />}
                aria-label={""}
                variant="unstyled"
                fontWeight="bold"
              />
            </HStack>
          </NextLink>
        </Stack>
        <Stack my="10">
          <Text fontWeight="600" fontSize={{ base: "2xl" }}>
            Category
          </Text>

          <NextLink href="/app/settings/preferences" passHref>
            <HStack
              w={{
                base: 96,
                lg: 96,
                md: 96,
                sm: "container.xs",
                xs: "container.xs",
              }}
              justify="space-between"
              cursor="pointer"
              borderRadius="base"
              boxShadow="base"
              bgColor={useColorModeValue("gray.50", "gray.700")}
            >
              <Button
                leftIcon={<CiDollar />}
                bgColor={useColorModeValue("gray.50", "gray.700")}
                _hover={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                _focus={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                _active={{
                  bgColor: useColorModeValue("gray.50", "gray.700"),
                }}
                size="lg"
              >
                Income
              </Button>
              <IconButton
                size="lg"
                icon={<FaAngleRight />}
                aria-label={""}
                variant="unstyled"
                fontWeight="bold"
              />
            </HStack>
          </NextLink>
          <NextLink href="/app/settings/preferences" passHref>
            <HStack
              w={{
                base: 96,
                lg: 96,
                md: 96,
                sm: "container.xs",
                xs: "container.xs",
              }}
              justify="space-between"
              cursor="pointer"
              borderRadius="base"
              boxShadow="base"
              bgColor={useColorModeValue("gray.50", "gray.700")}
            >
              <Button
                leftIcon={<GiExpense />}
                bgColor={useColorModeValue("gray.50", "gray.700")}
                _hover={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                _focus={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                _active={{
                  bgColor: useColorModeValue("gray.50", "gray.700"),
                }}
                size="lg"
              >
                Expense
              </Button>
              <IconButton
                size="lg"
                icon={<FaAngleRight />}
                aria-label={""}
                variant="unstyled"
                fontWeight="bold"
              />
            </HStack>
          </NextLink>
          <NextLink href="/app/settings/preferences" passHref>
            <HStack
              w={{
                base: 96,
                lg: 96,
                md: 96,
                sm: "container.xs",
                xs: "container.xs",
              }}
              justify="space-between"
              cursor="pointer"
              borderRadius="base"
              boxShadow="base"
              bgColor={useColorModeValue("gray.50", "gray.700")}
            >
              <Button
                leftIcon={<FaRupeeSign />}
                bgColor={useColorModeValue("gray.50", "gray.700")}
                _hover={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                _focus={{ bgColor: useColorModeValue("gray.50", "gray.700") }}
                _active={{
                  bgColor: useColorModeValue("gray.50", "gray.700"),
                }}
                size="lg"
              >
                Budget
              </Button>
              <IconButton
                size="lg"
                icon={<FaAngleRight />}
                aria-label={""}
                variant="unstyled"
                fontWeight="bold"
              />
            </HStack>
          </NextLink>
        </Stack>
      </BaseBox>
    </React.Fragment>
  );
};

export default Settings;
