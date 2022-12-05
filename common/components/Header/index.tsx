import React from 'react';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Box,
  Flex,
  Link,
  Stack,
  Button,
  Text,
  ButtonGroup,
} from '@chakra-ui/react';

import logo from '../../assets/svgs/spendify-logo.svg';
import Logo from '../Logo';

const Header: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Box position="fixed" top="0" zIndex="10" minW="100%">
        <Flex
          backdropFilter="blur(4px)"
          border="none"
          minH="60px"
          py={{ base: 2, md: 3 }}
          px={{ base: 4, md: 7 }}
          alignSelf="center"
        >
          <Link
            as={NavLink}
            to="/"
            textDecoration="none"
            style={{ textDecoration: 'none' }}
          >
            <Stack
              flex={{ base: 1, md: 1 }}
              justify="start"
              direction="row"
              align="center"
              spacing="2"
              cursor="pointer"
            >
              <Logo />
              <Text
                fontFamily={'heading'}
                fontSize="2xl"
                fontWeight="extrabold"
              >
                Spendify
              </Text>
            </Stack>
          </Link>
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
            <ColorModeSwitcher
              justifySelf="flex-end"
              display={{ base: 'none', md: 'inline-flex' }}
            />
            <ButtonGroup>
              <Button
                as={NavLink}
                to="/login"
                border="2px"
                variant="outline"
                size="md"
                colorScheme="blue"
              >
                Log in
              </Button>
              <Button
                // bgColor="blue.500"
                colorScheme="blue"
                as={NavLink}
                to="/signup"
                variant="solid"
                size="md"
              >
                Sign up
              </Button>
            </ButtonGroup>
          </Stack>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default Header;
