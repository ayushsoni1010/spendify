import React from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Box>This is the dashborad page</Box>
    </React.Fragment>
  );
};

export default Dashboard;
