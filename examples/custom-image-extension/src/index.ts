import { ExtensionContext } from "@foxglove/studio";
import { initExamplePanel } from "./ExamplePanel";

export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerPanel({
    name: "Foxglove Example Image Extension Panel",
    initPanel: initExamplePanel,
  });
}
