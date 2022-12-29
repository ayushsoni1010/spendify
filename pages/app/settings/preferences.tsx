// Basic Imports
import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

// Chakra UI Imports
import { Box } from "@chakra-ui/react";

// Components Imports
import Sidebar from "@/common/components/Sidebar";
import BaseBox from "@/modules/components/BaseBox";
import BaseSeo from "@/modules/components/BaseSeo";

const Preferences: NextPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <BaseSeo title={["Settings", "Preferences"]} />
      <Sidebar />
      <BaseBox></BaseBox>
    </React.Fragment>
  );
};

export default Preferences;
