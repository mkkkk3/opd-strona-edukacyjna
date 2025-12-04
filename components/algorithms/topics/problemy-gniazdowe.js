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

function ProblemyGniazdowe({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>

      <div className="w-full h-full font-typewriter">
        Problemy gniazdowe opisują sytuację, w której każde zadanie składa się z
        własnej sekwencji operacji wykonywanych na różnych maszynach, a
        kolejność tych operacji może być inna dla każdego zadania. W odróżnieniu
        od problemów przepływowych nie ma jednej wspólnej ścieżki
        technologicznej dla wszystkich zadań. Każdy wyrób lub zlecenie może
        wymagać zupełnie innego przebiegu przez system. Powoduje to, że
        planowanie staje się dużo trudniejsze. Operacje tych samych zadań mogą
        pojawiać się na różnych maszynach w różnych momentach, a kolejność zadań
        na poszczególnych maszynach trzeba ustalić tak, aby pogodzić wymagania
        technologiczne z ograniczoną dostępnością zasobów.
      </div>

      <Wavy />

      <div className="w-full h-full font-typewriter">
        W problemie gniazdowym rozpatrywany jest zbiór zadań{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$J = \\{1,2,\\ldots,n\\}$"} />
        </span>
        . Każde zadanie <MathText text={"$i$"} /> składa się z sekwencji
        operacji
        <span className="bg-page3 px-1 mx-1 rounded-md">
          <MathText text={"$O_i = \\{o_{i1}, o_{i2}, \\ldots, o_{ik_i}\\}$"} />
        </span>
        . Operacja <MathText text={"$o_{ij}$"} /> musi zostać wykonana na ściśle
        określonej maszynie opisanej przez parametr{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$m_{ij}$"} />
        </span>{" "}
        i trwa przez czas
        <span className="bg-page3 px-1 mx-1 rounded-md">
          <MathText text={"$p_{ij}$"} />
        </span>
        . Indeks <MathText text={"$i$"} /> oznacza zadanie, natomiast indeks{" "}
        <MathText text={"$j$"} /> numer kolejnej operacji w tym zadaniu,
        niezależnie od tego, na której maszynie jest ona wykonywana. Maszyna
        przypisana do danej operacji jest przechowywana osobno w{" "}
        <MathText text={"$m_{ij}$"} />. Przyjmuje się, że żadna maszyna nie może
        wykonywać dwóch operacji jednocześnie oraz że rozpoczęta operacja musi
        zostać doprowadzona do końca bez przerwania.
      </div>

      <Squiggly />

      <div className="w-full h-full font-typewriter">
        Dla każdej operacji definiowane są moment rozpoczęcia{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$S_{ij}$"} />
        </span>{" "}
        oraz zakończenia{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$C_{ij}$"} />
        </span>
        . Pierwszy warunek mówi, że kolejna operacja w tym samym zadaniu może
        się zacząć dopiero po zakończeniu operacji ją poprzedzającej.
      </div>

      <Equation
        testing={false}
        equation={"$S_{ij} \\ge C_{i(j-1)}$"}
        dividingArray={[
          {
            width: 30,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$S_{ij}$"} />
                </span>{" "}
                – czas rozpoczęcia <MathText text={"$j$"} />
                -tej operacji w zadaniu <MathText text={"$i$"} />.
              </p>
            ),
          },
          {
            width: 17,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\ge$"} />
                </span>{" "}
                – wartość po lewej stronie nie może być mniejsza niż wartość po
                prawej, czyli operacja nie może wystartować wcześniej.
              </p>
            ),
          },
          {
            width: 53,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$C_{i(j-1)}$"} />
                </span>{" "}
                – czas zakończenia poprzedniej operacji w tym samym zadaniu.
                Kolejny krok procesu może rozpocząć się dopiero po jej końcu.
              </p>
            ),
          },
        ]}
      />

      <div className="w-full h-full font-typewriter">
        Drugie ograniczenie wynika z tego, że na jednej maszynie w danym
        momencie może być wykonywana tylko jedna operacja. Dlatego operacja{" "}
        <MathText text={"$o_{ij}$"} /> może rozpocząć się dopiero wtedy, gdy
        maszyna <MathText text={"$m_{ij}$"} /> zakończy pracę nad wcześniejszym
        zadaniem.
      </div>

      <Equation
        testing={false}
        equation={"$S_{ij} \\ge C^{\\text{prev}}_{m_{ij}}$"}
        dividingArray={[
          {
            width: 32,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$S_{ij}$"} />
                </span>{" "}
                – czas rozpoczęcia rozważanej operacji{" "}
                <MathText text={"$o_{ij}$"} />.
              </p>
            ),
          },
          {
            width: 20,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\ge$"} />
                </span>{" "}
                – start operacji nie może nastąpić wcześniej niż koniec
                poprzedniej operacji na tej maszynie.
              </p>
            ),
          },
          {
            width: 48,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$C^{\\text{prev}}_{m_{ij}}$"} />
                </span>{" "}
                – czas zakończenia operacji wykonywanej bezpośrednio przed{" "}
                <MathText text={"$o_{ij}$"} /> na maszynie{" "}
                <MathText text={"$m_{ij}$"} />. Maszyna musi najpierw skończyć
                wcześniejsze zadanie, aby mogła rozpocząć nowe.
              </p>
            ),
          },
        ]}
      />

      <div className="w-full h-full font-typewriter">
        Oba warunki można połączyć w jedno równanie. Faktyczny czas rozpoczęcia
        operacji jest równy późniejszemu z dwóch momentów: zakończeniu
        poprzedniej operacji w tym samym zadaniu oraz zakończeniu operacji
        wykonywanej wcześniej na tej samej maszynie.
      </div>

      <Equation
        testing={false}
        equation={
          "$S_{ij} = \\max \\{ C_{i(j-1)}, C^{\\text{prev}}_{m_{ij}} \\}$"
        }
        dividingArray={[
          {
            width: 15,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$S_{ij}$"} />
                </span>{" "}
                – ostateczny czas rozpoczęcia operacji{" "}
                <MathText text={"$o_{ij}$"} />.
              </p>
            ),
          },
          {
            width: 11,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$=$"} />
                </span>{" "}
                – jest równy.
              </p>
            ),
          },
          {
            width: 17,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\max$"} />
                </span>{" "}
                – wybierana jest większa (późniejsza) z dwóch wartości w
                nawiasie.
              </p>
            ),
          },
          {
            width: 29,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$C_{i(j-1)}$"} />
                </span>{" "}
                – czas zakończenia poprzedniej operacji w danym zadaniu.
              </p>
            ),
          },
          {
            width: 28,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$C^{\\text{prev}}_{m_{ij}}$"} />
                </span>{" "}
                – czas zakończenia operacji poprzednio wykonywanej na maszynie{" "}
                <MathText text={"$m_{ij}$"} />. Operacja{" "}
                <MathText text={"$o_{ij}$"} /> może wystartować dopiero wtedy,
                gdy spełnione są oba warunki jednocześnie.
              </p>
            ),
          },
        ]}
      />

      <Radio />

      <div className="w-full h-full font-typewriter">
        W problemach gniazdowych celem jest zazwyczaj minimalizacja chwili, w
        której zakończone zostaną wszystkie operacje, czyli minimalizacja
        maksymalnego czasu zakończenia <MathText text={"$C_{max}$"} />. Duża
        liczba możliwych kombinacji kolejności zadań na maszynach oraz różne
        ścieżki technologiczne sprawiają, że znalezienie najlepszego
        harmonogramu jest szczególnie trudne obliczeniowo.
      </div>

      <Flowers />
    </React.Fragment>
  );
}

export default ProblemyGniazdowe;
