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

function KlasyfikacjaZagadnien({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title}/>
      </div>

      <div className="w-full h-full font-typewriter">
        W badaniach nad szeregowaniem zadań ważne jest, żeby w prosty i
        jednoznaczny sposób opisywać różne typy problemów. Do tego służy
        popularna notacja{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\alpha\\,|\\,\\beta\\,|\\,\\gamma$"} />
        </span>
        . Jest to krótki „skrót myślowy”, dzięki któremu od razu widać, jaki
        mamy typ środowiska maszynowego, jakie dodatkowe ograniczenia występują
        oraz jaka funkcja celu jest brana pod uwagę. Taki zapis powstał po to,
        żeby uporządkować nazewnictwo i ułatwić porównywanie różnych problemów
        szeregowania opisanych w literaturze.
      </div>

      <Radio />

      <div className="w-full h-full font-typewriter">
        W tej notacji każdy symbol ma swoją rolę:
        <span className="block opacity-0">x</span>
        <span className="block">
          •{" "}
          <span className="bg-page3 px-1 rounded-md">
            <MathText text={"$\\alpha$"} />
          </span>{" "}
          – opisuje środowisko maszynowe. Mówi, jak zorganizowane są maszyny
          oraz ile ich jest. W praktyce składa się z informacji o typie systemu
          (np. flow shop, job shop) oraz o liczbie maszyn.
        </span>
        <span className="block">
          •{" "}
          <span className="bg-page3 px-1 rounded-md">
            <MathText text={"$\\beta$"} />
          </span>{" "}
          – opisuje dodatkowe założenia dotyczące zadań, na przykład zależności
          między nimi, zakaz czekania czy możliwość przerywania operacji. To
          właśnie tutaj zapisuje się wszystkie „dodatkowe utrudnienia”, które
          pojawiają się w rzeczywistości.
        </span>
        <span className="block">
          •{" "}
          <span className="bg-page3 px-1 rounded-md">
            <MathText text={"$\\gamma$"} />
          </span>{" "}
          – określa funkcję celu, czyli to, co chcemy zoptymalizować.
          Najczęściej chodzi o minimalizację czasu zakończenia zadań, spóźnień
          albo sumy kar za opóźnienia. Dzięki temu od razu wiadomo, po czym
          będziemy oceniać jakość harmonogramu.
        </span>
        <span className="block opacity-0">x</span>
        <span className="block">
          W praktyce znaczenie szczegółowych symboli może się trochę różnić
          między autorami, dlatego zawsze warto sprawdzić, jak dana praca
          dokładnie definiuje swoją notację.
        </span>
      </div>

      <Flowers />
    </React.Fragment>
  );
}

export default KlasyfikacjaZagadnien;
