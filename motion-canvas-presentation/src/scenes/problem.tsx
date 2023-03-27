import programmerImg from "../../images/pissedProgrammer.jpg";

import {makeScene2D} from "@motion-canvas/2d";
import {Circle, Img, Layout, Rect, Txt} from "@motion-canvas/2d/lib/components";
import {all, waitFor} from "@motion-canvas/core/lib/flow";
import {slideTransition} from "@motion-canvas/core/lib/transitions";
import {Direction} from "@motion-canvas/core/lib/types";
import {beginSlide, createRef} from "@motion-canvas/core/lib/utils";


export default makeScene2D(function* (view) {

    const programmerBG = createRef<Img>()
    const backgroundRect = createRef<Rect>()

    view.add(
        <>
            <Img
                height={()=> view.height()} width={()=> view.width()}
                ref={programmerBG}
                src={programmerImg}
                radius={40}
                smoothCorners
                clip
                opacity={0.7}
            />


            <Rect ref={backgroundRect}
                  fill={"white"}
                  height={() => view.height() / 2 - 80}
                  width={1000}
                  opacity={0.9}
                  x={() => view.width() / 2 - (backgroundRect().width() / 2) - 40}
                  y={-150}
                  radius={40}>
                <Txt x={() => backgroundRect().width() / -2 + backgroundRect().width() / 4 + 40}
                     y={() => backgroundRect().height() / -2 + 100}
                     width={() => backgroundRect().width() / 2}
                     fontSize={100} text={"Manually"}/>

                <Circle fill={"black"}
                        x={() => backgroundRect().width() / -2 + 100}
                        y={() => backgroundRect().height() / -2 + 200}
                        height={20} width={20}/>

                <Txt x={() => backgroundRect().width() / -2 + backgroundRect().width() / 4 + 140}
                     y={() => backgroundRect().height() / -2 + 200}
                     width={() => backgroundRect().width() / 2}
                     fontSize={40}
                     text={"testing, building and deploying applications"}/>

                <Circle fill={"black"}
                        x={() => backgroundRect().width() / -2 + 100}
                        y={() => backgroundRect().height() / -2 + 300}
                        height={20} width={20}/>

                <Txt x={() => backgroundRect().width() / -2 + backgroundRect().width() / 4 + 140}
                     y={() => backgroundRect().height() / -2 + 300}
                     width={() => backgroundRect().width() / 2}
                     fontSize={40} text={"ensuring code quality (linting, formatting)"}/>

            </Rect>
        </>
    )

    yield* slideTransition(Direction.Bottom, 1.5)

    yield* beginSlide("End Problem")
})
