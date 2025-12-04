import Head from "next/head";
import React from "react";
import MainPage from "../components/homepage/homepage";

function HomePage(props) {
  return (
    <React.Fragment>
      <div>
        <Head>
          <title>OPD - Optymalizacja Procesów Dyskretnych</title>
          <meta
            name="description"
            content="Witaj w aplikacji edukacyjnej OPD - Optymalizacja Procesów Dyskretnych"
          />
        </Head>
        <MainPage />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
