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

function SchragePrzerwania({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title} />
      </div>

      <div className="w-full h-full font-typewriter">
        W tym wariancie rozpatrywany jest ponownie zbiór zadań{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$J = \\{1,2,\\ldots,n\\}$"} />
        </span>
        , które muszą zostać wykonane na jednej maszynie. Każde zadanie{" "}
        <MathText text={"$i$"} /> opisują trzy parametry: czas przetwarzania{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$p_i$"} />
        </span>
        , czas dostępności{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$r_i$"} />
        </span>{" "}
        oraz czas stygnięcia po zakończeniu obróbki{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$q_i$"} />
        </span>
        . W odróżnieniu od wersji bez przerwań dopuszcza się tutaj możliwość
        wstrzymania zadania i późniejszego wznowienia. Tę możliwość opisuje
        oznaczenie{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$pmtn$"} />
        </span>{" "}
        (od ang. <i>preemption</i>). Maszyna nadal może wykonywać tylko jedno
        zadanie w danej chwili, ale jeśli pojawi się nowe zadanie o większym
        czasie dostarczenia{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$q_i$"} />
        </span>
        , to aktualnie przetwarzane zadanie może zostać przerwane, a jego
        dokończenie zostaje przesunięte na później. Podobnie jak wcześniej,
        funkcja celu polega na minimalizacji maksymalnego czasu zakończenia
        wszystkich zadań{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$C_{max}$"} />
        </span>
        .
      </div>

      <Wavy />

      <div className="w-full h-full font-typewriter">
        Do konstruowania harmonogramu w takim środowisku można wykorzystać
        rozszerzoną wersję algorytmu Schrage. Różnica względem standardowej
        wersji polega na tym, że zadanie aktualnie wykonywane nie musi zostać
        doprowadzone do końca, zanim maszyna przejdzie do kolejnego. Jeżeli w
        trakcie obróbki pojawi się zadanie z większym{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$q_i$"} />
        </span>{" "}
        niż zadanie wykonywane w danym momencie, to harmonogram może przerwać
        bieżącą operację i rozpocząć przetwarzanie nowego, ważniejszego zadania.
        Pozwala to wcześniej zakończyć zadania o dużych karach spóźnienia i tym
        samym obniżyć wartość <MathText text={"$C_{max}$"} /> oraz poprawić
        jakość całego harmonogramu, zwłaszcza w sytuacjach, gdy różnice w
        czasach <MathText text={"$q_i$"} /> są duże.
      </div>

      <Squiggly />
    </React.Fragment>
  );
}

export default SchragePrzerwania;
