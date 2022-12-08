import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../common/utils/theme";
import "../styles/globals.css";
import AuthContextProvider from "../context/AuthContext";
import ProtectedRoutes from "../routers/ProtectedRouter";
import { useRouter } from "next/router";

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
