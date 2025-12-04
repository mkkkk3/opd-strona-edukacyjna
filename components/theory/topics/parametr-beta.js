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

function ParametrBeta({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title} />
      </div>

      <div className="w-full h-full font-typewriter">
        W zapisie{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\alpha\\,|\\,\\beta\\,|\\,\\gamma$"} />
        </span>{" "}
        symbol{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\beta$"} />
        </span>{" "}
        opisuje dodatkowe założenia i ograniczenia, które dokładniej
        odzwierciedlają rzeczywisty proces. To właśnie tutaj zapisuje się
        informacje o relacjach między zadaniami, o tym, czy mogą czekać, czy
        można przerywać operacje itd. Takie warunki sprawiają, że model jest
        bliższy rzeczywistości, ale jednocześnie trudniejszy do rozwiązania.
      </div>

      <Radio />

      <div className="w-full h-full font-typewriter">
        Przykładowe oznaczenia w części{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\beta$"} />
        </span>{" "}
        to:
        <span className="block opacity-0">x</span>
        <span className="block">
          • <b>prec</b> – narzucony porządek między zadaniami. Niektóre zadania
          mogą ruszyć dopiero wtedy, gdy inne się zakończą, np. malowanie
          dopiero po zakończeniu spawania.
        </span>
        <span className="block">
          • <b>tree</b> – zależności między zadaniami tworzą specjalną
          strukturę, np. drzewo lub inny graf skierowany. Pozwala to dokładnie
          opisać, które zadania wynikają z których.
        </span>
        <span className="block">
          • <b>no wait</b> – brak przerw między operacjami. Po zakończeniu
          jednej operacji zadanie od razu musi przejść do kolejnej. Taki warunek
          pojawia się np. wtedy, gdy czekanie zepsułoby produkt.
        </span>
        <span className="block">
          • <b>no store</b> – brak buforów magazynowych między stanowiskami.
          Zadania nie mogą „leżeć i czekać” między maszynami, co wymusza bardzo
          dobrą synchronizację i czasem wydłuża pracę maszyn, żeby uniknąć
          przestojów.
        </span>
        <span className="block">
          • <b>pmtn</b> – możliwość przerywania operacji (preemption). Zadanie
          można zatrzymać i wrócić do niego później. Daje to dużą elastyczność w
          planowaniu, ale też znacząco zwiększa złożoność całego problemu.
        </span>
        <span className="block opacity-0">x</span>
        <span className="block">
          Dodawanie takich założeń sprawia, że model lepiej opisuje prawdziwe
          systemy produkcyjne, ale jednocześnie znacznie trudniej jest znaleźć
          rozwiązanie naprawdę optymalne.
        </span>
      </div>

      <Flowers />
    </React.Fragment>
  );
}

export default ParametrBeta;
