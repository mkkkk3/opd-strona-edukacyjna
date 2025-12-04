import React from "react";
import "katex/dist/katex.min.css";
import Radio from "../../../components/layout/decorations/radio";
import Wavy from "../../../components/layout/decorations/wavy";

function CzynnikiEkonomiczne({ title }) {
  return (
    <React.Fragment>
      <div className="w-full h-full text-3xl tracking-wide font-typewriter font-bold mb-6">
        {title}
      </div>
      <div className="w-full h-full font-typewriter">
        Losowe zmiany zapotrzebowania mają duży wpływ na skuteczność metod
        planowania i szeregowania zadań. Kiedy zapotrzebowanie jest stabilne, to
        reguły szeregowania mogą działać bardzo dobrze, ponieważ pozwalają
        tworzyć harmonogramy, w których zadania wykonywane są terminowo, a
        maszyny są efektywnie wykorzystywane. Jednak w sytuacjach, gdy popyt
        zaczyna się wahać i staje się nieprzewidywalny, skuteczność tych samych
        reguł może spadać. Wzrost zmienności prowadzi do opóźnień, przestojów
        czy problemów z utrzymaniem płynności procesu. Nawet reguły, które w
        stabilnych warunkach uznawane są za najlepsze, mogą okazać się mało
        efektywne, gdy pojawiają się nagłe zmiany w liczbie lub rodzaju zleceń.
        Dlatego w praktyce ważne jest, aby system planowania potrafił reagować
        na wahania zapotrzebowania i dostosowywać się do nich w czasie
        rzeczywistym. Wymaga to stosowania bardziej elastycznych metod, które są
        odporne na zmiany i potrafią utrzymać wysoką jakość harmonogramu mimo
        niepewności.
      </div>
      <Radio />
      <div className="w-full h-full font-typewriter">
        Wpływ wahań zapotrzebowania można łatwo zaobserwować w różnych branżach.
        Na przykład w produkcji sezonowej, takiej jak przemysł odzieżowy czy
        spożywczy, zapotrzebowanie na produkty może gwałtownie rosnąć w
        określonych porach roku, a następnie spadać. Jeśli harmonogram produkcji
        nie uwzględni takich zmian, może dojść do opóźnień w realizacji zamówień
        lub nadprodukcji towarów, których nikt nie kupi. W logistyce czy
        transporcie losowe wahania liczby przesyłek w ciągu dnia mogą powodować
        przeciążenie magazynów lub niedobory zasobów w innych miejscach. W
        takich przypadkach stosowanie elastycznych strategii szeregowania, które
        uwzględniają zmienność popytu, pozwala utrzymać stabilność systemu i
        uniknąć poważnych zakłóceń w pracy.
      </div>
      <Wavy />
    </React.Fragment>
  );
}

export default CzynnikiEkonomiczne;
