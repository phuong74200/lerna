import { components } from "@/api/v1";

export class Subject {
  props: components["schemas"]["SubjectResponse"];

  constructor(props: components["schemas"]["SubjectResponse"]) {
    this.props = props;
  }

  get institutionId() {
    return this.props.institutionId;
  }

  get name() {
    return this.props.name;
  }

  get institutionName() {
    return this.props.institutionName;
  }

  get majorName() {
    return this.props.majorName;
  }

  get description() {
    return this.props.description;
  }

  get status() {
    return this.props.status;
  }

  get subjectId() {
    return this.props.subjectId;
  }

  toRaw() {
    return this.props;
  }
}
