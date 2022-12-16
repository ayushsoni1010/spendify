// Basic Imports
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Chakra UI Imports
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Collapse,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

// Components Imports
import { useAuth } from "@/context/auth/AuthContext";
import { linkDetails } from "./__linkDeatils";

// Icon Imports
import { GrUserSettings } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";

interface SidebarProps {
  isOpen: boolean;
  setOpen: () => void;
}

const CollapseMenu: React.FunctionComponent<SidebarProps> = ({
  isOpen,
  setOpen,
}) => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const logoutUser = () => {
    logout();
    router.reload();
    router.push("/");
    setOpen();
  };

  return (
    <React.Fragment>
      <Collapse in={isOpen}>
        <Box
          display={{
            base: "none",
            lg: "none",
            md: "none",
            sm: "flex",
            xs: "flex",
          }}
          flexDir="column"
          m="5"
          p="5"
          borderRadius="md"
          minH="lg"
          justifyContent="space-between"
          bg={useColorModeValue("black", "gray.700")}
        >
          <Stack
            display={{
              base: "none",
              lg: "none",
              md: "none",
              sm: "flex",
              xs: "flex",
            }}
            flexDir="column"
            w="full"
          >
            {linkDetails.map(
              (
                item: { link: any; name: any },
                index: React.Key | null | undefined
              ) => (
                <Button
                  key={index}
                  as={Link}
                  variant={"ghost"}
                  size="sm"
                  onClick={setOpen}
                  colorScheme="blue"
                  href={item.link}
                  passHref
                  _focus={{ boxShadow: "outline" }}
                >
                  {item.name}
                </Button>
              )
            )}
          </Stack>
          <Box
            display={{
              base: "none",
              md: "none",
              sm: "flex",
              xs: "flex",
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
                    size={{
                      base: "md",
                      xl: "md",
                      lg: "md",
                      sm: "sm",
                      xs: "sm",
                    }}
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
                    size={{
                      base: "md",
                      xl: "md",
                      lg: "md",
                      sm: "sm",
                      xs: "sm",
                    }}
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
                    size={{
                      base: "md",
                      xl: "md",
                      lg: "md",
                      sm: "sm",
                      xs: "sm",
                    }}
                    _focus={{ boxShadow: "outline" }}
                  >
                    {`Continue as ${user.displayName ?? "Test User"}`}
                  </Button>
                  <Menu>
                    <MenuButton
                      as={Avatar}
                      aria-label="User Account"
                      size="sm"
                      p="2"
                      cursor="pointer"
                      name={user?.displayName ?? "Test User"}
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
        </Box>
      </Collapse>
    </React.Fragment>
  );
};

export default CollapseMenu;
