import { components } from "@/api/v1";
import { Manager } from "@/domains/manager";
import { toNonAccentVietnamese } from "@/utils/converter";

export class ManagerList {
  props: Manager[] = [];

  constructor(props: components["schemas"]["ManagerResponse"][]) {
    this.props = props.map((item) => new Manager(item));
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
