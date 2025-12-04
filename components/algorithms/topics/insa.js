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

function Insa({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title} />
      </div>

      <div className="w-full h-full font-typewriter">
        Algorytm INSA jest prostą heurystyką konstrukcyjną stosowaną w problemie
        gniazdowym, w którym każde zadanie może mieć inną liczbę operacji oraz
        własną kolejność technologiczną. Zamiast szukać od razu najlepszego
        możliwego harmonogramu, algorytm buduje go krok po kroku. Najpierw
        tworzona jest lista wszystkich operacji uporządkowana według numeru
        zadania i numeru operacji w tym zadaniu. Dzięki temu zostaje zachowana
        poprawna kolejność technologiczna. Najpierw pierwsza operacja zadania,
        potem druga itd. Następnie dla każdej operacji wyznaczany jest możliwie
        najwcześniejszy czas rozpoczęcia, tak aby nie łamać ograniczeń: maszyna
        może przetwarzać tylko jedną operację w danym momencie, a operacja w
        zadaniu może wystartować dopiero po zakończeniu poprzedniej.
      </div>

      <Wavy />

      <div className="w-full h-full font-typewriter">
        INSA opiera się na tym, że każda operacja jest planowana tak wcześnie,
        jak tylko pozwalają na to dostępność maszyny oraz zakończenie
        wcześniejszych operacji tego samego zadania. Po obliczeniu czasu startu
        i zakończenia operacji informacja ta jest zapisywana w harmonogramie, a
        dostępność maszyny zostaje zaktualizowana. Procedura powtarza się, aż
        wszystkie operacje zostaną przydzielone. Algorytm nie gwarantuje
        znalezienia rozwiązania optymalnego, ale działa szybko i dobrze sprawdza
        się dla małych oraz średnich instancji, dając harmonogram spełniający
        wszystkie ograniczenia z przybliżonym, często niedługim całkowitym
        czasem realizacji <MathText text={"$C_{max}$"} />.
      </div>

      <Squiggly />

      <div className="w-full h-full font-typewriter pb-10 flex justify-center items-center">
        <span className="tracking-wide font-extrabold">
          Kod z implementacją algorytmu INSA
        </span>
      </div>

      <div className="w-full h-full font-typewriter">
        <CodeExplain
          image={
            <Image
              src="/insa_code.png"
              alt="Kod algorytmu INSA"
              width={2532}
              height={1626}
            />
          }
          testing={false}
          dividingArray={[
            {
              height: 6,
              tooltip: (
                <>
                  Definicja funkcji <code>insa(jobs, m)</code>, która buduje
                  harmonogram dla podanych zadań <code>jobs</code> i{" "}
                  <code>m</code> maszyn.
                </>
              ),
            },
            {
              height: 2,
              tooltip: (
                <>
                  Tworzenie słownika <code>schedule</code>, w którym dla każdej
                  maszyny przygotowywana jest pusta lista operacji, które będą
                  na niej wykonywane.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Inicjalizacja słownika <code>job_progress</code>. Dla każdego
                  zadania zapamiętywany jest numer kolejnej operacji do
                  zaplanowania (<code>next_op</code>) oraz czas zakończenia
                  ostatniej zaplanowanej operacji (<code>completion_time</code>
                  ).
                </>
              ),
            },
            {
              height: 2,
              tooltip: (
                <>
                  Słownik <code>machine_available</code> przechowuje informację,
                  od kiedy każda maszyna jest wolna. Na początku wszystkie
                  maszyny są dostępne od czasu 0.
                </>
              ),
            },
            {
              height: 5,
              tooltip: (
                <>
                  {" "}
                  Lista <code>all_ops</code> będzie zawierała wszystkie operacje
                  ze wszystkich zadań.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  {" "}
                  Iteracja po zadaniach – przechodzenie przez każde zadanie w
                  zbiorze <code>jobs</code>.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Iteracja po operacjach danego zadania i dodawanie ich do listy
                  wszystkich operacji.
                </>
              ),
            },
            {
              height: 5,
              tooltip: (
                <>
                  {" "}
                  Dodanie kopii operacji do <code>all_ops</code>, tak aby dalsze
                  modyfikacje nie zmieniały oryginalnych danych.
                </>
              ),
            },
            {
              height: 5,
              tooltip: (
                <>
                  Posortowanie wszystkich operacji według <code>job_id</code>{" "}
                  oraz <code>op_id</code>. Dzięki temu zachowana jest poprawna
                  kolejność technologiczna w obrębie każdego zadania.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  {" "}
                  Pętla działa tak długo, jak istnieją jeszcze nieprzydzielone
                  operacje w <code>all_ops</code>.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  {" "}
                  Iteracja po kopii listy <code>all_ops</code>. Używana jest
                  kopia, aby móc usuwać operacje z oryginalnej listy w trakcie
                  pętli.
                </>
              ),
            },
            {
              height: 2,
              tooltip: (
                <>
                  {" "}
                  Odczyt identyfikatora zadania <code>job_id</code> z aktualnej
                  operacji.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  {" "}
                  Odczyt numeru operacji <code>op_id</code> w ramach danego
                  zadania.
                </>
              ),
            },
            {
              height: 2,
              tooltip: (
                <>
                  {" "}
                  Sprawdzenie, czy ta operacja jest kolejną, która powinna
                  zostać zaplanowana w danym zadaniu (porównanie z{" "}
                  <code>next_op</code>).
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  {" "}
                  Pobranie numeru maszyny, na której ta operacja ma być
                  wykonana.
                </>
              ),
            },
            {
              height: 2,
              tooltip: (
                <>
                  {" "}
                  Pobranie czasu trwania operacji <code>duration</code>.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  {" "}
                  Wyznaczenie czasu rozpoczęcia operacji jako maksimum z:
                  chwili, gdy maszyna będzie wolna, oraz chwili zakończenia
                  poprzedniej operacji tego zadania.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  {" "}
                  Obliczenie czasu zakończenia operacji jako{" "}
                  <code>start_time + duration</code>.
                </>
              ),
            },
            {
              height: 18,
              tooltip: (
                <>
                  {" "}
                  Dodanie zaplanowanej operacji do harmonogramu danej maszyny –
                  zapisywane są identyfikatory zadania i operacji, czasy startu
                  i końca oraz czas trwania.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  Zaktualizowanie czasu dostępności maszyny – jest ona wolna
                  dopiero od chwili zakończenia tej operacji.
                </>
              ),
            },
            {
              height: 3,
              tooltip: (
                <>
                  {" "}
                  Zapisanie czasu zakończenia bieżącej operacji jako nowego
                  czasu ukończenia zadania w <code>job_progress</code>.
                </>
              ),
            },
            {
              height: 2,
              tooltip: (
                <>
                  Zwiększenie numeru kolejnej operacji <code>next_op</code> dla
                  tego zadania – przygotowanie do planowania następnego kroku.
                </>
              ),
            },
            {
              height: 4,
              tooltip: (
                <>
                  {" "}
                  Usunięcie zaplanowanej operacji z listy <code>all_ops</code>,
                  ponieważ została już umieszczona w harmonogramie.
                </>
              ),
            },
            {
              height: 12,
              tooltip: (
                <>
                  {" "}
                  Po zaplanowaniu wszystkich operacji zwracany jest kompletny
                  harmonogram <code>schedule</code> opisujący pracę każdej
                  maszyny.
                </>
              ),
            },
          ]}
        />
      </div>
    </React.Fragment>
  );
}

export default Insa;
