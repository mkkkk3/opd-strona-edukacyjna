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

function Johnson({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title} />
      </div>

      <div className="w-full h-full font-typewriter">
        Algorytm Johnsona jest klasycznym sposobem układania harmonogramu dla
        problemu przepływowego z dwiema maszynami. Jego największą zaletą jest
        prostota, ponieważ działa bardzo szybko, a mimo to daje rozwiązanie
        optymalne. Główna idea polega na porównaniu czasów wykonania zadania na
        pierwszej i drugiej maszynie. Jeśli zadanie szybciej wykonuje się na
        pierwszej maszynie <MathText text={"$p_{i1}$"} />, powinno znaleźć się
        jak najwcześniej w kolejności. Jeżeli natomiast szybciej wykonuje się na
        drugiej maszynie <MathText text={"$p_{i2}$"} />, lepiej umieścić je jak
        najpóźniej. Dzięki takiemu podejściu unika się blokowania maszyn i
        minimalizuje całkowity czas realizacji wszystkich zadań.
      </div>

      <Wavy />

      <div className="w-full h-full font-typewriter">
        Algorytm Johnsona można rozszerzyć także na przypadki z większą liczbą
        maszyn (<MathText text={"$m > 2$"} />
        ). W takim przypadku tworzy się tzw. zadania wirtualne. Każde zadanie
        zastępowane jest dwoma sumami: łącznym czasem pracy na pierwszych
        maszynach oraz łącznym czasem pracy na ostatnich maszynach. Następnie
        stosuje się dokładnie te same zasady, co w przypadku dwóch maszyn: jeśli
        pierwsza część procesu jest krótsza, zadanie trafia na początek kolejki,
        a jeśli druga część jest krótsza, trafia na koniec. Umożliwia to budowę
        permutacyjnego harmonogramu o jakości często bardzo zbliżonej do
        optymalnej.
      </div>

      <Squiggly />

      <div className="w-full h-full font-typewriter pb-10 flex justify-center items-center">
        <span className="tracking-wide font-extrabold">
          Kod z implementacją algorytmu Johnsona
        </span>
      </div>

      <div className="w-full h-full font-typewriter">
        <CodeExplain
          image={
            <Image
              src="/johnson.png"
              alt="Kod algorytmu Johnsona"
              width={1626}
              height={2144}
            />
          }
          testing={false}
          dividingArray={[
            {
              height: 6,
              tooltip: (
                <>
                  Definicja funkcji <code>johnson_algorithm</code>, która
                  przyjmuje listę zadań oraz liczbę maszyn <code>m</code>.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Jeśli liczba maszyn wynosi 2, stosujemy klasyczny algorytm
                  Johnsona.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Sortowanie zadań według najmniejszego czasu przetwarzania
                  spośród dwóch maszyn.
                </>
              ),
            },
            {
              height: 2,
              tooltip: (
                <>
                  Inicjalizacja pustej listy <code>order</code> — finalna
                  kolejność.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Lista <code>front</code> — zadania trafiające na początek
                  harmonogramu.
                </>
              ),
            },
            {
              height: 5,
              tooltip: (
                <>
                  Lista <code>back</code> — zadania trafiające na koniec
                  harmonogramu.
                </>
              ),
            },
            {
              height: 3,
              tooltip: <>Iteracja po posortowanych zadaniach.</>,
            },
            {
              height: 3,
              tooltip: (
                <>
                  Jeśli czas na maszynie 1 ≤ czas na maszynie 2 — zadanie trafia
                  na początek.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Dodanie zadania do listy <code>front</code>.
                </>
              ),
            },
            {
              height: 3,
              tooltip: <>W przeciwnym przypadku zadanie trafia na koniec.</>,
            },
            {
              height: 5,
              tooltip: (
                <>
                  Wstawienie zadania na początek listy <code>back</code>.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Połączenie list <code>front</code> i <code>back</code> tworzy
                  ostateczną kolejność.
                </>
              ),
            },
            {
              height: 3,
              tooltip: <>Zwrócenie gotowego harmonogramu.</>,
            },
            {
              height: 3,
              tooltip: (
                <>
                  Przypadek dla <MathText text={"$m > 2$"} /> — algorytm
                  rozszerzony.
                </>
              ),
            },
            {
              height: 2,
              tooltip: (
                <>
                  Lista <code>virtual_jobs</code> — przechowuje zadania z
                  czasami sumarycznymi.
                </>
              ),
            },
            {
              height: 3,
              tooltip: <>Iteracja po wszystkich zadaniach.</>,
            },
            {
              height: 3,
              tooltip: (
                <>
                  Czas pierwszej części procesu — sumowanie czasów na maszynach
                  od 1 do m−1.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Czas drugiej części procesu — sumowanie czasów od maszyn 2 do
                  m.
                </>
              ),
            },
            {
              height: 5,
              tooltip: (
                <>
                  Dodanie krotki zawierającej zadanie i obie sumy czasów do
                  listy zadań wirtualnych.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>Sortowanie zadań wirtualnych po minimalnej z dwóch sum.</>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Lista <code>front</code> — początek harmonogramu.
                </>
              ),
            },
            {
              height: 5,
              tooltip: (
                <>
                  Lista <code>back</code> — koniec harmonogramu.
                </>
              ),
            },
            {
              height: 3,
              tooltip: <>Iteracja po posortowanych zadaniach wirtualnych.</>,
            },
            {
              height: 3,
              tooltip: (
                <>
                  Jeśli pierwsza część procesu ≤ druga — zadanie trafia na
                  początek.
                </>
              ),
            },
            {
              height: 2,
              tooltip: (
                <>
                  Dodanie zadania do listy <code>front</code>.
                </>
              ),
            },
            {
              height: 3,
              tooltip: <>W przeciwnym wypadku zadanie trafia na koniec.</>,
            },
            {
              height: 6,
              tooltip: (
                <>
                  Wstawienie zadania na początek listy <code>back</code>.
                </>
              ),
            },
            {
              height: 2,
              tooltip: (
                <>
                  Połączenie list <code>front</code> i <code>back</code> —
                  ostateczna kolejność.
                </>
              ),
            },
            {
              height: 6,
              tooltip: <>Zwrócenie gotowej permutacji zadań.</>,
            },
          ]}
        />
      </div>
    </React.Fragment>
  );
}

export default Johnson;
