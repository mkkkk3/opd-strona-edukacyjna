import React from "react";
import "katex/dist/katex.min.css";
import Wavy from "../../../components/layout/decorations/wavy";
import Flowers from "../../../components/layout/decorations/flowers";

function OnlineOffline({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        Różnica między problemami on-line a off-line odnosi się do momentu
        podejmowania decyzji w procesie planowania lub harmonogramowania.
        Obejmuje sposób, w jaki powstaje plan, czy jest on tworzony w całości
        przed rozpoczęciem realizacji, czy też modyfikowany na bieżąco w trakcie
        trwania procesu.
      </div>
      <Wavy />
      <div className="w-full h-full font-typewriter">
        W problemach off-line planowanie odbywa się przed rozpoczęciem procesu.
      </div>
      <span className="block font-typewriter">
        ⦿ Wszystkie dane są znane z wyprzedzeniem – określone są zadania, czasy
        ich trwania, wymagane zasoby oraz momenty ich dostępności.
      </span>
      <span className="block font-typewriter">
        ⦿ Na tej podstawie możliwe jest przygotowanie kompletnego harmonogramu
        wcześniej.
      </span>
      <span className="block font-typewriter">
        ⦿ Tego typu podejście pozwala uzyskać rozwiązanie optymalne lub bardzo
        bliskie optymalnemu w stabilnych warunkach, ponieważ cały przebieg
        procesu jest przewidywalny.
      </span>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">Przykłady:</div>
      <span className="block font-typewriter">
        ⦿ W zakładzie produkcyjnym plan pracy na cały dzień ustalany jest przed
        rozpoczęciem zmian. Wszystkie zadania, czasy operacji i dostępne zasoby
        są znane przed uruchomieniem maszyn.
      </span>

      <Flowers />

      <div className="w-full h-full font-typewriter">
        W problemach on-line decyzje podejmowane są w czasie rzeczywistym, w
        trakcie trwania procesu.
      </div>
      <span className="block font-typewriter">
        ⦿ Planowanie odbywa się dynamicznie, ponieważ nie wszystkie dane są
        znane na początku.
      </span>
      <span className="block font-typewriter">
        ⦿ Mogą pojawiać się nowe zadania, awarie urządzeń, opóźnienia lub zmiany
        priorytetów.
      </span>
      <span className="block font-typewriter">
        ⦿ Wymagane jest bieżące reagowanie i aktualizowanie harmonogramu w
        zależności od zaistniałych warunków.
      </span>
      <span className="block opacity-0">x</span>
      <div className="w-full h-full font-typewriter">Przykłady:</div>
      <span className="block font-typewriter">
        ⦿ W przedsiębiorstwach kurierskich trasy dostaw są modyfikowane w
        trakcie dnia w odpowiedzi na pojawiające się nowe przesyłki, zmiany w
        ruchu drogowym lub warunki pogodowe.
      </span>
    </React.Fragment>
  );
}

export default OnlineOffline;
