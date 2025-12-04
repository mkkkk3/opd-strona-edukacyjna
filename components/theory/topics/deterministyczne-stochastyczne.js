import React from "react";
import "katex/dist/katex.min.css";
import Radio from "../../../components/layout/decorations/radio";
import Squiggly from "../../../components/layout/decorations/squiggly";

function DeterministyczneStochastyczne({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        W problemach deterministycznych wszystkie dane i warunki są znane oraz
        niezmienne.
      </div>
      <span className="block font-typewriter">
        ⦿ Wiadomo dokładnie, ile czasu zajmuje każde zadanie, które maszyny są
        dostępne oraz kiedy proces się rozpoczyna.
      </span>
      <span className="block font-typewriter">
        ⦿ Na tej podstawie możliwe jest wcześniejsze zaplanowanie całego
        harmonogramu i wyznaczenie rozwiązania optymalnego lub bardzo bliskiego
        optymalnemu.
      </span>
      <span className="block font-typewriter">
        ⦿ Tego typu model znajduje zastosowanie w sytuacjach, w których warunki
        pracy są stabilne i przewidywalne.
      </span>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">Przykłady:</div>
      <span className="block font-typewriter">
        ⦿ Produkcja w fabryce z ustalonym planem – zadania, czasy ich trwania
        oraz kolejność maszyn są dokładnie określone, a proces przebiega zgodnie
        z planem.
      </span>
      <span className="block font-typewriter">
        ⦿ Rozkład jazdy pociągów – czasy odjazdów i przyjazdów są ustalone z
        wyprzedzeniem, a pociągi kursują regularnie według harmonogramu.
      </span>
      <span className="block font-typewriter">
        ⦿ Planowanie dostaw w magazynie – terminy przyjazdów ciężarówek, ilość
        towaru oraz czas rozładunku są znane, co umożliwia zaplanowanie pracy z
        wyprzedzeniem.
      </span>
      <Radio />
      <div className="w-full h-full font-typewriter">
        W problemach stochastycznych część informacji jest niepewna lub zmienna.
      </div>
      <span className="block font-typewriter">
        ⦿ Czasy przetwarzania, awarie maszyn, opóźnienia dostaw czy pojawianie
        się nowych zadań mogą mieć charakter losowy.
      </span>
      <span className="block font-typewriter">
        ⦿ Harmonogram nie jest ustalany raz na zawsze – musi być na bieżąco
        dostosowywany do zmieniających się warunków.
      </span>
      <span className="block font-typewriter">
        ⦿ Rozwiązywanie takich problemów wymaga stosowania algorytmów
        adaptacyjnych lub metod symulacyjnych, które umożliwiają reagowanie na
        niepewność.
      </span>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">Przykłady:</div>
      <span className="block font-typewriter">
        ⦿ Dostawy w czasie rzeczywistym – trasy dostaw muszą być aktualizowane w
        zależności od ruchu drogowego, pogody czy opóźnień.
      </span>
      <span className="block font-typewriter">
        ⦿ Planowanie pracy w szpitalu – grafik lekarzy wymaga częstych zmian ze
        względu na pojawianie się nagłych przypadków czy awarie sprzętu.
      </span>
      <span className="block font-typewriter">
        ⦿ Zarządzanie lotami na lotnisku – harmonogram startów i lądowań podlega
        ciągłym modyfikacjom w wyniku warunków pogodowych lub opóźnień lotów.
      </span>
      <Squiggly />
      <div className="w-full h-full font-typewriter">
        Warto zaznaczyć, że klasyfikacja problemu jako deterministycznego lub
        stochastycznego zależy od przyjętego punktu widzenia oraz zakresu
        analizowanych czynników. Ten sam proces może być opisany w sposób
        deterministyczny, jeśli zakłada się, że wszystkie dane są znane i
        niezmienne, lub w sposób stochastyczny, gdy uwzględniana jest niepewność
        oraz losowość zdarzeń.
      </div>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">
        Przykładowo, planowanie produkcji w fabryce może być traktowane jako
        problem deterministyczny, gdy czasy operacji i dostępność maszyn są
        stałe. Jednak po uwzględnieniu możliwości awarii maszyn, opóźnień w
        dostawach surowców czy zmian priorytetów zleceń, ten sam problem staje
        się stochastyczny, ponieważ pojawia się element niepewności wymagający
        dynamicznego reagowania.
      </div>
    </React.Fragment>
  );
}

export default DeterministyczneStochastyczne;
