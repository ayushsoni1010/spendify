// Basic Imports
import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

// Chakra UI Imports
import {
  Box,
  Stack,
  Text,
  Avatar,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";

// Components Imports
import BaseSeo from "@/modules/components/BaseSeo";
import Sidebar from "@/common/components/Sidebar";
import BaseBox from "@/modules/components/BaseBox";
import { useAuth } from "@/context/auth/AuthContext";

const Profile: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <React.Fragment>
      <BaseSeo title={["Settings", "Profile"]} />
      <Sidebar />
      <BaseBox>
        <Stack>
          <Text fontWeight="600" fontSize={{ base: "2xl" }}>
            Profile Settings
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
              <Input type="email" disabled value={user?.email} />
            </Box>
            <Box mt="4">
              <Text fontWeight="600" my="2">
                Password
              </Text>
              <Input type="password" disabled value={user?.displayName} />
            </Box>
          </Box>
        </Stack>
      </BaseBox>
    </React.Fragment>
  );
};

export default Profile;
