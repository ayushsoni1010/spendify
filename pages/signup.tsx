// Basic Imports
import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

// Chakra UI Imports
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

// Components Imports
import { useAuth } from "@/context/auth/AuthContext";

const Signup: NextPage = () => {
  const router = useRouter();
  const { user, signup } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();
    console.log(data.email, data.password, 1010);
    try {
      await signup(data.email, data.password);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Box mx="auto">
        <Text fontSize="md" mx="auto">
          Signup
        </Text>
        <form onSubmit={handleSignup}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={data.email}
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              required
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={data.password}
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              required
              placeholder="Enter your password"
            />
          </FormControl>
          <Button variant="outline" type="submit">
            Sign up
          </Button>
        </form>
      </Box>
    </React.Fragment>
  );
};

export default Signup;
