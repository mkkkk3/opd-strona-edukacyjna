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

function BruteForcePermutacyjne({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title} />
      </div>

      <div className="w-full h-full font-typewriter">
        Przegląd zupełny (Brute Force) jest najprostszym sposobem szukania
        najlepszego harmonogramu w permutacyjnych problemach przepływowych.
        Polega na tym, że rozważa się wszystkie możliwe kolejności zadań i dla
        każdej z nich oblicza się całkowity czas realizacji procesu. Szukana
        jest ta kolejność, dla której maksymalny czas zakończenia wszystkich
        operacji{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$C_{max}$"} />
        </span>{" "}
        jest jak najmniejszy. Przy obliczaniu uwzględnia się to, że każda
        maszyna może zacząć przetwarzać zadanie dopiero wtedy, gdy zakończy się
        odpowiednia operacja na maszynie poprzedniej oraz gdy sama maszyna
        będzie wolna.
      </div>

      <Wavy />

      <div className="w-full h-full font-typewriter">
        Wadą tej metody jest to, że liczba możliwych harmonogramów rośnie
        ekstremalnie szybko wraz ze wzrostem liczby zadań, więc dla większych
        problemów staje się ona praktycznie nieużyteczna. Mimo to przegląd
        zupełny ma duże znaczenie w badaniach. Pozwala sprawdzić, jaki wynik
        jest naprawdę najlepszy, a następnie porównać go z rezultatami
        uzyskiwanymi przez bardziej zaawansowane algorytmy. Dzięki temu może
        pełnić rolę punktu odniesienia przy ocenie jakości i efektywności innych
        metod optymalizacji.
      </div>

      <Squiggly />
    </React.Fragment>
  );
}

export default BruteForcePermutacyjne;
