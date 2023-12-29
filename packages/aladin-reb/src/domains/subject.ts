import { uid } from "uid";

import { components } from "@/api/v1";
import { Domain } from "@/interfaces/domain";

export class Subject implements Domain {
  props: components["schemas"]["SubjectResponse"];

  constructor(props: components["schemas"]["SubjectResponse"]) {
    this.props = props;
  }

  get id() {
    return this.props.subjectId ?? uid();
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
