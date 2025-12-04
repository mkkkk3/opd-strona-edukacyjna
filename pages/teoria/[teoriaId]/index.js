import Head from "next/head";
import React from "react";
import SpecificTheoryTopic from "../../../components/theory/specific-theory-topic";

function SingleTheoryPage() {
  return (
    <React.Fragment>
      <Head>
        <title>OPD - Optymalizacja Procesów Dyskretnych</title>
        <meta name="description" content="teoria" />
      </Head>
      <SpecificTheoryTopic />
    </React.Fragment>
  );
}

export default SingleTheoryPage;
