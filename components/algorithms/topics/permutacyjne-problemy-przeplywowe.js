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

function PermutacyjneProblemyPrzeplywowe({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>

      <div className="w-full h-full font-typewriter">
        Permutacyjne problemy przepływowe opisują sytuację, w której wiele zadań
        musi zostać wykonanych na tym samym zestawie maszyn, zawsze w tej samej
        kolejności technologicznej. Każde zadanie przechodzi więc kolejno przez
        maszyny{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$M = \\{1,2,\\ldots,m\\}$"} />
        </span>
        , a dodatkowo przyjmuje się, że kolejność zadań na jednej maszynie jest
        dokładnie taka sama na wszystkich pozostałych. Oznacza to, że cały
        harmonogram można opisać jedną wspólną permutacją zadań{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\pi$"} />
        </span>
        . Taki model dobrze odzwierciedla liniową produkcję, w której wszystkie
        wyroby przechodzą przez te same stanowiska w ustalonej kolejności. Mimo
        że założenie wspólnej kolejności upraszcza opis problemu, to znalezienie
        rozwiązania optymalnego pozostaje bardzo trudne, zwłaszcza dla dużej
        liczby zadań i maszyn.
      </div>

      <Wavy />

      <div className="w-full h-full font-typewriter">
        W tym modelu rozpatrywany jest zbiór zadań{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$J = \\{1,2,\\ldots,n\\}$"} />
        </span>
        , które muszą zostać wykonane na zestawie{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$m$"} />
        </span>{" "}
        maszyn{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$M = \\{1,2,\\ldots,m\\}$"} />
        </span>
        . Każde zadanie <MathText text={"$i$"} /> składa się z ciągu operacji
        <span className="bg-page3 px-1 mx-1 rounded-md">
          <MathText text={"$O_i = \\{o_{1i}, o_{2i}, \\ldots, o_{mi}\\}$"} />
        </span>
        , z których operacja <MathText text={"$o_{ji}$"} /> wykonywana jest na
        maszynie <MathText text={"$j$"} /> przez czas
        <span className="bg-page3 px-1 mx-1 rounded-md">
          <MathText text={"$p_{ji}$"} />
        </span>
        . Przyjmuje się, że w danej chwili każda maszyna może wykonywać tylko
        jedną operację, a żadna operacja nie może zostać przerwana przed
        zakończeniem. Charakterystyczną cechą wariantu permutacyjnego jest
        właśnie to, że wszystkie maszyny realizują zadania w tej samej
        kolejności określonej przez permutację{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\pi$"} />
        </span>
        .
      </div>

      <Squiggly />

      <div className="w-full h-full font-typewriter">
        Dla każdej operacji definiowane są moment rozpoczęcia{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$S_{j,\\pi(i)}$"} />
        </span>{" "}
        oraz moment zakończenia{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$C_{j,\\pi(i)}$"} />
        </span>
        . Pierwsze ograniczenie mówi, że operacja danego zadania na maszynie{" "}
        <MathText text={"$j$"} /> może rozpocząć się dopiero po zakończeniu tej
        samej operacji na maszynie poprzedniej <MathText text={"$j-1$"} />.
      </div>

      <Equation
        testing={false}
        equation={"$S_{j,\\pi(i)} \\ge C_{j-1,\\pi(i)}$"}
        dividingArray={[
          {
            width: 37,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$S_{j,\\pi(i)}$"} />
                </span>{" "}
                – czas rozpoczęcia operacji zadania, które w kolejności{" "}
                <MathText text={"$\\pi$"} /> stoi na pozycji{" "}
                <MathText text={"$i$"} /> i jest wykonywane na maszynie{" "}
                <MathText text={"$j$"} />.
              </p>
            ),
          },
          {
            width: 15,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\ge$"} />
                </span>{" "}
                – czas rozpoczęcia nie może być wcześniejszy niż wartość po
                prawej stronie.
              </p>
            ),
          },
          {
            width: 48,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$C_{j-1,\\pi(i)}$"} />
                </span>{" "}
                – czas zakończenia tej samej operacji tego zadania na maszynie{" "}
                <MathText text={"$j-1$"} />. Maszyna <MathText text={"$j$"} />{" "}
                może zacząć pracę dopiero, gdy zadanie opuści poprzednią
                maszynę.
              </p>
            ),
          },
        ]}
      />

      <div className="w-full h-full font-typewriter">
        Drugie ograniczenie dotyczy kolejności zadań na tej samej maszynie. Na
        maszynie <MathText text={"$j$"} /> w danym momencie może być wykonywane
        tylko jedno zadanie, dlatego operacja zadania{" "}
        <MathText text={"$\\pi(i)$"} /> może się rozpocząć dopiero po
        zakończeniu operacji poprzedniego zadania{" "}
        <MathText text={"$\\pi(i-1)$"} /> na tej maszynie.
      </div>

      <Equation
        testing={false}
        equation={"$S_{j,\\pi(i)} \\ge C_{j,\\pi(i-1)}$"}
        dividingArray={[
          {
            width: 37,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$S_{j,\\pi(i)}$"} />
                </span>{" "}
                – czas rozpoczęcia operacji zadania{" "}
                <MathText text={"$\\pi(i)$"} /> na maszynie{" "}
                <MathText text={"$j$"} />.
              </p>
            ),
          },
          {
            width: 14,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\ge$"} />
                </span>{" "}
                – musi być nie mniejszy niż czas zakończenia poprzedniego
                zadania.
              </p>
            ),
          },
          {
            width: 49,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$C_{j,\\pi(i-1)}$"} />
                </span>{" "}
                – czas zakończenia operacji poprzedniego zadania{" "}
                <MathText text={"$\\pi(i-1)$"} /> na tej samej maszynie{" "}
                <MathText text={"$j$"} />. Nowa operacja może się zacząć dopiero
                wtedy, gdy maszyna będzie wolna.
              </p>
            ),
          },
        ]}
      />

      <div className="w-full h-full font-typewriter">
        Oba powyższe ograniczenia można połączyć w jedno wyrażenie. Czas
        rozpoczęcia operacji jest równy późniejszemu z dwóch momentów: chwili, w
        której zadanie kończy pracę na poprzedniej maszynie, oraz chwili, w
        której maszyna kończy obsługę poprzedniego zadania.
      </div>

      <Equation
        testing={false}
        equation={
          "$S_{j,\\pi(i)} = \\max\\{ C_{j-1,\\pi(i)}, C_{j,\\pi(i-1)} \\}$"
        }
        dividingArray={[
          {
            width: 20,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$S_{j,\\pi(i)}$"} />
                </span>{" "}
                – faktyczny czas rozpoczęcia operacji zadania{" "}
                <MathText text={"$\\pi(i)$"} /> na maszynie{" "}
                <MathText text={"$j$"} />.
              </p>
            ),
          },
          {
            width: 8,
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
            width: 14,
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
            width: 25,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$C_{j-1,\\pi(i)}$"} />
                </span>{" "}
                – czas zakończenia tej operacji na maszynie poprzedniej{" "}
                <MathText text={"$j-1$"} />.
              </p>
            ),
          },
          {
            width: 33,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$C_{j,\\pi(i-1)}$"} />
                </span>{" "}
                – czas zakończenia poprzedniego zadania na tej samej maszynie{" "}
                <MathText text={"$j$"} />. Operacja może ruszyć dopiero wtedy,
                gdy spełnione są oba warunki – zadanie ukończy poprzednią
                maszynę i maszyna będzie wolna.
              </p>
            ),
          },
        ]}
      />

      <Radio />

      <div className="w-full h-full font-typewriter">
        W analizowanym wariancie celem jest zwykle minimalizacja chwili, w
        której zakończone zostaną wszystkie zadania, czyli tzw.{" "}
        <MathText text={"$C_{max}$"} />. Jest to czas zakończenia ostatniej
        operacji na ostatniej maszynie.
      </div>

      <Equation
        testing={false}
        equation={"$C_{max} = \\max_{i \\in J} C_{m,\\pi(i)}$"}
        dividingArray={[
          {
            width: 27,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$C_{max}$"} />
                </span>{" "}
                – całkowity czas trwania procesu, moment zakończenia ostatniego
                zadania w systemie.
              </p>
            ),
          },
          {
            width: 10,
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
            width: 30,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$\\max_{i \\in J}$"} />
                </span>{" "}
                – wybierany jest największy czas spośród wszystkich zadań{" "}
                <MathText text={"$i \\in J$"} />.
              </p>
            ),
          },
          {
            width: 33,
            tooltip: (
              <p>
                <span className="bg-page3 px-1 rounded-md">
                  <MathText text={"$C_{m,\\pi(i)}$"} />
                </span>{" "}
                – czas zakończenia zadania <MathText text={"$\\pi(i)$"} /> na
                ostatniej maszynie <MathText text={"$m$"} />. Spośród tych
                czasów wybierany jest największy, czyli moment zakończenia całej
                produkcji.
              </p>
            ),
          },
        ]}
      />

      <Flowers />
    </React.Fragment>
  );
}

export default PermutacyjneProblemyPrzeplywowe;
