import { uid } from "uid";

import { components } from "@/api/v1";
import { toNonAccentVietnamese } from "@/utils/converter";

export class MajorList {
  props: components["schemas"]["PageResponseMajorMajorResponse"];

  constructor(props: components["schemas"]["PageResponseMajorMajorResponse"]) {
    this.props = props;

    this.props.list = this.props.list || [];
  }

  get totalElements() {
    return this.props.totalElements;
  }

  toSelectList() {
    const list = this.props.list || [];

    return list.map((item) => ({
      searchString: toNonAccentVietnamese(JSON.stringify(item)),
      description: item.description,
      value: item.majorId?.toString() || uid(),
      label: item.name || "",
    }));
  }

  toArray() {
    return this.props.list || [];
  }
}
