import { components } from "@/api/v1";

export class Department {
  props: components["schemas"]["DepartmentResponse"];

  constructor(props: components["schemas"]["DepartmentResponse"]) {
    this.props = props;
  }

  get departmentId() {
    return this.props.departmentId;
  }

  get departmentName() {
    return this.props.departmentName;
  }

  get note() {
    return this.props.note;
  }

  get status() {
    return this.props.status;
  }

  toRaw() {
    return this.props;
  }
}
