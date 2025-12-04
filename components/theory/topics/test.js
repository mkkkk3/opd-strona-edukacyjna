import React from "react";
import "katex/dist/katex.min.css";
import Flowers from "../../../components/layout/decorations/flowers";
import Squiggly from "../../../components/layout/decorations/squiggly";
import Wavy from "../../../components/layout/decorations/wavy";
import Radio from "../../../components/layout/decorations/radio";
import Leaf from "../../../components/layout/decorations/leaf";
import Equation from "../../layout/equation";
import CodeExplain from "../../layout/code-explain";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Image from "next/image";

function Test() {
  return (
    <React.Fragment>
      <div className="w-full h-[60rem]">
        - - -
      </div>
      <div className="w-full h-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum
        magna quis luctus rhoncus. Maecenas vel ex elementum, efficitur augue
        efficitur, sollicitudin eros. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Duis consectetur pretium
        felis, eu molestie sem sollicitudin non. Aenean a ex tortor. Vestibulum
        nec purus tortor. Suspendisse ante lorem, euismod eu sodales in, maximus
        at ex. Aenean tincidunt mi at risus consequat, a cursus massa auctor.
        Integer pellentesque vehicula dui, non dictum nisi elementum sit amet.
        Pellentesque mi nisi, commodo quis mattis vel, suscipit non nunc. In hac
        habitasse platea dictumst. Vivamus molestie sagittis ex sed dictum. Sed
        at metus porta, tempus quam in, porta massa. Mauris id consectetur eros,
        id commodo orci.
      </div>
      <Flowers />
      <div className="w-full h-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum
        magna quis luctus rhoncus. Maecenas vel ex elementum, efficitur augue
        efficitur, sollicitudin eros. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Duis consectetur pretium
        felis, eu molestie sem sollicitudin non. Aenean a ex tortor. Vestibulum
        nec purus tortor. Suspendisse ante lorem, euismod eu sodales in, maximus
        at ex. Aenean tincidunt mi at risus consequat, a cursus massa auctor.
        Integer pellentesque vehicula dui, non dictum nisi elementum sit amet.
        Pellentesque mi nisi, commodo quis mattis vel, suscipit non nunc. In hac
        habitasse platea dictumst. Vivamus molestie sagittis ex sed dictum. Sed
        at metus porta, tempus quam in, porta massa. Mauris id consectetur eros,
        id commodo orci.
      </div>
      <Squiggly />
      <div className="w-full h-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum
        magna quis luctus rhoncus. Maecenas vel ex elementum, efficitur augue
        efficitur, sollicitudin eros. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Duis consectetur pretium
        felis, eu molestie sem sollicitudin non. Aenean a ex tortor. Vestibulum
        nec purus tortor. Suspendisse ante lorem, euismod eu sodales in, maximus
        at ex. Aenean tincidunt mi at risus consequat, a cursus massa auctor.
        Integer pellentesque vehicula dui, non dictum nisi elementum sit amet.
        Pellentesque mi nisi, commodo quis mattis vel, suscipit non nunc. In hac
        habitasse platea dictumst. Vivamus molestie sagittis ex sed dictum. Sed
        at metus porta, tempus quam in, porta massa. Mauris id consectetur eros,
        id commodo orci.
      </div>
      <Wavy />
      <div className="w-full h-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum
        magna quis luctus rhoncus. Maecenas vel ex elementum, efficitur augue
        efficitur, sollicitudin eros. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Duis consectetur pretium
        felis, eu molestie sem sollicitudin non. Aenean a ex tortor. Vestibulum
        nec purus tortor. Suspendisse ante lorem, euismod eu sodales in, maximus
        at ex. Aenean tincidunt mi at risus consequat, a cursus massa auctor.
        Integer pellentesque vehicula dui, non dictum nisi elementum sit amet.
        Pellentesque mi nisi, commodo quis mattis vel, suscipit non nunc. In hac
        habitasse platea dictumst. Vivamus molestie sagittis ex sed dictum. Sed
        at metus porta, tempus quam in, porta massa. Mauris id consectetur eros,
        id commodo orci.
      </div>
      <Radio />
      <div className="w-full h-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum
        magna quis luctus rhoncus. Maecenas vel ex elementum, efficitur augue
        efficitur, sollicitudin eros. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Duis consectetur pretium
        felis, eu molestie sem sollicitudin non. Aenean a ex tortor. Vestibulum
        nec purus tortor. Suspendisse ante lorem, euismod eu sodales in, maximus
        at ex. Aenean tincidunt mi at risus consequat, a cursus massa auctor.
        Integer pellentesque vehicula dui, non dictum nisi elementum sit amet.
        Pellentesque mi nisi, commodo quis mattis vel, suscipit non nunc. In hac
        habitasse platea dictumst. Vivamus molestie sagittis ex sed dictum. Sed
        at metus porta, tempus quam in, porta massa. Mauris id consectetur eros,
        id commodo orci.
      </div>
      <Leaf />
      <div className="w-full h-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum
        magna quis luctus rhoncus. Maecenas vel ex elementum, efficitur augue
        efficitur, sollicitudin eros. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Duis consectetur pretium
        felis, eu molestie sem sollicitudin non. Aenean a ex tortor. Vestibulum
        nec purus tortor. Suspendisse ante lorem, euismod eu sodales in, maximus
        at ex. Aenean tincidunt mi at risus consequat, a cursus massa auctor.
        Integer pellentesque vehicula dui, non dictum nisi elementum sit amet.
        Pellentesque mi nisi, commodo quis mattis vel, suscipit non nunc. In hac
        habitasse platea dictumst. Vivamus molestie sagittis ex sed dictum. Sed
        at metus porta, tempus quam in, porta massa. Mauris id consectetur eros,
        id commodo orci.
      </div>
      <Equation
        testing={false}
        equation={"$1\\;||\\;\\omega_i T_i$"}
        dividingArray={[
          {
            width: 20,
            tooltip: (
              <p>
                Interpretacja parametru <strong>1</strong>
              </p>
            ),
          },
          {
            width: 10,
            tooltip: (
              <p>
                Podział na maszynydsjfioja fdiofjasio fiojdsaoi jfiadsj
                fioajsdif jasdiojf ioasjdofi jaisodjf oiajsdio fjadsioj
                fioajsdio fjoiajdsio fjsaoidj fioadsio jfioasdjf ioadsij foiasdj
                fiojaiods jfiofsajio jfaoijfd s równoległe (||)
              </p>
            ),
          },
          {
            width: 70,
            tooltip: (
              <p>
                Kryterium <InlineMath math={"\\omega_i T_i"} /> – ważona suma
                spóźnień
              </p>
            ),
          },
        ]}
      />
      <div className="w-full h-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum
        magna quis luctus rhoncus. Maecenas vel ex elementum, efficitur augue
        efficitur, sollicitudin eros. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Duis consectetur pretium
        felis, eu molestie sem sollicitudin non. Aenean a ex tortor. Vestibulum
        nec purus tortor. Suspendisse ante lorem, euismod eu sodales in, maximus
        at ex. Aenean tincidunt mi at risus consequat, a cursus massa auctor.
        Integer pellentesque vehicula dui, non dictum nisi elementum sit amet.
        Pellentesque mi nisi, commodo quis mattis vel, suscipit non nunc. In hac
        habitasse platea dictumst. Vivamus molestie sagittis ex sed dictum. Sed
        at metus porta, tempus quam in, porta massa. Mauris id consectetur eros,
        id commodo orci.
      </div>

      <CodeExplain
        image={
          <Image src="/carbon.png" alt="Image" width={936} height={968} />
        }
        dividingArray={[
          {
            height: 40,
            tooltip: (
              <>Pętla for – przechodzimy po wszystkich elementach tablicy.</>
            ),
          },
          {
            height: 35,
            tooltip: (
              <>
                Instrukcja sumowania wartości do zmiennej <b>sum</b>.
              </>
            ),
          },
          {
            height: 25,
            tooltip: <>Zamknięcie pętli, koniec bloku kodu.</>,
          },
        ]}
        testing={true}
      />
    </React.Fragment>
  );
}

export default Test;