import MainTheory from "../../components/theory/main-theory";
import Head from "next/head";
import React from "react";

function TheoryMainPage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>OPD - Optymalizacja Procesów Dyskretnych - Teoria</title>
        <meta
          name="description"
          content="Poznaj teoretyczną stronę optymalizacji procesów dyskretnych"
        />
      </Head>
      <MainTheory />
    </React.Fragment>
  );
}

export default TheoryMainPage;
