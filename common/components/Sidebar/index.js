import {
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Stack,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import Logo from '../Logo';
import { sidebarDetails } from './__sidebarDetails';

const Sidebar = () => {
  return (
    <React.Fragment>
      <Box px="4" py="6" w="fit-content" h="100vh" bgColor="">
        <Stack
          flex={{ base: 1, md: 1 }}
          justify="space-between"
          direction="row"
          align="center"
          cursor="pointer"
          px="1"
        >
          <Link
            as='a'
            href="/"
            textDecoration="none"
            style={{ textDecoration: 'none' }}
          >
            <Flex
              justify="start"
              direction="row"
              align="center"
              cursor="pointer"
              gap="2"
            >
              <Logo />
              <Text
                fontFamily={'heading'}
                fontSize="2xl"
                fontWeight="extrabold"
                colorScheme="white"
              >
                Spendify
              </Text>
            </Flex>
          </Link>
        </Stack>
        <Stack my="10">
          {sidebarDetails.map((item, index) => {
            return (
              <List
                key={index}
                _hover={{ bg: 'blue.400', color: 'white' }}
                p="1"
                px="2"
                borderRadius="4px"
              >
                <Link
                  as={NavLink}
                  to={item.url}
                  textDecoration="none"
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem
                    _hover={{ color: 'white' }}
                    fontSize="sm"
                    fontWeight="500"
                  >
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
        <ColorModeSwitcher />
      </Box>
    </React.Fragment>
  );
};
export default Sidebar;
