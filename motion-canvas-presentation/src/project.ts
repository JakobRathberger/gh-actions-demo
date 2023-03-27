import {makeProject} from '@motion-canvas/core';

import terminal from "./scenes/terminal?scene";
import logo from "./scenes/logo?scene";
import components from "./scenes/actionComponents?scene";
import yamlFile from "./scenes/yaml?scene";

export default makeProject({
  scenes: [logo, components, terminal, yamlFile]
});
