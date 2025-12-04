import React from "react";
import Test from "../components/theory/topics/test";
import CharakterystykaProblemow from "../components/theory/topics/charakterystyka-problemow";
import DeterministyczneStochastyczne from "../components/theory/topics/deterministyczne-stochastyczne";
import OnlineOffline from "../components/theory/topics/online-offline";
import TeoriaRzeczywistosc from "../components/theory/topics/teoria-rzeczywistosc";
import RozwiazanieOptymalne from "../components/theory/topics/rozwiazanie-optymalne";
import CzynnikLudzki from "../components/theory/topics/czynnik-ludzki";
import CzynnikiEkonomiczne from "../components/theory/topics/czynniki-ekonomiczne";
import PodstawowePojecia from "../components/theory/topics/pojecia-podstawowe";
import ZadaniaOperacje from "../components/theory/topics/zadania-operacje";
import ZadaniaMaszynyOperacje from "../components/theory/topics/zadania-maszyny-operacje";
import Przygotowanie from "../components/algorithms/topics/przygotowanie";
import GeneratoryPseudolosowe from "../components/algorithms/topics/generatory-pseudolosowe";
import NPTrudnosc from "../components/algorithms/topics/np-trudnosc";
import ProblemyJednomaszynowe from "../components/algorithms/topics/problemy-jednomaszynowe";
import PermutacyjneProblemyPrzeplywowe from "@/components/algorithms/topics/permutacyjne-problemy-przeplywowe";
import ProblemyGniazdowe from "@/components/algorithms/topics/problemy-gniazdowe";
import Schrage from "@/components/algorithms/topics/schrage";
import Johnson from "@/components/algorithms/topics/johnson";
import Insa from "@/components/algorithms/topics/insa";
import SchragePrzerwania from "@/components/algorithms/topics/schrage-przerwania";
import BruteForceJednomaszynowe from "@/components/algorithms/topics/brute-force-jednomaszynowe";
import ProgramowanieDynamiczneZNawrotami from "@/components/algorithms/topics/programowanie-dynamiczne-z-namwrotami-";
import BruteForcePermutacyjne from "@/components/algorithms/topics/brute-force-permutacyjne";
import BranchAndBound from "@/components/algorithms/topics/branch-and-bound";
import PojeciaZwiazaneZZadaniami from "@/components/theory/topics/pojecia-zwiazane-z-zadaniami";
import PojeciaZwiazaneZOperacjami from "@/components/theory/topics/pojecia-zwiazane-z-operacjami";
import ZmienneCzasowe from "@/components/theory/topics/zmienne-czasowe";
import JakOpisacHarmonogram from "@/components/theory/topics/jak-opisac-harmonogram";
import KlasyfikacjaZagadnien from "@/components/theory/topics/klasyfikacja-zagadnien";
import ParametrAlfa from "@/components/theory/topics/parametr-afla";
import ParametrBeta from "@/components/theory/topics/parametr-beta";
import ParametrGamma from "@/components/theory/topics/parametr-gamma";

export const mainTheoryTree = {
  theory: [
    {
      id: "charakterystyka_rozwazanych_problemow",
      title: "Charakterystyka rozważanych problemów",
      component: (
        <CharakterystykaProblemow
          title={"Charakterystyka rozważanych problemów"}
        />
      ),
      content: [
        {
          id: "problemy_deterministyczne_i_stochastyczne",
          subtitle: "Problemy deterministyczne i stochastyczne",
          component: (
            <DeterministyczneStochastyczne
              title={"Problemy deterministyczne i stochastyczne"}
            />
          ),
        },
        {
          id: "rozwiazania_w_trybie_online_i_offline",
          subtitle: "Rozwiązania w trybie on-line i off-line",
          component: (
            <OnlineOffline title={"Rozwiązania w trybie on-line i off-line"} />
          ),
        },
      ],
    },

    {
      id: "teoria_a_rzeczywistosc",
      title: "Teoria a rzeczywistość",
      component: <TeoriaRzeczywistosc title={"Teoria a rzeczywistość"} />,
      content: [
        {
          id: "koszt_wyznaczenia_rozwiazania_optymalnego",
          subtitle: "Koszt wyznaczenia rozwiązania optymalnego",
          component: (
            <RozwiazanieOptymalne
              title={"Koszt wyznaczenia rozwiązania optymalnego"}
            />
          ),
        },
        {
          id: "czynnik_ludzki_w_optymalizacji",
          subtitle: "Czynnik ludzki w optymalizacji procesów dyskretnych",
          component: (
            <CzynnikLudzki
              title={"Czynnik ludzki w optymalizacji procesów dyskretnych"}
            />
          ),
        },
        {
          id: "czynniki_ekonomiczne",
          subtitle: "Czynniki ekonomiczne",
          component: <CzynnikiEkonomiczne title={"Czynniki ekonomiczne"} />,
        },
      ],
    },

    {
      id: "pojecia_podstawowe",
      title: "Pojęcia podstawowe",
      component: <PodstawowePojecia title={"Pojęcia podstawowe"} />,
      content: [
        {
          id: "zadania_i_operacje",
          subtitle: "Zadania i operacje",
          component: <ZadaniaOperacje title={"Zadania i operacje"} />,
        },
        {
          id: "zbiory_zadan_maszyn_operacji",
          subtitle: "Zbiór zadań, zbiór maszyn i zbiór operacji",
          component: (
            <ZadaniaMaszynyOperacje
              title={"Zbiór zadań, zbiór maszyn i zbiór operacji"}
            />
          ),
        },
        {
          id: "pojecia_zwiazane_z_zadaniami",
          subtitle: "Pojęcia związane z zadaniami",
          component: (
            <PojeciaZwiazaneZZadaniami title={"Pojęcia związane z zadaniami"} />
          ),
        },
        {
          id: "pojecia_zwiazane_z_operacjami",
          subtitle: "Pojęcia związane z operacjami",
          component: (
            <PojeciaZwiazaneZOperacjami
              title={"Pojęcia związane z operacjami"}
            />
          ),
        },
      ],
    },

    {
      id: "zmienne_czasowe_w_procesie_szeregowania",
      title: "Zmienne czasowe w procesie szeregowania",
      component: (
        <ZmienneCzasowe title={"Zmienne czasowe w procesie szeregowania"} />
      ),
      content: [
        {
          id: "jak_opisac_harmonogram",
          subtitle: "Jak opisać harmonogram?",
          component: <JakOpisacHarmonogram title={"Jak opisać harmonogram?"} />,
        },
      ],
    },

    {
      id: "klasyfikacja_zagadnien_szeregowania_alpha_beta_gamma",
      title: "Klasyfikacja zagadnień szeregowania $\\alpha|\\beta|\\gamma$",
      component: (
        <KlasyfikacjaZagadnien
          title={"Klasyfikacja zagadnień szeregowania $\\alpha|\\beta|\\gamma$"}
        />
      ),
      content: [
        {
          id: "typy_zagadnien_parametr_alpha",
          subtitle: "Typy zagadnień – parametr $\\alpha$",
          component: (
            <ParametrAlfa title={"Typy zagadnień – parametr $\\alpha$"} />
          ),
        },
        {
          id: "dodatkowe_ograniczenia_parametr_beta",
          subtitle: "Dodatkowe ograniczenia – parametr $\\beta$",
          component: (
            <ParametrBeta
              title={"Dodatkowe ograniczenia – parametr $\\beta$"}
            />
          ),
        },
        {
          id: "kryteria_optymalizacji_parametr_gamma",
          subtitle: "Kryteria optymalizacji – parametr $\\gamma$",
          component: (
            <ParametrGamma
              title={"Kryteria optymalizacji – parametr $\\gamma$"}
            />
          ),
        },
      ],
    },
  ],
};

export const mainAlgorithmTree = {
  theory: [
    {
      id: "przygotowanie",
      title: "Przygotowanie",
      component: <Przygotowanie title={"Przygotowanie"} />,
      content: [
        {
          id: "generatory_liczb_pseudolosowych",
          subtitle: "Generatory liczb pseudolosowych",
          component: (
            <GeneratoryPseudolosowe title={"Generatory liczb pseudolosowych"} />
          ),
        },
        {
          id: "np_trudnosc",
          subtitle: "NP-Trudność",
          component: <NPTrudnosc title={"NP-Trudność"} />,
        },
      ],
    },
    {
      id: "problemy_jednomaszynowe",
      title: "Problemy jednomaszynowe",
      component: <ProblemyJednomaszynowe title={"Problemy jednomaszynowe"} />,
      content: [
        {
          id: "problem_1_r_i_q_i_c_max_schrage",
          subtitle:
            "Problem $1|r_i, q_i|C_{max}$ – rozwiązanie za pomocą algorytmu Schrage",
          component: (
            <Schrage title={"$1|r_i, q_i|C_{max}$ - Algorytm Schrage"} />
          ),
        },
        {
          id: "problem_1_r_i_q_i_pmtn_c_max_schrage",
          subtitle:
            "Problem $1|r_i, q_i, pmtn|C_{max}$ – rozwiązanie za pomocą algorytmu Schrage",
          component: (
            <SchragePrzerwania
              title={
                "$1|r_i, q_i, pmtn|C_{max}$ – algorytm Schrage z przerwaniami"
              }
            />
          ),
        },
        {
          id: "problem_1_omega_i_t_i_bruteforce",
          subtitle:
            "Problem $1||\\omega_i T_i$ – rozwiązanie za pomocą algorytmu Brute Force",
          component: (
            <BruteForceJednomaszynowe
              title={"$1||\\omega_i T_i$ – algorytm Brute Force"}
            />
          ),
        },
        {
          id: "problem_1_omega_i_t_i_dynamic_programming",
          subtitle:
            "Problem $1||\\omega_i T_i$ – rozwiązanie za pomocą programowania dynamicznego z nawrotami",
          component: (
            <ProgramowanieDynamiczneZNawrotami
              title={
                "$1||\\omega_i T_i$ – programowanie dynamiczneg z nawrotami"
              }
            />
          ),
        },
      ],
    },

    {
      id: "permutacyjne_problemy_przeplywowe",
      title: "Permutacyjne problemy przepływowe",
      component: (
        <PermutacyjneProblemyPrzeplywowe
          title={"Permutacyjne problemy przepływowe"}
        />
      ),
      content: [
        {
          id: "problem_f_star_c_max_johnson",
          subtitle:
            "Problem $F^{*}||C_{max}$ – rozwiązanie za pomocą algorytmu Johnsona",
          component: <Johnson title={"$F^{*}||C_{max}$ – algorytm Johnsona"} />,
        },
        {
          id: "problem_f_star_c_max_bruteforce",
          subtitle:
            "Problem $F^{*}||C_{max}$ – rozwiązanie za pomocą algorytmu Brute Force",
          component: (
            <BruteForcePermutacyjne
              title={"$F^{*}||C_{max}$ – algorytm Brute Force"}
            />
          ),
        },
        {
          id: "problem_f_star_c_max_branch_and_bound",
          subtitle:
            "Problem $F^{*}||C_{max}$ – rozwiązanie za pomocą algorytmu Branch and Bound",
          component: (
            <BranchAndBound
              title={"$F^{*}||C_{max}$ – algorytm Branch and Bound"}
            />
          ),
        },
      ],
    },

    {
      id: "problem_gniazdowy",
      title: "Problem Gniazdowy",
      component: <ProblemyGniazdowe title={"Problem Gniazdowy"} />,
      content: [
        {
          id: "problem_j_c_max_insa",
          subtitle:
            "Problem $J||C_{max}$ – rozwiązanie za pomocą algorytmu INSA",
          component: <Insa title={"$J||C_{max}$ – algorytm INSA"} />,
        },
      ],
    },
  ],
};

export function findNodeById(tree, id) {
  for (const topic of tree.theory) {
    if (topic.id === id) return topic;
    for (const content of topic.content || []) {
      if (content.id === id) return content;
    }
  }
  return "- - -";
}
