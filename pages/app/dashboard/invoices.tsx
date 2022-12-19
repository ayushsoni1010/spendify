// Basic Imports
import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

// Chakra UI Imports
import { Box } from "@chakra-ui/react";

// Components Imports
import Sidebar from "@/common/components/Sidebar";
import BaseBox from "@/modules/components/BaseBox";

const Dashboard: NextPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Sidebar />
      <BaseBox
        pt={{ base: "10", lg: "10", md: "10" }}
        ml={{ base: 40, xl: 40, lg: 48, md: 64, sm: 0, xs: 0 }}
        my={{ base: 0, lg: 0, md: 0, sm: 10, xs: 10 }}
      ></BaseBox>
    </React.Fragment>
  );
};

export default Dashboard;
