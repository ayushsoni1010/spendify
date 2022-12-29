// Basic Imports
import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

// Chakra UI Imports
import { Box } from "@chakra-ui/react";

// Components Imports
import BaseSeo from "@/modules/components/BaseSeo";
import Sidebar from "@/common/components/Sidebar";

const Budgets: NextPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <BaseSeo title={["Dashboard", "Budgets"]} />
      <Sidebar />
      <Box></Box>
    </React.Fragment>
  );
};

export default Budgets;
