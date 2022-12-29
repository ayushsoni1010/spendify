// Basic Imports
import React from "react";
import Head from "next/head";

// Types Imports

const BaseSeo: React.FunctionComponent = (props: any) => {
  return (
    <React.Fragment>
      <Head>
        <title>{["Spendify", props.title].flat().join(" ― ")}</title>
      </Head>
    </React.Fragment>
  );
};

export default BaseSeo;
