import React, { useState } from "react";
import Link from "next/link";
// import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import {
  Box,
  Flex,
  Stack,
  Button,
  Text,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../common/components/Logo";
import NavItems from "./NavItems";
import CollapseMenu from "./CollapseMenu";

const Header: React.FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    console.log("changed");
    setOpen((prevState: boolean) => !prevState);
  };
  return (
    <React.Fragment>
      <Box position="fixed" top="0" zIndex="10" minW="100%" px="10">
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
                align="center"
                cursor="pointer"
                gap="2"
              >
                <Logo />
                <Text
                  fontFamily={"heading"}
                  fontSize="2xl"
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
            {/* <ColorModeSwitcher
              justifySelf="flex-end"
              display={{ base: "none", md: "inline-flex", sm: "inline-flex" }}
            /> */}
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
            <ButtonGroup display={{ base: "flex", md: "flex", sm: "none" }}>
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
          </Stack>
        </Flex>
        <CollapseMenu isOpen={isOpen} setOpen={handleToggle} />
      </Box>
    </React.Fragment>
  );
};

export default Header;
