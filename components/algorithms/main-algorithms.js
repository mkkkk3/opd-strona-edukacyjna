import React from "react";
import { useRouter } from "next/router";
import { mainAlgorithmTree } from "../../helpers/tree";
import { InlineMath } from "react-katex";
import Image from "next/image";
import "katex/dist/katex.min.css";

function MathText({ text }) {
  const str = String(text ?? "");
  const parts = str.split(/(\$(?:[^$]+)\$)/g);

  return (
    <>
      {parts.map((part, idx) => {
        const match = part.match(/^\$(.*)\$/);
        if (match) {
          return <InlineMath key={idx} math={match[1]} />;
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </>
  );
}

function MainAlgorithms() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/algorytmy/${id}`);
  };

  return (
    <React.Fragment>
      <div className="relative w-full min-h-screen bg-page1">
        <div className="pointer-events-none absolute inset-0 opacity-100 brightness-200 bg-grain" />
        <div className="pointer-events-none absolute inset-0 opacity-100 brightness-200 bg-grain" />

        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row w-full">
            <aside
              className="
                w-full md:w-[25rem]
                bg-page3/10
                border-b md:border-b-0 md:border-r border-page3
                px-4 py-6 md:px-6 md:py-8
                md:sticky md:top-0 md:self-start
              "
            >
              <h2 className="text-lg md:text-xl font-typewriter font-extrabold text-black">
                <MathText text="Spis treści – Algorytmy" />
              </h2>

              <div className="mt-4 md:max-h-[calc(100vh-8rem)] md:overflow-y-auto md:pr-1">
                <nav aria-label="Nawigacja po drzewie teorii">
                  <ul className="space-y-3">
                    {mainAlgorithmTree.theory.map((topic) => (
                      <li key={topic.id}>
                        <button
                          type="button"
                          onClick={() => handleClick(topic.id)}
                          className="
                            w-full text-left
                            px-3 py-2 rounded-lg
                            bg-page3/60 hover:bg-page3
                            text-black font-typewriter font-bold
                            transition-colors duration-150
                          "
                        >
                          <MathText text={topic.title} />
                        </button>

                        {topic.content && (
                          <ul className="mt-2 space-y-1">
                            {topic.content.map((section) => (
                              <li key={section.id}>
                                <button
                                  type="button"
                                  onClick={() => handleClick(section.id)}
                                  className="
                                    w-full text-left
                                    ms-4 px-3 py-1.5 rounded-lg
                                    bg-page3/20 hover:bg-page3/50
                                    text-black/80 text-sm font-typewriter
                                    transition-colors duration-150
                                  "
                                >
                                  <MathText text={section.subtitle} />
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            <main className="flex-1 px-5 pb-6 md:px-10 md:pb-10">
              <div className="bg-page3/10 rounded-xl p-4 md:p-6">
                <div className="w-full h-[calc(100vh-10rem)] relative">
                  <div className="w-full h-full relative">
                    <div className="w-full h-full font-typewriter">
                      W dziale{" "}
                      <span className="bg-page4 px-2 py-1 rounded-md">
                        <MathText text={"$/algorytmy$"} />
                      </span>{" "}
                      znajdują się szczegółowe omówienia klasycznych metod
                      rozwiązywania problemów szeregowania zadań. Rozdział
                      otwiera część, w której omówione jest m.in. pojęcie
                      NP-trudności oraz rola generatorów liczb pseudolosowych
                      wykorzystywanych w algorytmach. Kolejne sekcje prezentują
                      rozwiązania najważniejszych klas problemów:
                      jednomaszynowych, przepływowych oraz gniazdowych. W części
                      dotyczącej problemów jednomaszynowych znajdują się m.in.
                      algorytmy Schrage’a, metoda brute force oraz programowanie
                      dynamiczne z nawrotami. W rozdziale poświęconym
                      permutacyjnym problemom przepływowym omówiono algorytm
                      Johnsona oraz podejścia wyczerpujące i typu Branch and
                      Bound. Na końcu znajduje się rozwiązanie problemu
                      gniazdowego oparte na algorytmie INSA.
                    </div>
                  </div>
                  <div className="opacity-0 min-[1150px]:opacity-100 absolute bottom-0 left-0 w-64 h-64">
                    <Image
                      src="/cat_tree_up.gif"
                      alt="Image"
                      placeholder="blur"
                      blurDataURL="/cat_tree_up.gif"
                      width={355}
                      height={261}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="opacity-0 min-[1150px]:opacity-100 absolute bottom-20 right-0 w-48 h-48">
                    <Image
                      src="/bird2.gif"
                      alt="Image"
                      placeholder="blur"
                      blurDataURL="/bird2.gif"
                      width={355}
                      height={261}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainAlgorithms;
