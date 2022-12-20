// Basic Imports
import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

// Chakra UI Imports
import { Box } from "@chakra-ui/react";

// Components Imports
import Sidebar from "@/common/components/Sidebar";
import BaseBox from "@/modules/components/BaseBox";

const Category: NextPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Sidebar />
      <BaseBox></BaseBox>
    </React.Fragment>
  );
};

export default Category;
