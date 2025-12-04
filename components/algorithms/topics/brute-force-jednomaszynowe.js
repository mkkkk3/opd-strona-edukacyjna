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

function BruteForceJednomaszynowe({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title} />
      </div>

      <div className="w-full h-full font-typewriter">
        Rozpatrywany jest tutaj problem{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$1\\,\\vert\\vert\\,\\sum \\omega_i T_i$"} />
        </span>
        , w którym zbiór zadań{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$J = \\{1,2,\\ldots,n\\}$"} />
        </span>{" "}
        musi zostać wykonany na jednej maszynie. Każde zadanie ma swój czas
        wykonania, termin wymaganej realizacji <MathText text={"$d_i$"} />, wagę{" "}
        <MathText text={"$\\omega_i$"} /> oraz opóźnienie{" "}
        <MathText text={"$T_i$"} />, które liczone jest na podstawie czasu
        zakończenia <MathText text={"$C_i$"} />. Metoda <i>brute force</i>{" "}
        polega tutaj na sprawdzeniu wszystkich możliwych kolejności wykonywania
        zadań. Dla każdej permutacji oblicza się kolejno czasy zakończenia
        zadań, ich opóźnienia{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$T_i$"} />
        </span>{" "}
        oraz karę za opóźnienie{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\omega_i T_i$"} />
        </span>
        . Następnie sumowana jest wartość funkcji celu{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\sum \\omega_i T_i$"} />
        </span>{" "}
        dla tej kolejności.
      </div>

      <Wavy />

      <div className="w-full h-full font-typewriter">
        Algorytm przeglądu zupełnego porównuje wartości funkcji celu dla
        wszystkich permutacji i zapamiętuje tę, która daje najmniejszą sumę kar
        za opóźnienia. Daje to gwarancję znalezienia rozwiązania optymalnego,
        ale liczba możliwych kolejności rośnie bardzo szybko wraz ze wzrostem
        liczby zadań. W praktyce oznacza to ogromny koszt obliczeniowy już dla
        średnich instancji. Mimo to metoda <i>brute force</i> ma duże znaczenie
        badawcze, ponieważ pozwala wyznaczyć dokładne rozwiązanie dla małych
        zbiorów zadań i dzięki temu porównywać wyniki szybszych algorytmów
        heurystycznych.
      </div>

      <Squiggly />
    </React.Fragment>
  );
}

export default BruteForceJednomaszynowe;
