import React from "react";
import "katex/dist/katex.min.css";
import Flowers from "../../../components/layout/decorations/flowers";
import Leaf from "../../../components/layout/decorations/leaf";
import { InlineMath } from "react-katex";

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

function Przygotowanie({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        Generatory liczb pseudolosowych to algorytmy, które tworzą liczby
        wyglądające na losowe, choć tak naprawdę powstają według stałych zasad.
        Startują od jednej liczby początkowej (<MathText text={"$seed$"} />) i
        na jej podstawie obliczają kolejne wartości. Cały proces jest więc
        przewidywalny, ale wyniki sprawiają wrażenie przypadkowych. Dzięki temu
        można łatwo tworzyć kontrolowane dane i symulacje, co jest bardzo
        przydatne w zadaniach związanych z szeregowanie zadań.
      </div>
      <Flowers />
      <div className="w-full h-full font-typewriter">
        Drugim kluczowym zagadnieniem jest zrozumienie, czym jest NP-trudność.
        Pozwala to ocenić, czy dla danego problemu można oczekiwać szybkiego
        rozwiązania, czy konieczne będzie stosowanie metod przybliżonych,
        heurystyk lub algorytmów o wysokiej złożoności obliczeniowej. Te dwa
        fundamenty stanowią punkt wyjścia do dalszej pracy nad algorytmami
        szeregowania.
      </div>
      <Leaf />
    </React.Fragment>
  );
}

export default Przygotowanie;
