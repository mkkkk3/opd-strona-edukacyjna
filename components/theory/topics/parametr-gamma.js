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

function ParametrGamma({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        <MathText text={title} />
      </div>

      <div className="w-full h-full font-typewriter">
        W planowaniu zadań nie chodzi tylko o to, aby ułożyć jakąś kolejność,
        ale też o to, jak ją oceniamy. Do tego służą kryteria optymalizacji,
        czyli po prostu miary, na podstawie których można ocenić, że dany
        harmonogram jest lepszy od innego. W zapisie{" "}
        <MathText text={"$\\alpha\\,|\\,\\beta\\,|\\,\\gamma$"} /> wszystkie
        kryteria związane z oceną harmonogramu ukryte są właśnie pod symbolem{" "}
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$\\gamma$"} />
        </span>
        .
      </div>

      <span className="block opacity-0">x</span>

      <div className="w-full h-full font-typewriter pb-4">
        W praktyce na różnych poziomach planowania patrzymy na inne cele:
      </div>
      <span className="block font-typewriter">
        ⦿ poziom strategiczny – planowanie długoterminowe, np. ograniczanie
        kosztów inwestycji i rozbudowy systemu,
      </span>
      <span className="block font-typewriter">
        ⦿ poziom taktyczny – planowanie średnioterminowe, nacisk na koszty
        operacyjne i sprawną organizację produkcji,
      </span>
      <span className="block font-typewriter">
        ⦿ poziom operacyjny – planowanie krótkoterminowe, codzienne szeregowanie
        zadań na maszynach, często z wieloma kryteriami naraz.
      </span>

      <span className="block opacity-0">x</span>

      <Radio />

      <div className="w-full h-full font-typewriter">
        Bardzo ważne jest odróżnienie kryterium od ograniczenia:
      </div>
      <span className="block font-typewriter">
        Ograniczenie – warunek, który musi być spełniony. Jeżeli narzucimy np.
        że żadne zadanie nie może się spóźnić, to może się okazać, że sensowny
        harmonogram po prostu nie istnieje.
      </span>
      <span className="block font-typewriter">
        Kryterium – coś, co chcemy polepszać, ale dopuszczamy pewien kompromis.
        Np. minimalizacja liczby zadań spóźnionych, wtedy harmonogram istnieje
        zawsze, ale staramy się, żeby zadań po terminie było jak najmniej.
      </span>

      <span className="block opacity-0">x</span>

      <Flowers />

      <div className="w-full h-full font-typewriter">
        Zadanie optymalizacyjne polega na znalezieniu takiego dopuszczalnego
        harmonogramu, dla którego funkcja celu przyjmuje wartość najlepszą z
        możliwych (najczęściej minimalną). W praktyce często stosuje się tzw.{" "}
        kryteria regularne.
      </div>

      <div className="w-full flex justify-center my-4">
        <MathText text={"$f_{\\max} = \\max_{1 \\le i \\le n} f_i(C_i)$"} />
      </div>
      <div className="w-full h-full font-typewriter">
        Ogólna postać kryterium: patrzymy na funkcję{" "}
        <MathText text={"$f_i(C_i)$"} /> dla każdego zadania i bierzemy
        największą wartość. W zależności od tego, co wstawimy jako{" "}
        <MathText text={"$f_i$"} />, otrzymujemy różne konkretne kryteria.
      </div>

      <div className="w-full flex justify-center my-4">
        <MathText text={"$\\sum f_j = \\sum_{i=1}^n f_i(C_i)$"} />
      </div>
      <div className="w-full h-full font-typewriter">
        Tutaj sumujemy wartości funkcji kosztu dla wszystkich zadań. To ogólny
        zapis różnych kryteriów, w których interesuje nas łączny koszt
        harmonogramu.
      </div>

      <Radio />

      <div className="w-full flex justify-center my-4">
        <MathText text={"$C_{\\max} = \\max_{1 \\le i \\le n} C_i$"} />
      </div>
      <div className="w-full h-full font-typewriter">
        Jeśli przyjmiemy <MathText text={"$f_i(t)=t$"} />, to{" "}
        <MathText text={"$f_{\\max}$"} /> zamienia się w klasyczne kryterium{" "}
        makespan. Oznacza ono czas zakończenia ostatniego zadania w
        harmonogramie. Minimalizując <MathText text={"$C_{\\max}$"} />, skracamy
        całkowity czas trwania produkcji i poprawiamy płynność procesu.
      </div>

      <div className="w-full flex justify-center my-4">
        <MathText text={"$\\sum_{i=1}^n C_i$"} />
      </div>
      <div className="w-full h-full font-typewriter">
        Suma wszystkich terminów zakończenia zadań. Minimalizacja tego kryterium
        oznacza, że chcemy, aby zadania średnio kończyły się jak najszybciej.
        Zwiększa to przepustowość systemu.
      </div>

      <div className="w-full flex justify-center my-4">
        <MathText text={"$\\sum_{i=1}^n \\omega_i C_i$"} />
      </div>
      <div className="w-full h-full font-typewriter">
        Tu każde zadanie ma wagę <MathText text={"$\\omega_i \\ge 0$"} />.
        Zadania ważniejsze mogą mieć większą wagę, więc ich późne zakończenie
        jest droższe w funkcji celu niż zakończenie zadań mniej ważnych.
      </div>

      <div className="w-full flex justify-center my-4">
        <MathText
          text={
            "$L_{\\max} = \\max_{1 \\le i \\le n} L_i = \\max_{1 \\le i \\le n}(C_i - d_i)$"
          }
        />
      </div>
      <div className="w-full h-full font-typewriter">
        <MathText text={"$L_i$"} /> to nieterminowość zadania – różnica między
        rzeczywistym czasem zakończenia <MathText text={"$C_i$"} /> a terminem{" "}
        <MathText text={"$d_i$"} />. Kryterium <MathText text={"$L_{\\max}$"} />{" "}
        mierzy największe przekroczenie terminu w całym harmonogramie. Jest
        ważne tam, gdzie nawet niewielkie spóźnienie kluczowego zadania może
        mieć poważne skutki.
      </div>

      <div className="w-full flex justify-center my-4">
        <MathText text={"$T_{\\max} = \\max_{1 \\le i \\le n} T_i$"} />
      </div>
      <div className="w-full h-full font-typewriter">
        <MathText text={"$T_i$"} /> to spóźnienie zadania, ale liczone tylko
        wtedy, gdy zadanie faktycznie jest po terminie (w przeciwnym razie{" "}
        <MathText text={"$T_i = 0$"} />
        ). Kryterium <MathText text={"$T_{\\max}$"} /> skupia się na największym
        rzeczywistym spóźnieniu w harmonogramie.
      </div>

      <div className="w-full flex justify-center my-4">
        <MathText text={"$\\sum_{i=1}^n T_i$"} />
      </div>
      <div className="w-full h-full font-typewriter">
        Suma spóźnień wszystkich zadań. Minimalizacja tego kryterium prowadzi do
        harmonogramu, w którym całkowity czas przekroczenia terminów jest
        możliwie najmniejszy. To dobre podejście, gdy wiele zadań ma podobny
        priorytet.
      </div>

      <div className="w-full flex justify-center my-4">
        <MathText text={"$\\sum_{i=1}^n \\omega_i T_i$"} />
      </div>
      <div className="w-full h-full font-typewriter">
        Ważona suma spóźnień. Pozwala uwzględnić, że spóźnienie zadania
        kluczowego (z dużą wagą <MathText text={"$\\omega_i$"} />) jest gorsze
        niż spóźnienie zadania mniej ważnego. Dzięki temu harmonogram lepiej
        odzwierciedla priorytety biznesowe.
      </div>

      <div className="w-full flex justify-center my-4">
        <MathText text={"$\\sum_{i=1}^n U_i$"} />
      </div>
      <div className="w-full h-full font-typewriter">
        <MathText text={"$U_i$"} /> przyjmuje wartość 1, jeśli zadanie zakończy
        się po terminie (<MathText text={"$C_i > d_i$"} />) i 0, jeśli mieści
        się w terminie. Suma <MathText text={"$\\sum U_i$"} /> po prostu zlicza
        liczbę zadań spóźnionych. Minimalizując tę wartość, staramy się, aby jak
        najwięcej zadań było skończonych na czas, nawet jeśli niektóre spóźnią
        się bardziej, a inne mniej.
      </div>

      <div className="w-full flex justify-center my-4">
        <MathText text={"$\\sum_{i=1}^n \\omega_i U_i$"} />
      </div>
      <div className="w-full h-full font-typewriter mb-6">
        Tu, oprócz tego, czy zadanie jest spóźnione, bierzemy pod uwagę także
        jego wagę <MathText text={"$\\omega_i$"} />. Spóźnienie zadania
        kluczowego bardziej podnosi wartość funkcji celu niż spóźnienie zadania
        mało istotnego.
      </div>

      <Flowers />
    </React.Fragment>
  );
}

export default ParametrGamma;
