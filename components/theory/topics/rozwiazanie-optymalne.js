import React from "react";
import "katex/dist/katex.min.css";
import Squiggly from "../../../components/layout/decorations/squiggly";
import Wavy from "../../../components/layout/decorations/wavy";

function RozwiazanieOptymalne({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        W rzeczywistych zastosowaniach dokładne obliczenie rozwiązania
        optymalnego często wymaga bardzo dużej ilości czasu i zasobów. Wraz ze
        wzrostem liczby zadań lub elementów do zaplanowania, liczba możliwych
        kombinacji gwałtownie rośnie, co sprawia, że pełne obliczenie
        najlepszego rozwiązania staje się praktycznie niemożliwe w rozsądnym
        czasie. Dlatego w wielu sytuacjach zamiast metod gwarantujących idealny
        wynik stosuje się metody szybsze, które dają rozwiązania wystarczająco
        dobre, choć nie zawsze w pełni optymalne. Takie podejście pozwala
        szybciej podejmować decyzje, co ma duże znaczenie w systemach, które
        muszą działać w czasie rzeczywistym.
      </div>
      <Squiggly />
      <div className="w-full h-full font-typewriter">
        W praktyce oznacza to, że wybór metody rozwiązywania problemu zależy od
        tego, co jest ważniejsze, maksymalna dokładność czy szybkość działania.
        Na przykład w planowaniu produkcji często nie ma czasu na obliczenie
        idealnego harmonogramu dla setek zadań, więc wykorzystuje się algorytmy
        heurystyczne, które w kilka sekund potrafią stworzyć plan bardzo
        zbliżony do najlepszego. Podobnie jest w logistyce czy transporcie.
        Zamiast szukać absolutnie najkrótszej trasy dla wszystkich pojazdów,
        stosuje się metody przybliżone, które pozwalają uzyskać dobry wynik w
        krótkim czasie. W ten sposób osiąga się kompromis między jakością
        rozwiązania a kosztami jego wyznaczenia, co w praktyce często okazuje
        się najbardziej efektywnym podejściem.
      </div>
      <Wavy />
    </React.Fragment>
  );
}

export default RozwiazanieOptymalne;
