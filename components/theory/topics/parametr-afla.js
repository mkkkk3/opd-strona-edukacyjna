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

function ParametrAlfa({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title}/>
      </div>

      <div className="w-full h-full font-typewriter">
        W zapisie{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\alpha\\,|\\,\\beta\\,|\\,\\gamma$"} />
        </span>{" "}
        symbol{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\alpha$"} />
        </span>{" "}
        opisuje środowisko maszynowe, czyli to, jak wygląda układ maszyn i w
        jaki sposób zadania przez nie przechodzą. Znajomość typu{" "}
        <MathText text={"$\\alpha$"} /> pomaga dobrać odpowiednie metody
        rozwiązywania problemu, bo inne techniki stosuje się dla prostego,
        liniowego systemu, a inne dla bardzo złożonej sieci stanowisk.
      </div>

      <Radio />

      <div className="w-full h-full font-typewriter">
        Najczęściej spotykane typy środowisk to:
        <span className="block opacity-0">x</span>
        <span className="block">
          • <b>F – flow shop</b> – każde zadanie ma tę samą liczbę operacji i
          przechodzi przez maszyny w tej samej kolejności. Kolejność zadań na
          maszynach może się jednak różnić. To klasyczny, „uporządkowany” model
          linii produkcyjnej.
        </span>
        <span className="block">
          • <b>F* – permutation flow shop</b> – szczególny przypadek{" "}
          <i>flow shopu</i>, w którym kolejność zadań na wszystkich maszynach
          jest dokładnie taka sama. Ogranicza to liczbę możliwych harmonogramów,
          ale ułatwia analizę.
        </span>
        <span className="block">
          • <b>J – job shop</b> – bardziej skomplikowany przypadek. Każde
          zadanie może mieć inną liczbę operacji i własną ścieżkę po maszynach.
          Różne zadania odwiedzają różne maszyny w różnej kolejności, co mocno
          zwiększa złożoność obliczeń.
        </span>
        <span className="block">
          • <b>G – general shop</b> – każde zadanie ma jedną operację, ale
          zależności między zadaniami mogą tworzyć dowolny graf. Ten model jest
          bardzo elastyczny i pozwala odwzorować złożone systemy, ale jest też
          trudny obliczeniowo.
        </span>
        <span className="block">
          • <b>O – open shop</b> – każde zadanie ma ustalony zestaw operacji,
          ale ich kolejność nie jest z góry narzucona. Operacje można układać w
          różnej kolejności, co daje dużą swobodę, ale powoduje ogromną liczbę
          możliwych harmonogramów.
        </span>
        <span className="block">
          • <b>I – parallel shop</b> – każde zadanie składa się z jednej
          operacji, którą można wykonać na jednej z kilku równoległych maszyn
          tego samego typu. Taki model często opisuje rzeczywiste linie z
          kilkoma identycznymi stanowiskami pracującymi równolegle.
        </span>
        <span className="block opacity-0">x</span>
        <span className="block">
          Każdy z tych typów odpowiada innemu sposobowi organizacji procesu
          produkcyjnego i wymaga trochę innej strategii planowania.
        </span>
      </div>

      <Flowers />
    </React.Fragment>
  );
}

export default ParametrAlfa;
