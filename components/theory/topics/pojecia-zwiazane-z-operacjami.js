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

function PojeciaZwiazaneZOperacjami({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>

      <div className="w-full h-full font-typewriter">
        Oprócz samych zadań opisuje się także pojedyncze operacje, z których
        zadania się składają. Każda operacja może być wykonywana na różnych
        maszynach lub na różne sposoby, dlatego potrzebne są dodatkowe
        oznaczenia.
      </div>

      <span className="block opacity-0">x</span>

      <div className="w-full h-full font-typewriter">
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$p_{ij}$"} />
        </span>{" "}
        – czas wykonania operacji <MathText text={"$j$"} /> przy użyciu sposobu
        (lub na maszynie) <MathText text={"$i$"} />. Jeśli ta sama operacja może
        być realizowana na różnych maszynach albo z użyciem różnych technologii,
        to jej czas trwania będzie inny dla każdego wariantu{" "}
        <MathText text={"$i$"} />.
      </div>

      <div className="w-full h-full font-typewriter mt-2">
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$S_j$"} />
        </span>{" "}
        – termin rozpoczęcia wykonywania operacji <MathText text={"$j$"} />. Nie
        jest ustalony z góry, bo wynika z przyjętego harmonogramu oraz z tego,
        kiedy dostępna jest maszyna i kiedy zakończyły się wcześniejsze
        operacje. Jest to jedna ze zmiennych decyzyjnych modelu.
      </div>

      <div className="w-full h-full font-typewriter mt-2">
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$C_j$"} />
        </span>{" "}
        – termin zakończenia wykonywania operacji <MathText text={"$j$"} />.
        Liczy się go jako sumę czasu rozpoczęcia <MathText text={"$S_j$"} />{" "}
        oraz czasu trwania <MathText text={"$p_{ij}$"} /> w wybranym wariancie
        wykonywania.
      </div>

      <span className="block opacity-0">x</span>

      <div className="w-full h-full font-typewriter">
        Dzięki tym pojęciom można dokładnie opisać, kiedy konkretna operacja
        startuje, ile trwa i kiedy się kończy, co jest kluczowe przy budowaniu
        całego harmonogramu z poziomu pojedynczych kroków technologicznych.
      </div>

      <Flowers />
    </React.Fragment>
  );
}

export default PojeciaZwiazaneZOperacjami;
