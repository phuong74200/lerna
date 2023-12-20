import { uid } from "uid";

import { Domain } from "@/interfaces/domain";
import { toNonAccentVietnamese } from "@/utils/converter";

export class DomainList<T extends Domain> {
  props: T[] = [];

  constructor(props: T[]) {
    this.props = props;
  }

  toSelectList() {
    return this.props.map((item) => ({
      searchString: toNonAccentVietnamese(JSON.stringify(item.toRaw())),
      value: item.id.toString() || uid(),
      label: item.name || "(no name)",
    }));
  }
}
