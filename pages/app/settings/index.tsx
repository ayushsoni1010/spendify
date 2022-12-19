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
import BaseBox from "@/modules/components/BaseBox";
import { useAuth } from "@/context/auth/AuthContext";

// Icons Imports
import { VscAccount } from "react-icons/vsc";
import { FaAngleRight } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";

const Settings: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <React.Fragment>
      <Sidebar />
      <BaseBox
        pt={{ base: "10", lg: "10", md: "10" }}
        ml={{ base: 40, xl: 40, lg: 48, md: 64, sm: 0, xs: 0 }}
        my={{ base: 0, lg: 0, md: 0, sm: 10, xs: 10 }}
      >
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
              w="fit-content"
              my="2"
              spacing={"152px"}
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
              w="fit-content"
              spacing="125px"
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
            Transaction
          </Text>
          <Box
            p="4"
            bgColor={useColorModeValue("gray.50", "gray.700")}
            borderRadius="base"
            boxShadow="base"
          >
            <Box w="full">
              <Avatar
                aria-label="User Account"
                size="2xl"
                cursor="pointer"
                name={user?.displayName}
                src={user?.photoURL}
              />
            </Box>
            <Box mt="4">
              <Text fontWeight="600" my="2">
                Username
              </Text>
              <Input type="text" value={user?.displayName} />
            </Box>
            <Box mt="4">
              <Text fontWeight="600" my="2">
                Email
              </Text>
              <Input type="email" value={user?.email} />
            </Box>
            <Box mt="4">
              <Text fontWeight="600" my="2">
                Password
              </Text>
              <Input type="password" value={user?.displayName} />
            </Box>
          </Box>
        </Stack>
      </BaseBox>
    </React.Fragment>
  );
};

export default Settings;
