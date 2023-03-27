import {makeProject} from '@motion-canvas/core';

import terminal from "./scenes/terminal?scene";
import logo from "./scenes/logo?scene";
import components from "./scenes/actionComponents?scene";
import yamlFile from "./scenes/yaml?scene";
import problem from "./scenes/problem?scene";
import problemMemes from "./scenes/problemMemes?scene";

export default makeProject({
  scenes: [logo, problem, problemMemes, components]
});
