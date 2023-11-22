import { components } from "@/api/v1";
import { Student } from "@/domains/student";
import { toNonAccentVietnamese } from "@/utils/converter";

export class StudentList {
  props: Student[] = [];

  constructor(props: components["schemas"]["StudentResponse"][]) {
    this.props = props.map((item) => new Student(item));
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
