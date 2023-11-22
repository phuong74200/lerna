import { components } from "@/api/v1";
import { Department } from "@/domains/department";
import { toNonAccentVietnamese } from "@/utils/converter";

export class DepartmentList {
  props: Department[] = [];

  constructor(props: components["schemas"]["DepartmentResponse"][]) {
    this.props = props.map((item) => new Department(item));
  }

  toSelectList() {
    return this.props.map((item) => ({
      searchString: toNonAccentVietnamese(JSON.stringify(item.toRaw())),
      value: item.departmentId || "",
      label: item.departmentName || "",
    }));
  }

  toArray() {
    return this.props;
  }
}
