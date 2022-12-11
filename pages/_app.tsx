// Basic Imports
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

// Chakra UI Imports
import { ChakraProvider } from "@chakra-ui/react";

// Components Imports
import AuthContextProvider from "@/context/auth/AuthContext";
import ProtectedRoutes from "@/routers/ProtectedRouter";
import { theme } from "@/common/utils/theme";

// Styles Import
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noAuthRequired = ["/", "/login", "/signup"];
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        {noAuthRequired.includes(router.pathname) ? (
          <>
            <Component {...pageProps} />
          </>
        ) : (
          <>
            <ProtectedRoutes>
              <Component {...pageProps} />
            </ProtectedRoutes>
          </>
        )}
      </ChakraProvider>
    </AuthContextProvider>
  );
}
