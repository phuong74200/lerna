import { uid } from "uid";

import { components } from "@/api/v1";
import { Domain } from "@/interfaces/domain";

export class Major implements Domain<components["schemas"]["MajorResponse"]> {
  props: components["schemas"]["MajorResponse"];

  constructor(props: components["schemas"]["MajorResponse"]) {
    this.props = props;
  }

  get majorId() {
    return this.props.majorId;
  }

  get id() {
    return this.props.majorId || uid();
  }

  get institutionId() {
    return this.props.institutionId;
  }

  get institutionName() {
    return this.props.institutionName;
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get status() {
    return this.props.status;
  }

  get numberOfSubjects() {
    return this.props.numberOfSubjects;
  }

  toRaw() {
    return this.props;
  }
}
