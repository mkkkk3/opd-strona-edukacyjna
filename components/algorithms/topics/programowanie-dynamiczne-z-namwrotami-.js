import React from "react";
import Radio from "../../../components/layout/decorations/radio";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Flowers from "../../../components/layout/decorations/flowers";
import Equation from "../../../components/layout/equation";
import Wavy from "../../../components/layout/decorations/wavy";
import Squiggly from "../../../components/layout/decorations/squiggly";
import CodeExplain from "../../../components/layout/code-explain";
import Image from "next/image";

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

function ProgramowanieDynamiczneZNawrotami({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title} />
      </div>

      <div className="w-full h-full font-typewriter">
        W problemie{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$1\\,\\vert\\vert\\,\\sum \\omega_i T_i$"} />
        </span>{" "}
        rozpatrywany jest zbiór zadań{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$J = \\{1,2,\\ldots,n\\}$"} />
        </span>
        , które wykonywane są na jednej maszynie bez dodatkowych ograniczeń typu
        czasy dostępności. Funkcja celu polega na minimalizacji łącznej ważonej
        sumy opóźnień{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\sum \\omega_i T_i$"} />
        </span>
        . Dla każdego zadania określa się czas zakończenia{" "}
        <MathText text={"$C_i$"} />, termin wykonania{" "}
        <MathText text={"$d_i$"} />, wagę <MathText text={"$\\omega_i$"} /> oraz
        opóźnienie <MathText text={"$T_i$"} /> zdefiniowane jako
        <span className="bg-page3 px-1 rounded-md ml-1">
          <MathText text={"$T_i = \\max\\{0, C_i - d_i\\}$"} />
        </span>
        . Wagi opisują, jak ważne jest dane zadanie. Spóźnienie zadań o większej
        wadze jest droższe w funkcji celu niż spóźnienie zadań mniej istotnych.
      </div>

      <Wavy />

      <div className="w-full h-full font-typewriter">
        Programowanie dynamiczne wykorzystuje fakt, że ten sam problem można
        rozłożyć na wiele mniejszych podproblemów. Dla każdego podzbioru zadań
        obliczana jest minimalna wartość{" "}
        <MathText text={"$\\sum \\omega_i T_i$"} />, a wynik zostaje zapisany w
        pamięci. Dzięki temu, gdy ten sam podzbiór pojawi się ponownie podczas
        obliczeń, nie trzeba przeliczać go od nowa. Wystarczy sięgnąć do
        zapamiętanego wyniku. Pozwala to znacząco skrócić czas w porównaniu z
        prostym przeglądem wszystkich permutacji. Po zakończeniu obliczeń
        stosowane są nawroty (<i>backtracking</i>), które krok po kroku
        odtwarzają optymalną kolejność zadań. Na podstawie zapamiętanych decyzji
        algorytm wskazuje, które zadanie powinno zostać dodane na końcu,
        przedostatnim kroku itd., aż do uzyskania pełnego harmonogramu o
        minimalnej wartości funkcji celu.
      </div>

      <Squiggly />
    </React.Fragment>
  );
}

export default ProgramowanieDynamiczneZNawrotami;
