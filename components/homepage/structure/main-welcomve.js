import React from "react";
import Image from "next/image";
import Link from "next/link";

function MainWelcome({ isDesktop }) {
  return (
    <React.Fragment>
      {isDesktop && (
        <div className="w-full h-20 flex justify-center items-end relative bg-page1">
          <span className="z-20 uppercase font-comic tracking-widest font-extrabold text-3xl md:text-5xl lg:text-7xl text-pageMenu">
            Optymalizacja
          </span>
          <div className="absolute inset-0 flex items-center justify-center z-10 w-full">
            <Image
              src={"/brush.png"}
              alt="Image"
              placeholder="blur"
              height={278}
              width={856}
              blurDataURL={"/brush.png"}
              className="hue-rotate-[14deg] brightness-[355%] saturate-[115%] opacity-[40%] scale-[50%] mt-12 lg:mt-8"
            />
          </div>
          <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
          <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
        </div>
      )}
      <div className="w-full h-[32rem] md:h-[33rem] relative bg-page1">
        <div className="absolute z-10 w-full h-full">
          <div className="w-full h-full flex flex-col md:flex-row">
            {isDesktop && (
              <div className="w-full h-[50%] md:w-1/2 md:h-[100%] relative">
                <Image
                  src="/cat_homepage.gif"
                  alt="Image"
                  placeholder="blur"
                  blurDataURL="/cat_homepage.gif"
                  fill
                  className="h-full object-cover object-left xl:ml-40 lg:ml-2 xl:scale-110"
                />
                {isDesktop && (
                  <div className="absolute -right-[25.5rem] top-[2rem] w-36 h-36">
                    <Image
                      src="/splash_img.gif"
                      alt="splash"
                      height={261}
                      width={355}
                      className="object-contain scale-[300%]"
                    />
                  </div>
                )}
              </div>
            )}

            <div className="w-full h-[50%] md:w-1/2 md:h-[100%]">
              <div className="w-full h-full flex flex-col">
                {!isDesktop && (
                  <div className="w-full h-[15%] flex justify-start items-end relative">
                    <div className="z-20 ps-3 md:ps-0 uppercase font-comic tracking-widest font-extrabold text-5xl lg:text-7xl text-pageMenu relative">
                      Optymalizacja
                    </div>
                  </div>
                )}
                <div className="w-full h-[15%] flex justify-start items-end relative">
                  <div className="z-20 ps-3 md:ps-0 uppercase font-comic tracking-widest font-extrabold text-5xl lg:text-7xl text-pageMenu relative">
                    Procesów
                  </div>
                  <div className="absolute z-10 w-full h-full">
                    <div className="w-[20rem] h-full">
                      <Image
                        src={"/brush.png"}
                        alt="Image"
                        placeholder="blur"
                        height={278}
                        width={856}
                        blurDataURL={"/brush.png"}
                        className="hue-rotate-[14deg] brightness-[355%] saturate-[115%] opacity-[40%] scale-[129%] lg:scale-[140%] mt-1 lg:-mt-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-[15%] flex justify-start md:justify-center items-end relative">
                  <span className="z-20 ps-3 md:ps-0 uppercase font-comic tracking-widest font-extrabold text-5xl lg:text-7xl text-pageMenu">
                    Dyskretnych
                  </span>
                  <div className="absolute z-10 w-full h-full">
                    <div className="h-full w-full flex justify-start md:justify-center">
                      <Image
                        src={"/brush.png"}
                        alt="Image"
                        placeholder="blur"
                        height={278}
                        width={856}
                        blurDataURL={"/brush.png"}
                        className="w-[20rem] hue-rotate-[14deg] brightness-[355%] saturate-[115%] opacity-[40%] scale-[129%] lg:scale-[180%] -mb-8 lg:-mb-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex-grow">
                  <div className="w-full h-full pt-4 md:pt-4 lg:pt-6 pl-3 md:pl-0 pr-3 lg:pr-28 flex flex-col">
                    <p className="text-pageMenu text-justify font-extrabold font-typewriter tracking-wide text-sm lg:text-base px-2">
                      <span className="block">Witaj!</span>
                      Na tej stronie znajdziesz wprowadzenie do optymalizacji
                      procesów dyskretnych. Treści tutaj obejmują podstawowe
                      zagadnienia teoretyczne, takie jak charakterystyka
                      problemów czy klasyfikacja zadań szeregowania. Poznasz
                      również wybrane typy problemów szeregowania oraz ogólne
                      metody stosowane do ich rozwiązywania. Przewodnikiem po
                      całej przygodzie jest Max, kot który krok po kroku
                      przeprowadzi Cię przez najważniejsze tematy.
                    </p>
                    <div className="w-full flex-grow justify-center items-center">
                      <div className="w-full max-h-32 h-full grid grid-cols-2 gap-4">
                        <Link
                          href="/teoria"
                          className="col-span-1 mx-4 my-8 relative block group cursor-pointer"
                          aria-label="Przejdź do teorii"
                        >
                          <div className="absolute z-10 w-full h-full rounded-xl bg-page3 flex items-center justify-center transition-transform duration-200 transform-gpu group-hover:scale-105 group-active:scale-95">
                            <p className="font-extrabold font-typewriter tracking-wide text-xl lg:text-3xl">
                              Teoria
                            </p>
                          </div>
                          <div className="absolute w-full h-full rounded-xl bg-page3 opacity-50 transition-all duration-200 top-3 left-3 group-hover:top-5 group-hover:left-5 group-hover:scale-105 group-active:scale-95 group-active:top-3 group-active:left-3" />
                        </Link>
                        <Link
                          href="/algorytmy"
                          className="col-span-1 mx-4 my-8 relative block group cursor-pointer"
                          aria-label="Przejdź do teorii"
                        >
                          <div className="absolute z-10 w-full h-full rounded-xl bg-page4 flex items-center justify-center transition-transform duration-200 transform-gpu group-hover:scale-105 group-active:scale-95">
                            <p className="font-extrabold font-typewriter tracking-wide text-xl lg:text-3xl">
                              Algorytmy
                            </p>
                          </div>
                          <div className="absolute w-full h-full rounded-xl bg-page4 opacity-50 transition-all duration-200 top-3 left-3 group-hover:top-5 group-hover:left-5 group-hover:scale-105 group-active:scale-95 group-active:top-3 group-active:left-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
        <div className="opacity-100 brightness-200 absolute w-full h-full bg-grain"></div>
      </div>
    </React.Fragment>
  );
}

export default MainWelcome;
