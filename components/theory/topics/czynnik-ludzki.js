import React from "react";
import "katex/dist/katex.min.css";
import Flowers from "../../../components/layout/decorations/flowers";
import Radio from "../../../components/layout/decorations/radio";

function CzynnikLudzki({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        W optymalizacji procesów dyskretnych duży wpływ na wyniki ma czynnik
        ludzki, który jest jednym z głównych źródeł niepewności. Człowiek bierze
        udział w wielu etapach procesu produkcyjnego, od planowania, przez
        obsługę maszyn, aż po kontrolę jakości. W praktyce oznacza to, że nawet
        najlepiej zaplanowany harmonogram może nie zostać zrealizowany dokładnie
        tak, jak przewidziano. Ludzie różnią się tempem pracy, doświadczeniem,
        podejściem do obowiązków i sposobem reagowania na sytuacje stresowe.
        Mogą popełniać błędy, podejmować decyzje w różny sposób lub działać
        wolniej niż zakładano. Wszystkie te czynniki sprawiają, że rzeczywisty
        przebieg procesu często odbiega od modelu teoretycznego. W tradycyjnych
        metodach optymalizacji zakłada się, że każdy etap przebiega idealnie i
        bezbłędnie, co w rzeczywistości jest bardzo rzadkie. Dlatego coraz
        częściej wprowadza się modele, które uwzględniają ludzkie zachowania i
        nieprzewidywalność, aby plan był bardziej realistyczny i odporny na
        nieoczekiwane sytuacje.
      </div>
      <Flowers />
      <div className="w-full h-full font-typewriter">
        Wpływ czynnika ludzkiego można łatwo zauważyć w praktyce. Na przykład w
        zakładzie produkcyjnym, gdzie pracownicy obsługują maszyny, tempo pracy
        może się różnić w zależności od zmęczenia, motywacji czy doświadczenia.
        W logistyce kierowcy mogą reagować inaczej na stres, podejmować różne
        decyzje dotyczące trasy lub robić przerwy w różnych momentach. W branży
        usługowej pracownicy mogą popełniać błędy w obsłudze klientów, co wpływa
        na czas realizacji zadań. Takie sytuacje pokazują, że czynnik ludzki
        wprowadza zmienność, której nie da się całkowicie przewidzieć.
      </div>
      <Radio />
    </React.Fragment>
  );
}

export default CzynnikLudzki;
