import React from "react";
import Radio from "../../../components/layout/decorations/radio";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Flowers from "../../../components/layout/decorations/flowers";
import Equation from "../../../components/layout/equation";
import Wavy from "../../../components/layout/decorations/wavy";
import Squiggly from "../../../components/layout/decorations/squiggly";

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

function ProblemyJednomaszynowe({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        Problemy jednomaszynowe dotyczą sytuacji, w której wszystkie zadania
        muszą zostać wykonane na jednej maszynie, a celem jest ustalenie
        najlepszej kolejności ich realizacji. Choć taki model wydaje się bardzo
        prosty, w praktyce może uwzględniać różne dodatkowe ograniczenia, takie
        jak zmienność czasów wykonania, opóźnienia czy inne czynniki wpływające
        na przebieg pracy. Dzięki temu możliwe jest lepsze odzwierciedlenie
        rzeczywistych warunków działania systemu produkcyjnego. Mimo swojej
        prostoty problemy jednomaszynowe mają duże znaczenie praktyczne. Wiele
        ich wariantów okazuje się bardzo trudnych obliczeniowo, zwłaszcza gdy
        liczba zadań jest duża. W takich przypadkach znalezienie rozwiązania
        optymalnego może wymagać ogromnej ilości czasu. Z tego powodu problemy
        jednomaszynowe są często wykorzystywane jako podstawowy model testowy
        przy projektowaniu i porównywaniu metod optymalizacji, zarówno tych
        dokładnych, jak i heurystycznych oraz metaheurystycznych.
      </div>
      <Wavy />
      <div className="w-full h-full font-typewriter">
        W najprostszym wariancie problemów jednomaszynowych każde zadanie
        opisuje się jedynie przez czas jego wykonania, oznaczany jako{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$p_i$"} />
        </span>
        . Taki model jest bardzo podstawowy i często służy jako punkt wyjścia do
        badania bardziej złożonych sytuacji. W rzeczywistych procesach
        produkcyjnych planowanie pracy rzadko bywa jednak tak proste, ponieważ
        zwykle pojawiają się dodatkowe warunki, które wpływają na to, jak i
        kiedy zadania mogą być wykonywane. Kolejność wykonywania zadań na
        maszynie zapisuje się za pomocą symbolu{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\pi$"} />
        </span>
        , który oznacza permutację, czyli uporządkowaną listę wszystkich zadań.
        Każde zadanie występuje w niej dokładnie raz, dzięki czemu kolejność
        realizacji jest jednoznacznie określona. Taka reprezentacja pozwala
        dokładnie opisać, w jakim porządku maszyna powinna wykonywać
        poszczególne zadania.
      </div>
      <Squiggly />
      <div className="w-full h-full font-typewriter">
        Dla każdego zadania określony jest moment rozpoczęcia{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\mathcal{S}_i$"} />
        </span>{" "}
        oraz moment zakończenia{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\mathcal{C}_i$"} />
        </span>
        . Czas rozpoczęcia zadanie nie może być wcześniejszy niż jego termin
        dostępności:
      </div>
      <Equation
        testing={false}
        equation={"$ r_{\\pi(i)} \\le \\mathcal{S}_{\\pi(i)} $"}
        dividingArray={[
          {
            width: 17,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$r_{\\pi(i)}$"} />
                </span>{" "}
                - Czas dostępności tego konkretnego zadania, które w danym
                harmonogramie stoi na pozycji <MathText text={"$i$"} />. Można
                też to ująć jako informacja o tym, od kiedy zadanie wykonywanie
                jako <MathText text={"$i$"} />
                -te w kolejności może się zacząć.
              </p>
            ),
          },
          {
            width: 25,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\pi(i)$"} />
                </span>{" "}
                - numer zadania, które w harmonogramie stoi na pozycji{" "}
                <MathText text={"$i$"} />.
                <span className="block opacity-0">x</span>
                <span className="block">
                  Jeśli zadań jest na przykład 5 oraz{" "}
                  <MathText text={"$\\pi=(3,5,1,2,4)$"} />
                </span>{" "}
                to:
                <span className="block">
                  na pozycji <MathText text={"$i=1$"} /> jest zadanie numer 3,
                  czyli <MathText text={"$\\pi(1)=3$"} />
                </span>
                <span className="block">
                  na pozycji <MathText text={"$i=2$"} /> jest zadanie numer 5,
                  czyli <MathText text={"$\\pi(2)=5$"} />
                </span>
                <span className="block opacity-0">x</span>
                <span className="block">
                  Można to ująć jako odpowiedź na pytanie, jakie konrektnie
                  zadanie wykonywane jest jako <MathText text={"$i$"} />
                  -te w kolejności.
                </span>
              </p>
            ),
          },
          {
            width: 17,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\le$"} />
                </span>{" "}
                - Czas rozpoczęcia zadanie nie może być wcześniejszy niż jego
                termin dostępności, czyli zadanie może wystawrować dopiero
                wtedy, gdy jest dostępne.
              </p>
            ),
          },
          {
            width: 41,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\mathcal{S}_{\\pi(i)} $"} />
                </span>{" "}
                - czas rozpoczęscia tego samego zadania, które jest na pozycji{" "}
                <MathText text={"$i$"} /> w harmonogramie
              </p>
            ),
          },
        ]}
      />
      <div className="w-full h-full font-typewriter">
        A czas zakończenia zadania <MathText text={"$i$"} /> to:
      </div>
      <Equation
        testing={false}
        equation={
          "$ \\mathcal{C}_{\\pi(i)} = \\mathcal{S}_{\\pi(i)} + p_{\\pi(i)}$"
        }
        dividingArray={[
          {
            width: 27,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\mathcal{C}_{\\pi(i)}$"} />
                </span>{" "}
                - czas zakończenia zadania, czyli moment, w którym maszyna
                kończy pracę nad tym zadaniem.
              </p>
            ),
          },
          {
            width: 12,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$=$"} />
                </span>{" "}
                - jest równy
              </p>
            ),
          },
          {
            width: 23,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\mathcal{S}_{\\pi(i)}$"} />
                </span>
                - czas rozpoczęcia zadania, które w kolejności ma pozycję{" "}
                <MathText text={"$i$"} />. To moment, w którym maszyna zaczyna
                je wykonywać.
              </p>
            ),
          },
          {
            width: 11,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$+$"} />
                </span>{" "}
                - sumie
              </p>
            ),
          },
          {
            width: 27,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$p_{\\pi(i)}$"} />
                </span>{" "}
                - czas przetwarzania tego zadania, czyli jak długo trwa jego
                wykonanie.
              </p>
            ),
          },
        ]}
      />
      <div className="w-full h-full font-typewriter">
        Ponieważ maszyna może wykonywać tylko jedno zadanie naraz, kolejne
        zadanie może się zacząć dopiero wtedy, gdy jest już dostępne i gdy
        maszyna skończy poprzednie. Dlatego czas rozpoczęcia{" "}
        <MathText text={"$i$"} />
        -tego zadania w kolejności jest równy późniejszemu z dwóch momentów:
        chwili dostępności tego zadania oraz chwili zakończenia zadania
        poprzedniego.
      </div>
      <Equation
        testing={false}
        equation={
          "$\\mathcal{S}_{\\pi(i)} = \\max \\{ r_{\\pi(i)}, \\mathcal{C}_{\\pi(i-1)} \\}$"
        }
        dividingArray={[
          {
            width: 22,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\mathcal{S}_{\\pi(i)}$"} />
                </span>{" "}
                - czas rozpoczęcia zadania, które jest na pozycji{" "}
                <MathText text={"$i$"} /> w kolejności{" "}
                <MathText text={"$\\pi$"} />
              </p>
            ),
          },
          {
            width: 7,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$=$"} />
                </span>{" "}
                - jest równe
              </p>
            ),
          },
          {
            width: 18,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\max$"} />
                </span>{" "}
                - większa wartość z dwóch podanych
              </p>
            ),
          },
          {
            width: 20,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$r_{\\pi(i)}$"} />
                </span>{" "}
                - czas dostępności zadania
              </p>
            ),
          },
          {
            width: 33,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\mathcal{C}_{\\pi(i-1)}$"} />
                </span>{" "}
                - czas zakończenia poprzedniego zadania w kolejności{" "}
                <MathText text={"$i$"} /> w kolejności{" "}
                <MathText text={"$\\pi$"} />
              </p>
            ),
          },
        ]}
      />
      <Radio />
      <div className="w-full h-full font-typewriter">
        Funkcja celu w problemach szeregowania określa, co dokładnie ma być
        najlepsze w harmonogramie. W zależności od tego, jakie kryterium
        zostanie wybrane, funkcja może mieć różną postać. Może to być na
        przykład całkowity czas zakończenia wszystkich zadań{" "}
        <MathText text={"$C_{max}$"} />
        , największe opóźnienie <MathText text={"$L_{max}$"} /> albo suma kar za
        spóźnienia <MathText text={"$\\sum \\omega_i T_i$"} />.
      </div>
      <Flowers />
    </React.Fragment>
  );
}

export default ProblemyJednomaszynowe;
