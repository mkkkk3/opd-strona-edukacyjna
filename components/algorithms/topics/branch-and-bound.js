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

function BranchAndBound({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title} />
      </div>

      <div className="w-full h-full font-typewriter">
        Algorytm podziału i ograniczeń (Branch and Bound) służy do dokładnego
        rozwiązywania permutacyjnych problemów przepływowych. Opiera się na
        budowaniu drzewa decyzyjnego, w którym każdy węzeł oznacza częściowy
        harmonogram, a każda gałąź, dodanie kolejnego zadania do kolejności.
        Zamiast sprawdzać wszystkie możliwe permutacje, algorytm stara się jak
        najszybciej odrzucać te fragmenty drzewa, które na pewno nie doprowadzą
        do lepszego wyniku niż najlepszy dotychczas znaleziony harmonogram. W
        tym celu dla każdego częściowego rozwiązania liczona jest tzw. dolna
        granica (lower bound), czyli optymistyczne oszacowanie najmniejszej
        możliwej wartości{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$C_{max}$"} />
        </span>{" "}
        przy dalszym, idealnym dokończeniu sekwencji.
      </div>

      <Wavy />

      <div className="w-full h-full font-typewriter">
        Jeśli obliczona dolna granica jest większa lub równa najlepszemu
        dotychczasowemu wynikowi{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$C_{max}$"} />
        </span>
        , to dana gałąź drzewa jest odcinana, bo nie może zawierać lepszego
        rozwiązania. Proces ten jest powtarzany rekurencyjnie, aż wszystkie
        obiecujące ścieżki zostaną sprawdzone, a harmonogram o najmniejszej
        wartości{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$C_{max}$"} />
        </span>{" "}
        zostanie uznany za optymalny. Dzięki inteligentnemu odrzucaniu dużej
        części permutacji algorytm Branch and Bound jest znacznie bardziej
        wydajny niż zwykły przegląd zupełny, a jednocześnie pozwala uzyskać
        gwarancję, że znalezione rozwiązanie jest naprawdę najlepsze.
      </div>

      <Squiggly />
    </React.Fragment>
  );
}

export default BranchAndBound;
