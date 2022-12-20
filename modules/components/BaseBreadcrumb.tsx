// Basic Imports
import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const BaseBreadcrumb: React.FunctionComponent = (children: any) => {
  return (
    <React.Fragment>
      <Box bgColor="white" p="2">
        {...children}
      </Box>
    </React.Fragment>
  );
};
export default BaseBreadcrumb;
