// Basic Imports
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Chakra UI Imports
import {
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Stack,
  HStack,
  Text,
  Avatar,
  Divider,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

// Components Imports
import Header from "@/website/Header";
import Logo from "@/common/components/Logo";
import { useAuth } from "@/context/auth/AuthContext";
import { sidebarDetails } from "./__sidebarDetails";

// Icon Imports
import { AiOutlineSetting } from "react-icons/ai";
import { GrUserSettings } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const logoutUser = () => {
    logout();
    router.reload();
    router.push("/login");
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <React.Fragment>
      <Box
        display={{
          base: "block",
          lg: "block",
          md: "block",
          sm: "none",
          xs: "none",
        }}
        py="6"
        w="fit-content"
        position="fixed"
        top="0"
        left="0"
        bottom="0"
        h="100vh"
        bgColor={useColorModeValue("gray.50", "gray.700")}
      >
        <Stack
          flex={{ base: 1, md: 1 }}
          justify="space-between"
          direction="row"
          align="center"
          cursor="pointer"
          px="10"
        >
          <Link href="/" passHref style={{ textDecoration: "none" }}>
            <Flex
              justify="start"
              direction="row"
              align="center"
              cursor="pointer"
              gap="2"
            >
              <Logo />
              <Text
                fontFamily={"heading"}
                fontSize="2xl"
                fontWeight="extrabold"
                colorScheme="white"
              >
                Spendify
              </Text>
            </Flex>
          </Link>
        </Stack>
        <Divider my="6" />
        <Stack my="7" px="4">
          {sidebarDetails.map((item, index) => {
            return (
              <List
                key={index}
                _hover={{
                  bgColor:
                    router.pathname === item.url
                      ? "blue.400"
                      : colorMode === "dark"
                      ? "gray.50"
                      : "gray.300",
                }}
                bgColor={router.pathname === item.url ? "blue.400" : "gray.200"}
                p="1"
                _active={{
                  bgColor: router.pathname === item.url ? "blue.400" : "",
                }}
                boxShadow="base"
                px="2"
                spacing={10}
                borderRadius="4px"
                color={router.pathname === item.url ? "white" : ""}
              >
                <Link href={item.url} passHref>
                  <ListItem
                    fontSize="md"
                    fontWeight="500"
                    py="0.5"
                    pl="1"
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    color={router.pathname === item.url ? "white" : "black"}
                  >
                    <ListIcon
                      w="5"
                      h="5"
                      position="relative"
                      top="-2px"
                      // eslin  t-disable-next-line react-hooks/rules-of-hooks
                      color={router.pathname === item.url ? "white" : "black"}
                    >
                      {item.icon}
                    </ListIcon>
                    {item.title}
                  </ListItem>
                </Link>
              </List>
            );
          })}
        </Stack>
        <HStack
          position="absolute"
          bottom="0"
          w="full"
          bgColor={useColorModeValue("gray.50", "gray.700")}
          p="4"
          justify="space-between"
        >
          <HStack gap="2">
            <Avatar
              size="sm"
              bgColor="blue.200"
              name={user?.displayName ?? "Test User"}
              src={user?.photoURL ?? "https://github.com/ayushsoni1010.png"}
            />
            <Text fontWeight="semibold">
              {user?.displayName ?? "Test User"}
            </Text>
          </HStack>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Settings Options"
              icon={<AiOutlineSetting />}
            />
            <MenuList>
              <MenuItem
                style={{ margin: 0 }}
                onClick={() => router.push("/app/settings")}
                icon={<GrUserSettings />}
              >
                Settings
              </MenuItem>
              <MenuItem
                style={{ margin: 0 }}
                onClick={() => logoutUser()}
                icon={<HiOutlineLogout />}
              >
                Logout
              </MenuItem>
              <MenuItem
                style={{ margin: 0 }}
                onClick={() => toggleColorMode()}
                icon={useColorModeValue(<FaMoon />, <FaSun />)}
              >
                {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
      <Box
        display={{
          base: "none",
          lg: "none",
          md: "none",
          sm: "block",
          xs: "block",
        }}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="100"
      >
        <Header />
      </Box>
      <Box
        display={{
          base: "none",
          lg: "none",
          md: "none",
          sm: "block",
          xs: "block",
        }}
        position="fixed"
        right="0"
        left="0"
        bottom="0"
        w="100vw"
        bgColor="gray.50"
        zIndex="100"
      >
        <Divider />
        <Flex
          py="2"
          px="4"
          alignItems="center"
          justify="space-between"
          display="flex"
        >
          {sidebarDetails.map((item, index) => {
            return (
              <List
                display="flex"
                key={index}
                _hover={{
                  bgColor:
                    router.pathname === item.url ? "blue.400" : "gray.300",
                }}
                _active={{
                  bgColor:
                    router.pathname === item.url ? "blue.400" : "gray.200",
                  boxShadow: "base",
                }}
                p="1"
                bgColor={router.pathname === item.url ? "blue.400" : ""}
                px="2"
                spacing={10}
                borderRadius="full"
                color={router.pathname === item.url ? "white" : ""}
              >
                <Link href={item.url} passHref>
                  <ListItem fontSize="md" fontWeight="500" p="2">
                    <ListIcon
                      mx="auto"
                      position="relative"
                      top="-2px"
                      w="22px"
                      h="22px"
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      color={router.pathname === item.url ? "white" : "black"}
                    >
                      {item.icon}
                    </ListIcon>
                  </ListItem>
                </Link>
              </List>
            );
          })}
          <Menu>
            <MenuButton
              align="center"
              as={Avatar}
              aria-label="User Account"
              size="md"
              cursor="pointer"
              src={user?.photoURL}
            />
            <MenuList>
              <MenuItem
                style={{ margin: 0 }}
                onClick={() => router.push("/app/settings")}
                icon={<GrUserSettings />}
              >
                Settings
              </MenuItem>
              <MenuItem
                style={{ margin: 0 }}
                onClick={() => logoutUser()}
                icon={<HiOutlineLogout />}
              >
                Logout
              </MenuItem>
              <MenuItem
                style={{ margin: 0 }}
                onClick={() => toggleColorMode()}
                icon={useColorModeValue(<FaMoon />, <FaSun />)}
              >
                {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </React.Fragment>
  );
};
export default Sidebar;
