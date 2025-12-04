import React from "react";
import useMeasure from "react-use-measure";
import { useIsDesktop } from "../../../helpers/helpers";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useRouter } from "next/router";

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

function Topic({ text, onClick }) {
  return (
    <div className="flex flex-row justify-start items-center me-3">
      <div className="ms-8 w-24 h-12">
        <div className="w-full h-1/2 border-l-4 border-b-4 border-grainPageMenu" />
      </div>

      <button
        type="button"
        onClick={onClick}
        className="
          ms-3
          w-fit
          bg-grain bg-grainPageMenu text-page1 font-extrabold font-typewriter
          tracking-wide text-sm lg:text-base
          p-3 my-2 rounded-xl
          transition-shadow duration-200 ease-out
          hover:scale-110 hover:shadow-2xl hover:translate-x-7
          cursor-pointer
        "
      >
        <MathText text={text} />
      </button>
    </div>
  );
}

function Subtopic({ text, onClick }) {
  return (
    <div className="flex flex-row justify-start items-center me-3">
      <div className="ms-[6rem] md:ms-[9.5rem] w-24 h-12">
        <div className="w-full h-1/2 border-l-4 border-b-4 border-grainPageMenu" />
      </div>

      <button
        type="button"
        onClick={onClick}
        className="
          ms-3
          opacity-75
          w-fit
          bg-grain bg-grainPageMenu text-page1 font-extrabold font-typewriter
          tracking-wide text-sm lg:text-base
          p-3 my-2 rounded-xl
          transition-shadow duration-200 ease-out
          hover:scale-110 hover:shadow-2xl hover:translate-x-7
          cursor-pointer
        "
      >
        <MathText text={text} />
      </button>
    </div>
  );
}

function ContentTree(props) {
  const [gridRef, { height }] = useMeasure();
  const isLargeDesktop = useIsDesktop(1280);
  const router = useRouter();

  const { tree, treeName, cardText, bird, cat, basePath } = props;

  const handleClick = (id) => {
    if (!id || !basePath) return;
    router.push(`${basePath}/${id}`);
  };

  return (
    <React.Fragment>
      <div className="w-full h-[8.2rem] md:h-[5.9rem] relative bg-page3">
        <div className="absolute z-10 w-full h-full">
          <span className="flex justify-center py-4 uppercase font-comic tracking-widest font-extrabold text-5xl lg:text-7xl text-pageMenu text-center">
            {cardText}
          </span>
        </div>
        <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain" />
        <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain" />
      </div>

      <div className="w-full relative bg-page1 py-16">
        <div className="relative">
          <div style={{ height }} />
          <div ref={gridRef} className="absolute top-0 left-0 right-0 z-10">
            <div className="w-full h-full">
              <div className="w-[11rem] md:w-[22rem] bg-grain bg-grainPageMenu text-page1 font-extrabold font-typewriter tracking-wide text-sm lg:text-base p-3 my-3 ms-6 rounded-xl">
                {treeName}
              </div>

              {tree?.theory?.map((topic) => (
                <React.Fragment key={topic.id}>
                  <Topic
                    text={topic.title}
                    onClick={() => handleClick(topic.id)}
                  />
                  {topic?.content?.map((section) => (
                    <Subtopic
                      key={section.id}
                      text={section.subtitle}
                      onClick={() => handleClick(section.id)}
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>

            {isLargeDesktop && (
              <React.Fragment>
                <div className="bottom-[-4rem] absolute w-full h-[25rem] pointer-events-none">
                  <div className="w-full h-full flex justify-end items-end pe-10">
                    {cat}
                  </div>
                </div>
                <div className="top-[-4rem] absolute w-full h-[25rem] pointer-events-none">
                  <div className="w-full h-full flex justify-end items-end pe-10">
                    {bird}
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>

        <div className="absolute inset-0 opacity-100 brightness-200 bg-grain pointer-events-none" />
        <div className="absolute inset-0 opacity-100 brightness-200 bg-grain pointer-events-none" />
      </div>
    </React.Fragment>
  );
}

export default ContentTree;
