// Basic Imports
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Chakra UI Imports
import {
  Box,
  Flex,
  Stack,
  Button,
  Text,
  ButtonGroup,
  IconButton,
  HStack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

// Components Imports
import Logo from "@/common/components/Logo";
import NavItems from "./NavItems";
import CollapseMenu from "./CollapseMenu";
import ColorModeSwitcher from "@/website/ColorModeSwitcher";
import { useAuth } from "@/context/auth/AuthContext";

// Icon Imports
import { FiMenu } from "react-icons/fi";
import { GrUserSettings } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";

const Header: React.FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false);

  const { user, logout } = useAuth();
  const router = useRouter();

  const logoutUser = () => {
    logout();
    router.reload();
    router.push("/");
  };

  const handleToggle = () => {
    setOpen((prevState: boolean) => !prevState);
  };

  return (
    <React.Fragment>
      <Box
        position="fixed"
        top="0"
        zIndex="10"
        minW="100%"
        px={{ base: 20, lg: 20, md: 20, sm: 0, xs: 0 }}
      >
        <Flex
          backdropFilter="blur(4px)"
          border="none"
          minH="60px"
          py={{ base: 2, md: 3 }}
          px={{ base: 4, md: 7 }}
          alignSelf="center"
        >
          <Stack
            flex={{ base: 1, md: 1 }}
            justify="space-between"
            direction="row"
            align="center"
            cursor="pointer"
          >
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Flex
                justify="start"
                direction="row"
                alignItems="center"
                cursor="pointer"
                gap="2"
              >
                <Logo />
                <Text
                  fontFamily={"heading"}
                  fontSize={{
                    base: "2xl",
                    lg: "2xl",
                    md: "2xl",
                    sm: "xl",
                    xs: "xl",
                  }}
                  fontWeight="extrabold"
                >
                  Spendify
                </Text>
              </Flex>
            </Link>
          </Stack>
          <NavItems />
          <Stack
            flex={{ base: 1, md: 1 }}
            justify="end"
            direction="row"
            align="center"
            spacing="3"
            mx={{
              base: 0,
            }}
          >
            <ColorModeSwitcher />
            <Box display={{ md: "none", lg: "none" }}>
              <IconButton
                variant="outline"
                icon={<FiMenu />}
                colorScheme="blue"
                onClick={handleToggle}
                border="2px"
                aria-label={"Hamburger Menu"}
                _focus={{ boxShadow: "outline" }}
              />
            </Box>
            <Box
              display={{
                base: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              }}
            >
              {!user ? (
                <>
                  <ButtonGroup>
                    <Button
                      as={Link}
                      href="/login"
                      passHref
                      border="2px"
                      variant="outline"
                      size="md"
                      colorScheme="blue"
                      _focus={{ boxShadow: "outline" }}
                    >
                      Log in
                    </Button>
                    <Button
                      colorScheme="blue"
                      as={Link}
                      href="/signup"
                      passHref
                      variant="solid"
                      size="md"
                      _focus={{ boxShadow: "outline" }}
                    >
                      Sign up
                    </Button>
                  </ButtonGroup>
                </>
              ) : (
                <>
                  <HStack gap="2">
                    <Button
                      colorScheme="blue"
                      as={Link}
                      href="/app/dashboard"
                      passHref
                      variant="solid"
                      size="md"
                      _focus={{ boxShadow: "outline" }}
                    >
                      {`Continue as ${
                        user?.displayName.split(" ")[0] ?? "Test User"
                      }`}
                    </Button>
                    <Menu>
                      <MenuButton
                        as={Avatar}
                        aria-label="User Account"
                        size="sm"
                        cursor="pointer"
                        name={user?.displayName ?? "Test"}
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
                      </MenuList>
                    </Menu>
                  </HStack>
                </>
              )}
            </Box>
          </Stack>
        </Flex>
        <CollapseMenu isOpen={isOpen} setOpen={handleToggle} />
      </Box>
    </React.Fragment>
  );
};

export default Header;
