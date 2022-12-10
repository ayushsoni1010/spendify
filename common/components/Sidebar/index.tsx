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
} from "@chakra-ui/react";

// Components Imports
import Logo from "@/common/components/Logo";
import { useAuth } from "@/context/AuthContext";
import { sidebarDetails } from "./__sidebarDetails";

// Icon Imports
import { AiOutlineSetting } from "react-icons/ai";
import { GrUserSettings } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const logoutUser = () => {
    logout();
    router.push("/login");
  };

  return (
    <React.Fragment>
      <Box
        py="6"
        w="fit-content"
        position="fixed"
        top="0"
        left="0"
        bottom="0"
        h="100vh"
        bgColor="gray.50"
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
                  bg: router.pathname === item.url ? "blue.400" : "gray.200",
                }}
                p="1"
                bgColor={router.pathname === item.url ? "blue.400" : ""}
                px="2"
                spacing={10}
                borderRadius="4px"
                color={router.pathname === item.url ? "white" : ""}
              >
                <Link href={item.url} passHref>
                  <ListItem fontSize="md" fontWeight="500" py="0.5" pl="1">
                    <ListIcon w="5" h="5" position="relative" top="-2px">
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
          bgColor="gray.100"
          p="4"
          justify="space-between"
        >
          <HStack gap="2">
            <Avatar
              size="sm"
              name="Ayush Soni"
              src="https://github.com/ayushsoni1010.png"
            />
            <Text fontWeight="semibold">Ayush Soni</Text>
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
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </React.Fragment>
  );
};
export default Sidebar;
