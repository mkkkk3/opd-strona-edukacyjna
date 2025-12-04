import React from "react";
import "katex/dist/katex.min.css";
import Leaf from "../../../components/layout/decorations/leaf";
import Radio from "../../../components/layout/decorations/radio";

function TeoriaRzeczywistosc({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        W rzeczywistych procesach zarządzania dane rzadko są całkowicie
        dokładne. Może to dotyczyć czasu wykonania zadań, dostępności maszyn,
        ilości zasobów czy kolejności działań. Nawet jeśli plan zostanie
        przygotowany bardzo dokładnie, rzeczywistość często okazuje się bardziej
        złożona i trudna do przewidzenia.
      </div>
      <Leaf />
      <div className="w-full h-full font-typewriter">
        W codziennej pracy mogą wystąpić różne nieprzewidziane sytuacje, awarie
        urządzeń, opóźnienia dostaw, błędy ludzkie, zmiany priorytetów czy nagłe
        zlecenia. Wszystkie te czynniki sprawiają, że rzeczywiste parametry
        procesu często różnią się od założeń teoretycznych. Dlatego w praktyce
        planowanie musi uwzględniać pewien poziom niepewności, a systemy
        zarządzania powinny być przygotowane na konieczność szybkiego reagowania
        i dostosowywania się do zmieniających się warunków.
      </div>
      <Radio />
    </React.Fragment>
  );
}

export default TeoriaRzeczywistosc;
