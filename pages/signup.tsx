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
  Container,
  VStack,
  FormErrorMessage,
  CircularProgress,
  Heading,
} from "@chakra-ui/react";

// Components Imports
import BaseSeo from "@/modules/components/BaseSeo";
import { useAuth } from "@/context/auth/AuthContext";
import { helpers } from "@/helpers/helpers";

// Types Imports
import { SignUpDataType, SignUpErrorType } from "@/common/types/auth/signup";

const Signup = () => {
  const router = useRouter();
  const { user, signup } = useAuth();

  const [data, setData] = useState<SignUpDataType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<SignUpErrorType>({
    isError: false,
    errorFirstNameMessage: "",
    errorLastNameMessage: "",
    errorEmailMessage: "",
    errorPasswordMessage: "",
  });

  const handleChangeFirstName = (e: { target: { value: any } }) => {
    setData({
      ...data,
      firstName: e.target.value,
    });
  };

  const handleChangeLastName = (e: { target: { value: any } }) => {
    setData({
      ...data,
      lastName: e.target.value,
    });
  };

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

  const handleSignUpSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const { firstName, lastName, email, password } = data;

    if (!email || !password || !firstName || !lastName) {
      setError({
        isError: true,
        errorFirstNameMessage: "First name is required",
        errorLastNameMessage: "Last name is required",
        errorEmailMessage: "Email is required",
        errorPasswordMessage: "Password is required",
      });
    }

    if (
      helpers.validEmail(email) &&
      email &&
      password &&
      firstName &&
      lastName
    ) {
      try {
        await signup(firstName, lastName, email, password);
        router.push("/login");
        helpers.alertToastHandling("You are successfully registered");
      } catch (err: any) {
        console.log(err.code, 1010);
        setError({
          isError: true,
          errorFirstNameMessage: "Please enter the first name",
          errorLastNameMessage: "Please enter the last name",
          errorEmailMessage: "Please enter correct email address",
          errorPasswordMessage: "Please enter correct password",
        });
        helpers.alertToastHandling("error?.response?.data?.message");
      }
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <BaseSeo title="Sign Up" />
      <Container w={"auto"} mt={24}>
        <Heading textAlign="center" fontSize="5xl" my="4">
          Sign Up
        </Heading>
        <Box>
          <form onSubmit={handleSignUpSubmit}>
            <VStack>
              {/***** First Name Input *****/}
              <FormControl
                isRequired={error.isError}
                isInvalid={
                  error.isError && error.errorFirstNameMessage.length !== 0
                }
              >
                <FormLabel htmlFor="first-name">First Name</FormLabel>
                <Input
                  type={"text"}
                  name="first-name"
                  id="first-name"
                  variant="filled"
                  value={data.firstName}
                  onChange={handleChangeFirstName}
                  placeholder="Enter your first name"
                  _focus={{ boxShadow: "outline" }}
                />
                {error.isError ? (
                  <FormErrorMessage>
                    {error.errorFirstNameMessage}
                  </FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              {/***** Last Name Input *****/}
              <FormControl
                isRequired={error.isError}
                isInvalid={
                  error.isError && error.errorLastNameMessage.length !== 0
                }
              >
                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                <Input
                  type={"text"}
                  name="last-name"
                  id="last-name"
                  variant="filled"
                  value={data.lastName}
                  onChange={handleChangeLastName}
                  placeholder="Enter your last name"
                  _focus={{ boxShadow: "outline" }}
                />
                {error.isError ? (
                  <FormErrorMessage>
                    {error.errorLastNameMessage}
                  </FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              {/***** Email Input *****/}
              <FormControl
                isRequired={error.isError}
                isInvalid={
                  error.isError && error.errorEmailMessage.length !== 0
                }
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type={"email"}
                  name="email"
                  id="email"
                  variant="filled"
                  value={data.email}
                  onChange={handleChangeEmail}
                  placeholder="Enter your email address"
                  _focus={{ boxShadow: "outline" }}
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
                  type={"password"}
                  name="password"
                  id="password"
                  variant="filled"
                  value={data.password}
                  onChange={handleChangePassword}
                  placeholder="Enter your password"
                  _focus={{ boxShadow: "outline" }}
                />
                {error.isError ? (
                  <FormErrorMessage>
                    {error.errorPasswordMessage}
                  </FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              {/* Sign up Button */}
              <Button
                w="full"
                type="submit"
                variant="solid"
                size="md"
                colorScheme="blue"
                _focus={{ transform: "scale(1.02)", boxShadow: "outline" }}
              >
                {loading ? (
                  <CircularProgress isIndeterminate size="24px" color="red" />
                ) : (
                  "Sign Up"
                )}
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Signup;
