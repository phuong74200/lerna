import { components } from "@/api/v1";
import { TeachingAssistant } from "@/domains/ta";
import { toNonAccentVietnamese } from "@/utils/converter";

export class TeachingAssistantList {
  props: TeachingAssistant[] = [];

  constructor(props: components["schemas"]["TAResponse"][]) {
    this.props = props.map((item) => new TeachingAssistant(item));
  }

  toSelectList() {
    return this.props.map((item) => ({
      searchString: toNonAccentVietnamese(JSON.stringify(item.toRaw())),
      description: item?.email,
      value: item.userId || "",
      label: item.fullName || "",
    }));
  }

  toArray() {
    return this.props;
  }
}
