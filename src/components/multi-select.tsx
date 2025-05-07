import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/multi-selector";
import { useState } from "react";

export default function MultiSelect() {
  const [value, setValue] = useState<any>([]);
  return (
    <MultiSelector
      values={value}
      onValuesChange={setValue}
      loop
      className="max-w-xs"
    >
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Select your framework" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          <MultiSelectorItem value={"React"}>React</MultiSelectorItem>
          <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
          <MultiSelectorItem value={"Svelte"}>Svelte</MultiSelectorItem>
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  );
}
