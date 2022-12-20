// Basic Imports
import React from "react";
import { useRouter } from "next/router";

// Chakra UI Imports
import { Box, BoxProps } from "@chakra-ui/react";

const BaseBox: React.FunctionComponent<BoxProps> = ({ children, ...props }) => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Box
        px={
          router.pathname.startsWith("/app")
            ? { base: 4, md: 6, lg: 10, sm: 4, xs: 4, xl: 10 }
            : { base: 6, md: 6, lg: 20, sm: 10, xl: 28 }
        }
        pt={
          router.pathname.startsWith("/app")
            ? { base: 10, lg: 10, md: 10, sm: 10, xs: 10 }
            : { base: 8, sm: 16, md: 20 }
        }
        ml={
          router.pathname.startsWith("/app")
            ? { base: 60, xl: 60, lg: 60, md: 64, sm: 0, xs: 0 }
            : {}
        }
        my={
          router.pathname.startsWith("/app")
            ? { base: 0, lg: 0, md: 0, sm: 10, xs: 10 }
            : {}
        }
        mb={
          router.pathname.startsWith("/app")
            ? { base: 0, lg: 0, md: 0, sm: 40, xs: 40 }
            : {}
        }
        pb="0"
        {...props}
      >
        {children}
      </Box>
    </React.Fragment>
  );
};

export default BaseBox;
