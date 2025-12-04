import React from "react";
import Radio from "../../../components/layout/decorations/radio";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Flowers from "../../../components/layout/decorations/flowers";

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
        return (
          <span key={idx} style={{ whiteSpace: "pre-wrap" }}>
            {part}
          </span>
        );
      })}
    </>
  );
}

function JakOpisacHarmonogram({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>

      <div className="w-full h-full font-typewriter">
        Harmonogram można opisać na wiele sposobów, ale w tym ujęciu kluczową
        rolę odgrywa czas oczekiwania przed każdą operacją. Jeśli znamy
        wszystkie wartości{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$W_{i,j}$"} />
        </span>
        , czyli ile czeka <MathText text={"$j$"} />
        -ta operacja zadania <MathText text={"$i$"} /> zanim trafi na maszynę,
        to w praktyce znamy cały harmonogram. Zbiór tych wartości pozwala
        odtworzyć momenty rozpoczęcia wszystkich operacji, a więc i momenty ich
        zakończenia.
      </div>

      <Radio />

      <div className="w-full h-full font-typewriter">
        <span className="block opacity-0">x</span>W tym sensie kompletny
        harmonogram dla danego problemu można w pełni opisać, podając zestaw
        czasów oczekiwania <MathText text={"$W_{i,j}$"} />. Inne wielkości
        (takie jak czasy zakończenia zadań czy czasy przebywania w systemie) są
        już tylko pochodnymi tych wartości.
      </div>

      <Flowers />
    </React.Fragment>
  );
}

export default JakOpisacHarmonogram;
