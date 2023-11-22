import { components } from "@/api/v1";
import { Major } from "@/domains/major";
import { toNonAccentVietnamese } from "@/utils/converter";

export class MajorList {
  props: Major[] = [];

  constructor(props: components["schemas"]["MajorResponse"][]) {
    this.props = props.map((item) => new Major(item));
  }

  toSelectList() {
    return this.props.map((item) => ({
      searchString: toNonAccentVietnamese(JSON.stringify(item.toRaw())),
      description: item.description,
      value: item.institutionId || "",
      label: item.name || "",
    }));
  }

  toArray() {
    return this.props;
  }
}
