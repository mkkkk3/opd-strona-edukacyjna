import React from "react";
import "katex/dist/katex.min.css";
import Radio from "../../../components/layout/decorations/radio";
import Squiggly from "../../../components/layout/decorations/squiggly";

function NPTrudnosc({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        NP-trudność to pojęcie opisujące problemy, które są wyjątkowo trudne do
        rozwiązania w sensie obliczeniowym. Mówi się tak o zadaniach, dla
        których nie istnieje znany szybki sposób znalezienia rozwiązania, tzn.
        czas potrzebny do obliczeń rośnie bardzo szybko wraz z rozmiarem danych
        wejściowych. W praktyce oznacza to, że jeśli problem ma np. tylko kilka
        elementów, komputer poradzi sobie z nim bez problemu, ale gdy tych
        elementów jest kilkanaście lub kilkadziesiąt, liczba możliwych
        kombinacji rośnie tak szybko, że nawet bardzo dobry komputer nie jest w
        stanie sprawdzić ich wszystkich w rozsądnym czasie.
      </div>
      <Squiggly />
      <div className="w-full h-full font-typewriter">
        Co ważne, problem NP-trudny często można łatwo sprawdzić, gdy
        rozwiązanie zostanie podane, ale znalezienie tego rozwiązania
        samodzielnie jest bardzo czasochłonne. W świecie algorytmów oznacza to,
        że dla wielu problemów nie da się stworzyć szybkiego i idealnego
        algorytmu, a zamiast tego stosuje się metody przybliżone, heurystyki lub
        algorytmy, które działają dobrze tylko dla określonego typu danych. To
        właśnie zrozumienie NP-trudności pozwala przewidzieć, czy dany problem
        da się rozwiązać dokładnie, czy trzeba szukać innych metod zbliżonych do
        optymalnych.
      </div>
      <Radio />
    </React.Fragment>
  );
}

export default NPTrudnosc;
