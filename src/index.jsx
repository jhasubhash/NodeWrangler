import React from "react";

import "./styles.css";
import { PanelController } from "./controllers/PanelController.jsx";
import { CommandController } from "./controllers/CommandController.jsx";
import { About } from "./components/About.jsx";
import { NodeWrangler } from "./panels/NodeWrangler.jsx";

import { entrypoints } from "uxp";

const aboutController = new CommandController(({ dialog }) => <About dialog={dialog}/>, { id: "showAbout", title: "Node Wrangler", size: { width: 480, height: 480 } });
const nodeController =  new PanelController(() => <NodeWrangler/>, {id: "nodeWrangler", menuItems: [
    { id: "reload1", label: "Reload Plugin", enabled: true, checked: false, oninvoke: () => location.reload() },
    { id: "dialog1", label: "About this Plugin", enabled: true, checked: false, oninvoke: () => aboutController.run() },
] });

entrypoints.setup({
    plugin: {
        create(plugin) {
        },
        destroy() {
        }
    },
    commands: {
    },
    panels: {
        nodeWrangler: nodeController
    }
});
