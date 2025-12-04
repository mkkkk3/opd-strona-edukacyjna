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

function ZmienneCzasowe({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>

      <div className="w-full h-full font-typewriter">
        W problemach szeregowania interesuje nas nie tylko kolejność zadań, ale
        przede wszystkim chwile, w których startują i kończą się poszczególne
        operacje. Można na to patrzeć jak na ustalanie, jak długo każda operacja
        musi poczekać w kolejce, zanim trafi na maszynę i zacznie być
        przetwarzana. Ten czas oczekiwania dla{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$j$"} />
        </span>{" "}
        -tej operacji zadania{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$i$"} />
        </span>{" "}
        oznaczamy jako{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$W_{i,j}$"} />
        </span>
        .<span className="block opacity-0">x</span>
        Całkowity czas oczekiwania dla całego zadania{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$i$"} />
        </span>{" "}
        to suma czasów czekania wszystkich jego operacji:
        <span className="py-4 flex mt-2 justify-center items-center">
          <span className="bg-page3 px-1 rounded-md">
            <MathText text={"$W_i = \\sum_{j=1}^{o_i} W_{i,j}$"} />
          </span>
        </span>
        gdzie{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$o_i$"} />
        </span>{" "}
        oznacza liczbę operacji w zadaniu <MathText text={"$i$"} />.
      </div>

      <Flowers />

      <div className="w-full h-full font-typewriter">
        Mając zdefiniowany łączny czas oczekiwania{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$W_i$"} />
        </span>
        , można w prosty sposób powiązać go z innymi ważnymi momentami w
        harmonogramie.
        <span className="block opacity-0">x</span>
        <span className="block">
          •{" "}
          <span className="bg-page3 px-1 rounded-md">
            <MathText text={"$r_i$"} />
          </span>{" "}
          – najwcześniejszy możliwy czas rozpoczęcia zadania{" "}
          <MathText text={"$i$"} /> (moment, od którego w ogóle możemy je
          zacząć).
        </span>
        <span className="block">
          •{" "}
          <span className="bg-page3 px-1 rounded-md">
            <MathText text={"$p_i$"} />
          </span>{" "}
          – całkowity czas przetwarzania zadania <MathText text={"$i$"} /> na
          maszynach.
        </span>
        <span className="block pt-6">
          Czas zakończenia zadania{" "}
          <span className="bg-page3 px-1 rounded-md">
            <MathText text={"$C_i$"} />
          </span>{" "}
          można wtedy zapisać jako:
        </span>
        <span className="py-4 flex mt-2 justify-center items-center">
          <span className="bg-page3 px-1 rounded-md">
            <MathText text={"$C_i = r_i + p_i + W_i$"} />
          </span>
        </span>
      </div>

      <Radio />
    </React.Fragment>
  );
}

export default ZmienneCzasowe;
