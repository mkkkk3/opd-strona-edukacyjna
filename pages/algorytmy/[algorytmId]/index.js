import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import SpecificAlgorithmsTopic from "../../../components/algorithms/specific-algorithms-topic";

function SinglealgorithmPage() {
  const router = useRouter();
  const { algorytmId } = router.query;

  return (
    <React.Fragment>
      <Head>
        <title>OPD - Optymalizacja Procesów Dyskretnych</title>
        <meta name="description" content="strona edukacyjna" />
      </Head>
      <SpecificAlgorithmsTopic />
    </React.Fragment>
  );
}

export default SinglealgorithmPage;
