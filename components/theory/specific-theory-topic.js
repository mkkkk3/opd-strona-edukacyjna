import React from "react";
import { useRouter } from "next/router";
import { mainTheoryTree, findNodeById } from "../../helpers/tree";
import { InlineMath } from "react-katex";
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

function SpecificTheoryTopic() {
  const router = useRouter();
  const { teoriaId } = router.query;

  const node =
    typeof teoriaId === "string"
      ? findNodeById(mainTheoryTree, teoriaId)
      : null;

  const isValidNode = node && node !== "- - -";
  const contentElement = isValidNode && node.component;

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
                          onClick={() => router.push(`/teoria/${topic.id}`)}
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
                                  onClick={() =>
                                    router.push(`/teoria/${section.id}`)
                                  }
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
                {contentElement ? (
                  contentElement
                ) : (
                  <p className="text-red-700 font-typewriter">
                    incorrect topic
                  </p>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SpecificTheoryTopic;
