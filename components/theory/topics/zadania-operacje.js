import React from "react";
import Squiggly from "../../../components/layout/decorations/squiggly";
import Radio from "../../../components/layout/decorations/radio";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

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

function ZadaniaOperacje({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        Zadanie można rozumieć jako większy fragment pracy, który prowadzi do
        osiągnięcia konkretnego celu, na przykład wykonania produktu, naprawy
        urządzenia albo przetworzenia partii materiału. Każde zadanie składa się
        z kilku mniejszych kroków, które trzeba wykonać w określonej kolejności,
        żeby cały proces się udał. Te mniejsze kroki nazywa się operacjami.
        Operacja to pojedyncze działanie, które ma jasno określony początek,
        koniec, czas trwania i wymaga użycia określonych zasobów, na przykład
        maszyny, narzędzia lub pracownika. Właściwe przypisanie zasobów do
        operacji ma ogromne znaczenie, ponieważ jeśli jakiś zasób jest zajęty
        lub niedostępny, cała realizacja zadania może się opóźnić. W ten sposób
        zadania i operacje tworzą strukturę całego procesu, pokazując, co należy
        zrobić, w jakiej kolejności i przy użyciu jakich środków.
      </div>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">
        Przykładowo w zakładzie produkcyjnym zadaniem może być wykonanie jednego
        elementu metalowego. Składa się ono z kilku operacji: cięcia materiału,
        wiercenia otworów, szlifowania i malowania. Każda z tych operacji wymaga
        innej maszyny i odbywa się w określonej kolejności, ponieważ nie można
        malować elementu, zanim nie zostanie on obrobiony. W przypadku
        restauracji zadaniem może być przygotowanie dania, a operacjami będą
        kolejne etapy: pokrojenie składników, ugotowanie, przyprawienie i
        podanie.
      </div>
      <Squiggly />

      <div className="w-full h-full font-typewriter">
        W literaturze dotyczącej harmonogramowania często używa się różnych
        sposobów zapisywania zadań i operacji, dlatego łatwo się w tym pogubić.
        Najczęściej przyjmuje się, że zadanie oznacza się literą{" "}
        <span className="bg-page3 px-1 rounded-md"><MathText text={"$i$"} /></span>, a operację literą <span className="bg-page3 px-1 rounded-md"><MathText text={"$j$"} /></span>.
        Wynika to między innymi z kolejności liter w alfabecie, najpierw{" "}
        <span className="bg-page3 px-1 rounded-md"><MathText text={"$i$"} /></span> dla zadania, potem <span className="bg-page3 px-1 rounded-md"><MathText text={"$j$"} /></span>{" "}
        dla operacji.
      </div>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">
        W niektórych publikacjach można jednak spotkać odwrotne oznaczenia.
        Wtedy zadanie oznaczane jest jako <span className="bg-page3 px-1 rounded-md"><MathText text={"$j$"} /></span>, co pochodzi
        od angielskiego słowa <span className="bg-page3 px-1 rounded-md"><MathText text={"$job$"} /></span>, a operacja jako{" "}
        <span className="bg-page3 px-1 rounded-md"><MathText text={"$i$"} /></span>, od słowa <span className="bg-page3 px-1 rounded-md"><MathText text={"$iteration$"} /></span>{" "}
        lub po prostu jako kolejny indeks operacji w danym zadaniu. Taki zapis
        nie zmienia znaczenia, ale może wyglądać inaczej w różnych źródłach.
      </div>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">
        Przykładowo w zakładzie produkcyjnym zadaniem może być wykonanie jednego
        elementu metalowego. Składa się ono z kilku operacji: cięcia materiału,
        wiercenia otworów, szlifowania i malowania. Każda z tych operacji wymaga
        innej maszyny i odbywa się w określonej kolejności, ponieważ nie można
        malować elementu, zanim nie zostanie on obrobiony. W przypadku
        restauracji zadaniem może być przygotowanie dania, a operacjami będą
        kolejne etapy: pokrojenie składników, ugotowanie, przyprawienie i
        podanie.
      </div>
      <Radio />
    </React.Fragment>
  );
}

export default ZadaniaOperacje;
