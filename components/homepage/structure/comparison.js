import {
  MachineFour,
  MachineOne,
  MachineThree,
  MachineTwo,
} from "../../../helpers/svgs/homepage-svgs";
import React from "react";
import useMeasure from "react-use-measure";
import { useIsDesktop } from "../../../helpers/helpers";

function Comparison() {
  const [gridRef, { height }] = useMeasure();
  const isDesktop = useIsDesktop(768);

  return (
    <React.Fragment>
      {isDesktop && (
        <div className="w-full h-[10rem] md:h-[12.8rem] relative bg-page1 overflow-hidden">
          <div className="absolute inset-0 max-h-32 top-20 z-10 flex px-36 lg:px-64">
            <MachineOne />
            {isDesktop && <MachineTwo />}
            <MachineThree />
            {isDesktop && <MachineFour />}
          </div>
          <div className="absolute inset-0 opacity-100 brightness-200 bg-grain" />
          <div className="absolute inset-0 opacity-100 brightness-200 bg-grain" />
        </div>
      )}
      <div className="w-full h-[8.2rem] md:h-[5.9rem] relative bg-page3">
        <div className="absolute z-10 w-full h-full">
          <span className="flex justify-center py-4 uppercase font-comic tracking-widest font-extrabold text-5xl lg:text-7xl text-pageMenu text-center">
            Co znajduje się na stronie?
          </span>
        </div>
        <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
        <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
      </div>
      <div className="w-full relative bg-page1">
        <div className="relative">
          <div style={{ height }} />

          <div ref={gridRef} className="absolute top-0 left-0 right-0 z-10">
            <div className="w-full grid grid-cols-2 grid-rows-2">
              <div className="col-span-2 md:row-span-2 md:col-span-1 py-16 px-8 md:py-16 md:ps-8 md:pe-4">
                <div className="w-full h-full rounded-xl bg-page3 shadow-[0px_4px_16px_rgba(56,52,52,0.3),_0px_8px_24px_rgba(56,52,52,0.3)]">
                  <span className="flex justify-center py-4 uppercase font-comic tracking-widest font-extrabold text-5xl lg:text-7xl text-pageMenu">
                    Teoria
                  </span>
                  <div className="mb-8 bg-page2 mx-4 md:mx-10 rounded-xl text-pageMenu text-justify font-extrabold font-typewriter tracking-wide text-sm lg:text-base px-8 py-6">
                    Część "Teoria" obejmuje zagadnienia wprowadzające do
                    optymalizacji procesów dyskretnych i stanowi fundament do
                    dalszego poznawania metod szeregowania. W tej części
                    znajdują się opisy podstawowych rodzajów problemów, w tym
                    różnic między ujęciami deterministycznymi i stochastycznymi
                    oraz sposobami ich rozwiązywania w trybie online i offline.
                    Omawiane są również kwestie związane z praktycznym
                    zastosowaniem teorii, takie jak koszt obliczeniowy uzyskania
                    rozwiązania optymalnego, wpływ czynnika ludzkiego czy rola
                    uwarunkowań ekonomicznych. W części tej przedstawiono także
                    kluczowe definicje potrzebne do pracy z harmonogramami, w
                    tym pojęcia dotyczące zadań, operacji, zasobów oraz
                    zmiennych czasowych opisujących harmonogram. Inną częścią
                    jest klasyfikacja problemów, która pozwala usystematyzować
                    różne typy zadań, ich ograniczenia oraz kryteria oceny
                    jakości harmonogramu. Całość uzupełnia omówienie powiązań
                    między kryteriami optymalizacji oraz złożonością problemów
                    szeregowania.
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:row-span-2 md:col-span-1 pb-16 px-8 md:py-16 md:pe-8 md:ps-4">
                <div className="w-full h-full rounded-xl bg-page4 shadow-[0px_4px_16px_rgba(56,52,52,0.3),_0px_8px_24px_rgba(56,52,52,0.3)]">
                  <span className="flex justify-center py-4 uppercase font-comic tracking-widest font-extrabold text-5xl lg:text-7xl text-pageMenu">
                    Algorytmy
                  </span>
                  <div className="mb-8 bg-page1 mx-4 md:mx-10 rounded-xl text-pageMenu text-justify font-extrabold font-typewriter tracking-wide text-sm lg:text-base px-8 py-6 overflow-hidden">
                    Część "Algorytmy" stanowi praktyczną część, w której
                    omawiane są metody rozwiązywania problemów szeregowania.
                    Sekcja rozpoczyna się od zagadnień przygotowawczych, takich
                    jak zrozumienie NP-trudności oraz roli generatorów liczb
                    pseudolosowych wykorzystywanych w algorytmach. Następnie
                    przedstawione są tam różne grupy problemów wraz z
                    podejściami do ich rozwiązywania: od zadań jednomaszynowych,
                    które obejmują harmonogramowanie z czasami dostępności,
                    czasami dostaw czy karami ważonymi, po permutacyjne problemy
                    przepływowe, gdzie rozwiązanie wymaga ustalenia kolejności
                    wykonywania zadań na wielu maszynach ustawionych w
                    sekwencję. Ostatnia część dotyczy problemów gniazdowych, w
                    których każde zadanie składa się z wielu operacji
                    wykonywanych na różnych maszynach. W tej sekcji
                    przedstawiono zestaw metod i strategii, które pozwalają
                    budować harmonogramy o dobrej jakości w praktycznych
                    sytuacjach.
                    <span className="opacity-0">
                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 opacity-100 brightness-200 bg-grain pointer-events-none"></div>
        <div className="absolute inset-0 opacity-100 brightness-200 bg-grain pointer-events-none"></div>
      </div>
    </React.Fragment>
  );
}

export default Comparison;
