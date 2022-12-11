// Basic Imports
import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

// Chakra UI Imports
import { Box } from "@chakra-ui/react";

// Components Imports
import Sidebar from "@/common/components/Sidebar";

const Dashboard: NextPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Sidebar />
      <Box>{router.pathname}</Box>
    </React.Fragment>
  );
};

export default Dashboard;
