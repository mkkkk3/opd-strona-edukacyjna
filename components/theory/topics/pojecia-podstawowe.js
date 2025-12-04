import React from "react";
import "katex/dist/katex.min.css";
import Wavy from "../../../components/layout/decorations/wavy";

function PodstawowePojecia({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        W problemach szeregowania kluczowe jest zrozumienie, w jaki sposób
        opisuje się elementy składające się na proces produkcyjny lub usługowy.
        Podstawową jednostką pracy jest zadanie, rozumiane jako większy fragment
        działalności, który prowadzi do osiągnięcia określonego celu. Każde
        zadanie składa się z kilku operacji, czyli mniejszych kroków
        wykonywanych w określonej kolejności technologicznej. Operacje wymagają
        użycia maszyn lub innych zasobów, a każda z nich ma własny czas trwania
        oraz określone miejsce w całym procesie. Opisanie zadań i operacji w
        takiej strukturze pozwala uchwycić zależności między kolejnymi etapami
        oraz ograniczenia wynikające z dostępności zasobów. To właśnie te
        zależności decydują o tym, jak trudne jest ustalenie dobrej kolejności
        ich realizacji. Dalsza część wyjaśnia te zagadnienia dokładniej.
      </div>
      <Wavy />
    </React.Fragment>
  );
}

export default PodstawowePojecia;
