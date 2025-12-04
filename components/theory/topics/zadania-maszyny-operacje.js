import React from "react";
import Radio from "../../../components/layout/decorations/radio";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Flowers from "../../../components/layout/decorations/flowers";
import Equation from "../../../components/layout/equation";

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

function ZadaniaMaszynyOperacje({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        Zadanie można traktować jako większą pracę do wykonania, a operacje jako
        kolejne etapy tej pracy, takie jak cięcie, szlifowanie czy lakierowanie.
        W teorii szeregowania zakłada się, że jest wiele zadań:
      </div>
      <Equation
        testing={false}
        equation={"$\\mathcal{J} = \\{1, 2, \\ldots, n\\}$"}
        dividingArray={[
          {
            width: 19,
            tooltip: (
              <p>Zbiór zadań, które mają zostać zaplanowane oraz wykonane.</p>
            ),
          },
          {
            width: 61,
            tooltip: <p>Kolejne zadania w systemie</p>,
          },
          {
            width: 20,
            tooltip: <p>Określa ile zadań znajduje się w systemie</p>,
          },
        ]}
      />
      <div className="w-full h-full font-typewriter">
        I pewna liczba maszyn:
      </div>
      <Equation
        testing={false}
        equation={"$\\mathcal{M} = \\{1, 2, \\ldots, m\\}$"}
        dividingArray={[
          {
            width: 21,
            tooltip: <p>Zbiór maszyn dostępnych do realizacji tych zadań.</p>,
          },
          {
            width: 56,
            tooltip: <p>Kolejne maszyny</p>,
          },
          {
            width: 23,
            tooltip: <p>Określa ile maszyn znajduje się w systemie</p>,
          },
        ]}
      />
      <div className="w-full h-full font-typewriter">
        Oraz każde zadanie{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$i$"} />
        </span>{" "}
        składa się z uporządkowanej listy operacji
      </div>
      <Equation
        testing={false}
        equation={
          "$\\mathcal{O}_i = \\{\\sigma_{i1}, \\sigma_{i2}, \\ldots, \\sigma_{ij}\\}$"
        }
        dividingArray={[
          {
            width: 17,
            tooltip: (
              <p>
                Zbiór operacji, które składają się na zadanie{" "}
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$i$"} />
                </span>
                . Można też to ująć jako operacje należące do zadania{" "}
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$i$"} />
                </span>
                .
              </p>
            ),
          },
          {
            width: 61,
            tooltip: <p>Kolejne operacje</p>,
          },
          {
            width: 22,
            tooltip: (
              <div>
                Każdy symbol <MathText text={"$\\sigma_{ij}$"} /> oznacza
                konkretną operację <MathText text={"$j$"} />
                -tą w ramach zadania <MathText text={"$i$"} />.
                <span className="block opacity-0">x</span>
                <span className="block">
                  -Indeks{" "}
                  <span className="bg-page3 px-1 rounded-md">
                    <MathText text={"$i$"} />
                  </span>{" "}
                  - oznacza, do którego zadania należy operacja.{" "}
                </span>
                <span className="block">
                  -Indeks{" "}
                  <span className="bg-page3 px-1 rounded-md">
                    <MathText text={"$j$"} />
                  </span>{" "}
                  - oznacza numer operacji w tym zadaniu.
                </span>
                <span className="block">
                  -Każda operacja{" "}
                  <span className="bg-page3 px-1 rounded-md">
                    <MathText text={"$\\sigma_{ij}$"} />
                  </span>{" "}
                  jest wykonywana na jednej maszynie z dostępnego zbioru maszyn.
                </span>
              </div>
            ),
          },
        ]}
      />
      <div className="w-full h-full font-typewriter">
        Oznacza to, że operacja{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$j$"} />
        </span>{" "}
        w tym zadaniu może ruszyć dopiero wtedy, gdy skończy się operacja{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$j-1$"} />
        </span>{" "}
        tego samego zadania. Maszyny są zasobami. W danej chwili jedna maszyna
        może wykonywać tylko jedną operację. Dlatego planowanie polega na takim
        ułożeniu kolejności zadań na maszynach i chwil startu poszczególnych
        operacji, aby oczekiwanie nie trwało więcej niż to konieczne oraz żeby
        całość skończyła się możliwie szybko. Kluczowe są dwie zasady:
      </div>
      <span className="block opacity-0">x</span>
      <span className="block font-typewriter">
        ⦿ kolejność technologiczna w ramach zadania - krok następny startuje
        dopiero po zakończeniu poprzedniego kroku tego samego zadania
      </span>
      <span className="block font-typewriter">
        ⦿ ograniczenie maszynowe - na jednej maszynie naraz tylko jedna
        operacja.
      </span>
      <Radio />
      <div className="w-full h-full font-typewriter">Przykład:</div>
      <div className="w-full h-full font-typewriter">
        Wzięte pod uwagę będą dwie maszyny: Piła (M1) i Szlifierka (M2). Zadania
        można przedstawić jako dwa różne wyroby, które muszą przejść przez
        określone etapy obróbki. Przykładowo:
      </div>
      <span className="block opacity-0">x</span>
      <span className="block font-typewriter">⦿ Zadanie A</span>
      <span className="block font-typewriter">
        |---⦿ Operacja A1 na pile (M1): wycięcie elementów potrzebnych do
        konstrukcji stolika.
      </span>
      <span className="block font-typewriter">
        |---⦿ Operacja A2 na szlifierce (M2): wyszlifowanie wyciętych części
        stolika.
      </span>
      <span className="block font-typewriter">⦿ Zadanie B</span>
      <span className="block font-typewriter">
        |---⦿ Operacja B1 na pile (M1): wycięcie elementów potrzebnych do
        wykonania krzesła.
      </span>
      <span className="block font-typewriter">
        |---⦿ Operacja B2 na szlifierce (M2): wyszlifowanie elementów krzesła.
      </span>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">
        Można przyjąć takie czasy:
      </div>
      <span className="block font-typewriter">|---⦿ A1 = 3 min na M1</span>
      <span className="block font-typewriter">|---⦿ A2 = 4 min na M2</span>
      <span className="block font-typewriter">|---⦿ B1 = 2 min na M1 </span>
      <span className="block font-typewriter">|---⦿ B2 = 5 min na M2 </span>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">Co z tego wynika:</div>
      <span className="block font-typewriter">
        ⦿ A2 nie może się zacząć przed końcem A1, bo to kolejny krok tego samego
        zadania.
      </span>
      <span className="block font-typewriter">
        ⦿ B2 nie może się zacząć przed końcem B1 z tego samego powodu.
      </span>
      <span className="block font-typewriter">
        ⦿ Na M1 nie da się równocześnie ciąć A1 i B1, ponieważ należy wybrać
        kolejność (np. najpierw B1, potem A1 albo odwrotnie).{" "}
      </span>
      <span className="block font-typewriter">
        ⦿ Na M2 nie da się równocześnie szlifować A2 i B2, a kolejność też
        należy ustalić.{" "}
      </span>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">
        Jeśli na M1 zacznie się od B1 (2 min), a potem A1 (3 min), to M1 jest
        zajęta łącznie 5 minut. A2 może ruszyć dopiero po 3 min (koniec A1) i
        wtedy, gdy M2 będzie wolna. Analogicznie B2 może ruszyć po 2 min (koniec
        B1) i gdy M2 będzie wolna. Planista układa starty tak, by:{" "}
      </div>
      <span className="block font-typewriter">
        ⦿ nie złamać kolejności w zadaniu (B2 po B1, A2 po A1),
      </span>
      <span className="block font-typewriter">
        ⦿ nie wpuścić dwóch operacji jednocześnie na tę samą maszynę,
      </span>
      <span className="block font-typewriter">
        ⦿ i możliwie czas, w którym czeka się na zakończenie ostatniej operacji
        ze wszystkich.
      </span>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">
        W praktyce taki prosty przykład pokazuje, że nawet przy niewielkiej
        liczbie zadań i maszyn trzeba uważać na zależności w zadaniu i konflikty
        o zasoby. To właśnie sedno szeregowania, czyli znalezienie kolejności i
        momentów startu, które spełniają reguły i są jak najbardziej korzystne
        dla całego planu.
      </div>
      <Flowers />
    </React.Fragment>
  );
}

export default ZadaniaMaszynyOperacje;
