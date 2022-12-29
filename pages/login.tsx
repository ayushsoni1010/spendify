// Basic Imports
import React, { useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

// Library Imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Chakra UI Imports
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";

// Components Imports
import BaseSeo from "@/modules/components/BaseSeo";
import { useAuth } from "@/context/auth/AuthContext";
import { helpers } from "@/helpers/helpers";

// Types Imports
import { LoginDataType, LoginErrorType } from "@/common/types/auth/login";

const Login: NextPage = () => {
  const router = useRouter();

  const { user, login } = useAuth();

  const [data, setData] = useState<LoginDataType>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<LoginErrorType>({
    isError: false,
    errorEmailMessage: "",
    errorPasswordMessage: "",
  });

  const handleChangeEmail = (e: { target: { value: any } }) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };

  const handleChangePassword = (e: { target: { value: any } }) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };

  const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!data.email && !data.password) {
      setError({
        isError: true,
        errorEmailMessage: "Email is required",
        errorPasswordMessage: "Password is required",
      });
    }

    const { email, password } = data;

    if (helpers.validEmail(email) && data.email && password) {
      try {
        await login(email, password);
        router.push("/app/dashboard");
      } catch (err: any) {
        switch (err.code) {
          case "auth/Invalid-email":
            setError({
              ...error,
              isError: true,
              errorEmailMessage: "Please enter correct email address",
            });
            helpers.alertToastHandling(
              "Invalid email! Please enter your correct email"
            );
            break;

          case "auth/user-disabled":
            setError({
              ...error,
              isError: true,
            });
            helpers.alertToastHandling(
              "Unexpected error! Please try again later"
            );
            break;

          case "auth/user-not-found":
            setError({
              ...error,
              isError: true,
            });
            helpers.alertToastHandling(
              "User not found! Make sure you have signed up"
            );
            break;

          case "auth/wrong-password":
            setError({
              ...error,
              isError: true,
              errorPasswordMessage: "Please enter correct password",
            });
            helpers.alertToastHandling(
              "Wrong Password! Please enter correct password"
            );
            break;
        }
      }
    }
  };

  return (
    <React.Fragment>
      <BaseSeo title="Login" />
      <Container w={"auto"} mt={24}>
        <Heading textAlign="center" fontSize="5xl" my="4">
          Login
        </Heading>
        <Box>
          <form onSubmit={handleLoginSubmit}>
            {/***** Email Input *****/}
            <VStack>
              <FormControl
                isRequired={error.isError}
                isInvalid={
                  error.isError && error.errorEmailMessage.length !== 0
                }
              >
                <FormLabel htmlFor="Email">Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  variant="filled"
                  value={data.email}
                  _focus={{ boxShadow: "outline" }}
                  onChange={handleChangeEmail}
                  placeholder="Email"
                />
                {error.isError ? (
                  <FormErrorMessage>{error.errorEmailMessage}</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              {/***** Password Input *****/}
              <FormControl
                isRequired={error.isError}
                isInvalid={
                  error.isError && error.errorPasswordMessage.length !== 0
                }
              >
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  variant="filled"
                  value={data.password}
                  onChange={handleChangePassword}
                  _focus={{ boxShadow: "outline" }}
                  placeholder="Password"
                />
                {error.isError ? (
                  <FormErrorMessage>
                    {error.errorPasswordMessage}
                  </FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              {/* Login Button */}
              <Button
                w="full"
                type="submit"
                variant="solid"
                colorScheme="blue"
                _focus={{
                  transform: "scale(1.02)",
                  boxShadow: "outline",
                }}
              >
                Log In
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
};

export default Login;
