import React from "react";
import "katex/dist/katex.min.css";
import Flowers from "../../../components/layout/decorations/flowers";
import Leaf from "../../../components/layout/decorations/leaf";
import Radio from "../../../components/layout/decorations/radio";

function GeneratoryPseudolosowe({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        Generatory liczb pseudolosowych to specjalne algorytmy tworzące liczby,
        które zachowują się jak losowe, choć w rzeczywistości są w pełni
        deterministyczne. Działają według określonego wzoru matematycznego,
        który na podstawie jednej liczby początkowej (seed) wylicza kolejne
        wartości. Dzięki temu generator nie korzysta z żadnego prawdziwego
        źródła losowości, ale tworzy sekwencję liczb wyglądającą przypadkowo. To
        właśnie ta cecha sprawia, że są tak szeroko stosowane w problemach
        szeregowania, ponieważ pozwalają tworzyć dane, symulacje czy
        eksperymenty w sposób kontrolowany.
      </div>
      <Flowers />
      <div className="w-full h-full font-typewriter">
        Dobry generator liczb pseudolosowych musi spełniać kilka ważnych
        wymagań:
      </div>
      <span className="black opacity-0">x</span>
      <span className="block font-typewriter">
        ⦿ Wyliczalność – generator powinien działać na podstawie jasnego,
        deterministycznego wzoru. Jeśli znany jest seed oraz zasady działania
        generatora, to możliwe jest obliczenie całej sekwencji liczb. Pozwala to
        dokładnie określić, jakie wartości zostaną wygenerowane w każdej
        sytuacji.
      </span>
      <span className="block font-typewriter">
        ⦿ Powtarzalność dla tego samego seedu – uruchomienie generatora z tą
        samą wartością początkową powinno zawsze dawać identyczną sekwencję
        liczb. Zapewnia to możliwość powtarzalnego testowania algorytmów,
        odtwarzania wyników eksperymentów oraz łatwego debugowania.
      </span>
      <span className="block font-typewriter">
        ⦿ Długi okres – okres generatora określany jest przez liczbę kroków, po
        których sekwencja zaczyna się powtarzać. Generator powinien mieć okres
        na tyle długi, aby liczby nie powracały zbyt szybko.
      </span>
      <span className="block font-typewriter">
        ⦿ Dobra losowość statystyczna – generowane liczby nie powinny tworzyć
        widocznych wzorców. Powinny charakteryzować się równomiernym rozkładem,
        brakiem korelacji oraz brakiem powtarzalnych struktur. Dzięki temu mogą
        być traktowane jak naturalnie losowe i wykorzystywane w symulacjach,
        analizach oraz testach.
      </span>
      <span className="block font-typewriter">
        ⦿ Wrażliwość na seed – niewielka zmiana wartości początkowej powinna
        prowadzić do wygenerowania całkowicie innej liczby. Jeśli zmiana seedu
        nie wpływa wyraźnie na wyniki, generator staje się zbyt przewidywalny,
        co może skutkować niską jakością generowanych danych.
      </span>
      <Leaf />
      <div className="w-full h-full font-typewriter">
        Generator liczb pseudolosowych różni się od generatora prawdziwie
        losowego przede wszystkim źródłem losowości. W pseudolosowym generatorze
        algorytm sam wylicza kolejne wartości i wszystko opiera się na
        matematycznych wzorach, więc jest przewidywalne, jeśli zna się te
        informacje. W przypadku generatorów prawdziwie losowych wykorzystuje się
        natomiast zjawiska fizyczne, które są naturalnie nieprzewidywalne, jak
        promieniowanie tła, szum termiczny albo nawet ruch myszy czy opóźnienia
        klawiatury. Dlatego prawdziwie losowe liczby są naturalnie
        niepowtarzalne, a ich wygenerowanie nie polega na obliczeniach
        matematycznych, tylko na obserwacji rzeczywistego świata.
      </div>
      <Radio />
    </React.Fragment>
  );
}

export default GeneratoryPseudolosowe;
