// Basic Imports
import React, { PropsWithChildren } from "react";

// Chakra UI Imports
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

// Icon Imports
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitcher: React.FunctionComponent<PropsWithChildren> = (
  props: any
) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <React.Fragment>
      <Box>
        <IconButton
          aria-label={`Switch to ${colorMode} mode`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={toggleColorMode}
          icon={useColorModeValue(<FaMoon />, <FaSun />)}
          {...props}
        />
      </Box>
    </React.Fragment>
  );
};

export default ColorModeSwitcher;
