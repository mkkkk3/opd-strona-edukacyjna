import MainAlgorithms from "../../components/algorithms/main-algorithms";
import Head from "next/head";
import React from "react";

function algorithmsPage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>OPD - Optymalizacja Procesów Dyskretnych - Algorytmy</title>
        <meta
          name="description"
          content="Wytłumaczenie i działanie poszczególnych algorytmów"
        />
      </Head>
      <MainAlgorithms />
    </React.Fragment>
  );
}

export default algorithmsPage;
