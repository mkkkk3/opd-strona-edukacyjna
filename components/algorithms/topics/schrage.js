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

function Schrage({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title} />
      </div>

      <div className="w-full h-full font-typewriter">
        Rozpatrywany jest tu zbiór zadań{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$J = \\{1,2,\\ldots,n\\}$"} />
        </span>
        , które muszą zostać wykonane na jednej maszynie. Każde zadanie{" "}
        <MathText text={"$i$"} /> opisują trzy parametry: czas dostępności{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$r_i$"} />
        </span>
        , czyli moment, od którego zadanie może zostać rozpoczęte, czas
        przetwarzania{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$p_i$"} />
        </span>{" "}
        oraz czas stygnięcia po obróbce{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$q_i$"} />
        </span>
        , w którym zadanie nadal zajmuje system po zakończeniu pracy maszyny. W
        danej chwili maszyna może wykonywać tylko jedno zadanie, a każde z nich
        musi być przetwarzane ciągle przez czas <MathText text={"$p_i$"} /> bez
        przerwania. Po zakończeniu obróbki zadanie pozostaje jeszcze w systemie
        przez <MathText text={"$q_i$"} />, co wpływa na całkowity czas trwania
        harmonogramu. Celem jest zminimalizowanie maksymalnego czasu zakończenia
        wszystkich zadań, czyli wartości{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$C_{max}$"} />
        </span>
        . Problem ten zapisywany jest skrótowo jako{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$1\\,|\\,r_i, q_i\\,|\\,C_{max}$"} />
        </span>
        .
      </div>

      <Wavy />

      <div className="w-full h-full font-typewriter">
        Do wyznaczania harmonogramu w takim problemie szeroko stosowany jest
        algorytm Schrage’a. Jego idea polega na tym, że w każdej chwili, gdy
        maszyna jest wolna, wybierane jest spośród już dostępnych zadań to,
        które ma największy czas stygnięcia{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$q_i$"} />
        </span>
        . Zadania o dużym <MathText text={"$q_i$"} /> są więc obsługiwane
        priorytetowo, ponieważ po zakończeniu obróbki długo „blokują” system.
        Takie ustawienie kolejności pomaga ograniczyć wartość{" "}
        <MathText text={"$C_{max}$"} />, czyli skrócić moment, w którym
        wszystkie zadania są już całkowicie zakończone (łącznie z czasem
        stygnięcia). Algorytm Schrage’a nie jest skomplikowany, a jednocześnie w
        praktyce zwykle daje harmonogramy o bardzo dobrej jakości.
      </div>

      <Squiggly />

      <div className="w-full h-full font-typewriter pb-10 flex justify-center items-center">
        <span className="tracking-wide font-extrabold">
          Kod z implementacją algorytmu Schrage
        </span>
      </div>
      <div className="w-full h-full font-typewriter">
        <CodeExplain
          image={
            <Image
              src="/schrage_code.png"
              alt="Kod algorytmu Schrage"
              width={1526}
              height={558}
            />
          }
          testing={false}
          dividingArray={[
            {
              height: 8,
              tooltip: (
                <>
                  Definicja funkcji <code>schrage(jobs)</code>. Funkcja
                  przyjmuje listę zadań <code>jobs</code>, dla których ma zostać
                  wyznaczony harmonogram i wartość{" "}
                  <MathText text={"$C_{max}$"} />.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Tworzenie listy <code>N</code> – zadań jeszcze
                  nieprzydzielonych do maszyny. Lista jest sortowana rosnąco po
                  czasie dostępności <code>rj</code>, aby zawsze najpierw brać
                  zadania, które pojawiają się najwcześniej.
                </>
              ),
            },
            {
              height: 4,
              tooltip: (
                <>
                  Inicjalizacja pustej listy <code>G</code>. Będą tu trafiały
                  zadania, które są już dostępne (ich{" "}
                  <span className="bg-page3 px-1 rounded-md">
                    <MathText text={"$r_j$"} />
                  </span>{" "}
                  ≤ aktualny czas).
                </>
              ),
            },
            {
              height: 4,
              tooltip: (
                <>
                  Inicjalizacja pustej listy <code>pi</code>. Tutaj zapisywana
                  będzie kolejność wykonywania zadań – ostateczny harmonogram.
                </>
              ),
            },
            {
              height: 4,
              tooltip: (
                <>
                  Zmienna <code>t = 0</code> oznacza aktualny czas w systemie.
                  Na początku czas wynosi 0.
                </>
              ),
            },
            {
              height: 6,
              tooltip: (
                <>
                  Zmienna <code>Cmax = 0</code> przechowuje dotychczas
                  największy czas zakończenia zadania (łącznie z{" "}
                  <span className="bg-page3 px-1 rounded-md">
                    <MathText text={"$q_j$"} />
                  </span>
                  ). Będzie aktualizowana w trakcie działania algorytmu.
                </>
              ),
            },
            {
              height: 5,
              tooltip: (
                <>
                  Główna pętla <code>while G or N</code>. Algorytm działa tak
                  długo, jak istnieją zadania albo w liście zadań dostępnych{" "}
                  <code>G</code>, albo w liście zadań jeszcze nieprzydzielonych{" "}
                  <code>N</code>.
                </>
              ),
            },
            {
              height: 4,
              tooltip: (
                <>
                  Wewnętrzna pętla przenosi zadania z listy <code>N</code> do{" "}
                  <code>G</code>, jeśli ich czas dostępności{" "}
                  <code>N[0]['rj']</code> jest nie większy niż aktualny czas{" "}
                  <code>t</code>. Oznacza to, że zadania te „pojawiły się” już w
                  systemie.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Instrukcja <code>G.append(N.pop(0))</code> – pierwsze zadanie
                  z <code>N</code> jest usuwane z tej listy i dodawane do{" "}
                  <code>G</code>, ponieważ stało się dostępne.
                </>
              ),
            },
            {
              height: 7,
              tooltip: (
                <>
                  Lista <code>G</code> jest sortowana malejąco po{" "}
                  <code>qj</code>. Dzięki temu na początku listy znajduje się
                  zadanie z największym czasem „stygnięcia”{" "}
                  <span className="bg-page3 px-1 rounded-md">
                    <MathText text={"$q_j$"} />
                  </span>
                  , które powinno być obsłużone jako pierwsze.
                </>
              ),
            },
            {
              height: 4,
              tooltip: (
                <>
                  Sprawdzenie, czy lista <code>G</code> nie jest pusta. Jeśli są
                  dostępne zadania, to jedno z nich zostanie teraz przydzielone
                  do maszyny.
                </>
              ),
            },
            {
              height: 4,
              tooltip: (
                <>
                  Zmienna <code>current_job</code> otrzymuje pierwsze zadanie z{" "}
                  <code>G</code> (czyli to z największym <code>qj</code>). Jest
                  to zadanie, które będzie teraz wykonywane.
                </>
              ),
            },
            {
              height: 4,
              tooltip: (
                <>
                  Aktualizacja czasu <code>t</code>. Do bieżącego czasu dodawany
                  jest czas przetwarzania wybranego zadania{" "}
                  <span className="bg-page3 px-1 rounded-md">
                    <MathText text={"$p_j$"} />
                  </span>
                  , ponieważ maszyna wykonuje je w całości.
                </>
              ),
            },
            {
              height: 4,
              tooltip: (
                <>
                  Obliczenie nowej wartości <code>Cmax</code>. Porównywany jest
                  dotychczasowy <code>Cmax</code> z czasem zakończenia
                  aktualnego zadania powiększonym o jego czas stygnięcia{" "}
                  <code>t + qj</code>. Większa z tych wartości staje się nowym{" "}
                  <code>Cmax</code>.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Identyfikator wykonanego zadania <code>current_job['j']</code>{" "}
                  jest dopisywany do listy <code>pi</code>. W ten sposób
                  zapisywana jest kolejność wykonywania zadań.
                </>
              ),
            },
            {
              height: 4,
              tooltip: (
                <>
                  Gałąź <code>else</code> jest wykonywana wtedy, gdy lista{" "}
                  <code>G</code> jest pusta – czyli w danym momencie nie ma
                  żadnego zadania dostępnego do wykonania.
                </>
              ),
            },
            {
              height: 10,
              tooltip: (
                <>
                  Jeśli nie ma dostępnych zadań, ale lista <code>N</code> nie
                  jest pusta, to czas <code>t</code> jest „przeskakiwany” do
                  chwili dostępności najbliższego zadania{" "}
                  <code>N[0]['rj']</code>. Oznacza to, że maszyna czeka bez
                  pracy, aż pojawi się kolejne zadanie.
                </>
              ),
            },
            {
              height: 19,
              tooltip: (
                <>
                  Po zakończeniu pętli zwracane są dwie wartości: ostateczny{" "}
                  <code>Cmax</code> (maksymalny czas zakończenia zadań wraz ze
                  stygnięciem) oraz lista <code>pi</code>, czyli kolejność, w
                  jakiej zadania zostały ustawione przez algorytm Schrage’a.
                </>
              ),
            },
          ]}
        />
      </div>
    </React.Fragment>
  );
}

export default Schrage;
