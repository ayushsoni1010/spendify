// Basic Imports
import React from "react";
import Head from "next/head";

// Types Imports
import { SeoType } from "@/common/types/components/BaseSeo/seo";

const BaseSeo: React.FunctionComponent<SeoType> = (props: SeoType) => {
  return (
    <React.Fragment>
      <Head>
        <title>{["Spendify", props.title].flat().join(" ― ")}</title>
      </Head>
    </React.Fragment>
  );
};

export default BaseSeo;
