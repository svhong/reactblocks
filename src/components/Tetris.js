import React from "react";

import { createStage } from "../gameHelpers";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => (
    <div>
        <Stage stage={createStage()} />
        <aside>
            <div>
                <Display text="score" />
                <Display text="Rows" />
                <Display text="Level" />
            </div>
            <StartButton />
        </aside>
    </div>
)

export default Tetris;