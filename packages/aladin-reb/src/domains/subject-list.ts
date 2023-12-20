import { components } from "@/api/v1";
import { Subject } from "@/domains/subject";
import { toNonAccentVietnamese } from "@/utils/converter";

export class SubjectList {
  props: Subject[] = [];

  constructor(props: components["schemas"]["SubjectResponse"][]) {
    this.props = props.map((item) => new Subject(item));
  }

  toSelectList() {
    return this.props.map((item) => ({
      searchString: toNonAccentVietnamese(JSON.stringify(item.toRaw())),
      description: item.description,
      value: item.subjectId?.toString() || "",
      label: item.name || "",
    }));
  }

  toArray() {
    return this.props;
  }
}
