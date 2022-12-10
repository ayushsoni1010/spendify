// Basic Imports
import { Html, Head, Main, NextScript } from "next/document";

// Chakra UI Imports
import { ColorModeScript } from "@chakra-ui/react";

// Components Imports
import { theme } from "@/common/utils/theme";

const Document: React.FunctionComponent = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
