import React from "react";
import { useRouter } from "next/router";
import { mainTheoryTree } from "../../helpers/tree";
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

function MainTheory() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/teoria/${id}`);
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
                <MathText text="Spis treści – Teoria" />
              </h2>

              <div className="mt-4 md:max-h-[calc(100vh-8rem)] md:overflow-y-auto md:pr-1">
                <nav aria-label="Nawigacja po drzewie teorii">
                  <ul className="space-y-3">
                    {mainTheoryTree.theory.map((topic) => (
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
                      <span className="bg-page3 px-2 py-1 rounded-md">
                        <MathText text={"$/teoria$"} />
                      </span>{" "}
                      znajduje się uporządkowany przegląd kluczowych zagadnień
                      związanych z teorią szeregowania zadań i procesami
                      optymalizacyjnymi. Obejmuje on charakterystykę problemów
                      deterministycznych i stochastycznych, różnice między
                      podejściami on-line i off-line oraz praktyczne
                      uwarunkowania, takie jak koszt obliczeniowy, czynnik
                      ludzki i ograniczenia ekonomiczne. W kolejnych częściach
                      omówiono podstawowe pojęcia związane z zadaniami,
                      maszynami i operacjami, a także zmienne czasowe używane do
                      opisu harmonogramów. Ważnym elementem działu jest
                      klasyfikacja zagadnień szeregowania w notacji{" "}
                      <span className=" px-1 rounded-md">
                        <MathText text={"$α∣β∣γ$"} />
                      </span>
                      oraz zestawienie głównych kryteriów optymalizacji i ich
                      wzajemnych zależności.
                    </div>
                  </div>
                  <div className="opacity-0 min-[1150px]:opacity-100 absolute bottom-0 right-0 w-72 h-72">
                    <Image
                      src="/cat_navigation.gif"
                      alt="Image"
                      placeholder="blur"
                      blurDataURL="/cat_navigation.gif"
                      width={355}
                      height={261}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="opacity-0 min-[1150px]:opacity-100 absolute bottom-20 left-0 w-48 h-48">
                    <Image
                      src="/bird.gif"
                      alt="Image"
                      placeholder="blur"
                      blurDataURL="/bird.gif"
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

export default MainTheory;
