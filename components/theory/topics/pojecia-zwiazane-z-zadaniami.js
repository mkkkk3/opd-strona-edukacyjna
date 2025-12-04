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

function PojeciaZwiazaneZZadaniami({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>

      <div className="w-full h-full font-typewriter">
        Dla każdego zadania definiuje się kilka podstawowych wielkości, które
        opisują, kiedy zadanie może się zacząć, jak długo znajduje się w
        systemie oraz czy zostanie ukończone na czas.
      </div>

      <span className="block opacity-0">x</span>

      <div className="w-full h-full font-typewriter">
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$r_i$"} />
        </span>{" "}
        – czas gotowości zadania <MathText text={"$i$"} />. Jest to
        najwcześniejszy moment, od którego zadanie może zostać rozpoczęte.
        Uwzględnia on dostępność zasobów, np. materiału czy maszyny.
      </div>

      <div className="w-full h-full font-typewriter mt-2">
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$q_i$"} />
        </span>{" "}
        – czas dostarczenia zadania <MathText text={"$i$"} />. To dodatkowy
        czas, który upływa po zakończeniu obróbki, zanim zadanie opuści system.
        W praktyce może to być np. czas potrzebny na transport gotowego
        produktu.
      </div>

      <div className="w-full h-full font-typewriter mt-2">
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$d_i$"} />
        </span>{" "}
        – żądany termin zakończenia zadania <MathText text={"$i$"} />. Określa,
        do kiedy zadanie powinno być ukończone, np. zgodnie z planem
        produkcyjnym lub zamówieniem klienta.
      </div>

      <div className="w-full h-full font-typewriter mt-2">
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$o_i$"} />
        </span>{" "}
        – liczba operacji przypisana do zadania <MathText text={"$i$"} />.
        Informuje, z ilu pojedynczych kroków technologicznych (operacji) składa
        się dane zadanie.
      </div>

      <div className="w-full h-full font-typewriter">
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$S_i$"} />
        </span>{" "}
        – termin rozpoczęcia realizacji zadania <MathText text={"$i$"} />. Jest
        to zmienna decyzyjna. Jej wartość zależy od przyjętego harmonogramu. W
        praktyce odpowiada początku pierwszej operacji przypisanej do tego
        zadania.
      </div>

      <div className="w-full h-full font-typewriter mt-2">
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$C_i$"} />
        </span>{" "}
        – termin zakończenia realizacji zadania <MathText text={"$i$"} />.
        Oznacza moment, w którym wszystkie operacje wchodzące w skład zadania są
        już zakończone.
      </div>

      <div className="w-full h-full font-typewriter mt-2">
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$L_i$"} />
        </span>{" "}
        – nieterminowość zakończenia zadania <MathText text={"$i$"} />. Jest to
        różnica między rzeczywistym czasem zakończenia{" "}
        <MathText text={"$C_i$"} /> a żądanym terminem{" "}
        <MathText text={"$d_i$"} />. Wartość dodatnia oznacza opóźnienie, a
        ujemna oznacza zakończenie przed czasem.
      </div>

      <div className="w-full h-full font-typewriter mt-2">
        <span className="bg-page3 px-1 rounded-md">
          <MathText text={"$T_i$"} />
        </span>{" "}
        – spóźnienie zadania <MathText text={"$i$"} />. Jest to realne
        przekroczenie terminu. Jeśli <MathText text={"$C_i \\le d_i$"} />, to{" "}
        <MathText text={"$T_i = 0$"} />, a gdy <MathText text={"$C_i > d_i$"} />
        , to <MathText text={"$T_i = C_i - d_i$"} />. Spóźnienie ignoruje
        sytuacje, gdy zadanie zakończyło się przed czasem.
      </div>

      <span className="block opacity-0">x</span>

      <div className="w-full h-full font-typewriter">
        Te wielkości pozwalają dokładnie opisać zachowanie zadań w systemie:
        kiedy mogą ruszyć, kiedy faktycznie kończą się ich wszystkie operacje
        oraz czy zostały wykonane zgodnie z planem.
      </div>

      <Flowers />
    </React.Fragment>
  );
}

export default PojeciaZwiazaneZZadaniami;
