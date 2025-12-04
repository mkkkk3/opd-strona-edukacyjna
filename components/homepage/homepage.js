import React from "react";
import MainWelcome from "./structure/main-welcomve";
import { useIsDesktop } from "../../helpers/helpers";
import Comparison from "./structure/comparison";
import ContentTree from "./structure/content-tree";
import { mainAlgorithmTree, mainTheoryTree } from "../../helpers/tree";
import Image from "next/image";

function MainPage() {
  const isDesktop = useIsDesktop(768);

  const birdOne = (
    <Image
      src="/bird.gif"
      alt="Image"
      placeholder="blur"
      blurDataURL="/bird.gif"
      width={355}
      height={261}
      className="scale-[60%] h-full w-[26rem] object-cover"
    />
  );

  const catOne = (
    <Image
      src="/cat_tree.gif"
      alt="Image"
      placeholder="blur"
      blurDataURL="/cat_tree.gif"
      width={355}
      height={261}
      className="h-[80%] w-[26rem] object-cover"
    />
  );

  const birdTwo = (
    <Image
      src="/bird2.gif"
      alt="Image"
      placeholder="blur"
      blurDataURL="/bird2.gif"
      width={355}
      height={261}
      className="scale-[60%] h-full w-[26rem] object-cover"
    />
  );

  const catTwo = (
    <Image
      src="/cat_tree_up.gif"
      alt="Image"
      placeholder="blur"
      blurDataURL="/cat_tree_up.gif"
      width={355}
      height={261}
      className="h-[85%] w-[36rem] object-cover pe-48"
    />
  );

  return (
    <React.Fragment>
      <MainWelcome isDesktop={isDesktop} />
      <Comparison />
      <ContentTree
        tree={mainTheoryTree}
        basePath="/teoria"
        treeName={"Teoria"}
        cardText={"Drzewo Teorii"}
        bird={birdOne}
        cat={catOne}
      />
      <ContentTree
        tree={mainAlgorithmTree}
        basePath="/algorytmy"
        treeName={"Algorytmy"}
        cardText={"Drzewo Algorytmów"}
        bird={birdTwo}
        cat={catTwo}
      />
    </React.Fragment>
  );
}

export default MainPage;
