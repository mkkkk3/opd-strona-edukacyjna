import React from "react";
import "katex/dist/katex.min.css";
import Flowers from "../../../components/layout/decorations/flowers";
import Leaf from "../../../components/layout/decorations/leaf";

function CharakterystykaProblemow({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        To wprowadzenie do optymalizacji procesów dyskretnych skupia się na
        problemach, w których wszystkie potrzebne informacje są znane zanim
        zacznie się planowanie.
      </div>
      <Flowers />
      <div className="w-full h-full font-typewriter">
        Oznacza to, że można przygotować dokładny plan działania z
        wyprzedzeniem, bo wiadomo, jakie są zadania, ile trwają i jakie zasoby
        będą potrzebne. Dzięki temu da się stworzyć harmonogram, który będzie
        najlepszy możliwy lub bardzo bliski najlepszemu już przed rozpoczęciem
        procesu.
      </div>
      <Leaf />
      <div className="w-full h-full font-typewriter">
        Ważne jest tutaj zrozumienie, że rozwiązanie optymalne nie oznacza po
        prostu rozwiązania „dobrego”. Oznacza ono takie rozwiązanie, dla którego
        nie istnieje żadne lepsze. Jest więc najlepszym możliwym wynikiem w
        danym zestawie warunków i ograniczeń. W praktyce oznacza to, że jeśli
        znajdziemy rozwiązanie optymalne, to żadne inne ustawienie zadań,
        kolejność działań czy podział zasobów nie pozwoli osiągnąć krótszego
        czasu realizacji, mniejszych kosztów czy lepszego wykorzystania maszyn.
        Dlatego dążenie do znalezienia rozwiązania optymalnego ma na celu
        osiągnięcie absolutnie najlepszego możliwego efektu, a nie tylko
        takiego, który wydaje się wystarczająco dobry.
      </div>
    </React.Fragment>
  );
}

export default CharakterystykaProblemow;
