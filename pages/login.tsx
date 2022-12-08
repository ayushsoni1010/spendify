import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Login: NextPage = () => {
  const router = useRouter();

  const { user, login } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(data.email, data.password, 1010);
    try {
      await login(data.email, data.password);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Box>
        <Text fontSize="md" mx="auto">
          Login
        </Text>
        <form onSubmit={handleLogin}>
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
            Login
          </Button>
        </form>
      </Box>
    </React.Fragment>
  );
};

export default Login;
